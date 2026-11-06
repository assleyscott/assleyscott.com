/**
 * ASR: The Collector online score adapter.
 * Vanilla JS. No framework. Load it before the game, or import() it.
 *
 *   ASRScores.createScoreAdapter({ apiBase })
 *   .getTop10()
 *   .startRun()
 *   .submit({ token, name, score, patches, ms })
 *
 * Each completed run is capped at 2000; actual points come from game performance.
 * mode is cozy or standard; names are exactly three A-Z initials.
 */
(function (root) {
  var STORAGE_KEY = "asr-collector-scores";
  var STORAGE_CAP = 100;

  var SCORE = { MAX_SCORE: 2000, CLOCK_SKEW_MS: 5000 };
  function maxScore() { return SCORE.MAX_SCORE; }
  function suggestedScore() { return SCORE.MAX_SCORE; }

  function compare(a, b) {
    if (b.score !== a.score) return b.score - a.score;
    return String(a.date).localeCompare(String(b.date));
  }

  function createScoreAdapter(options) {
    options = options || {};
    var apiBase = String(options.apiBase || "").replace(/\/$/, "");
    var storage = options.storage || (typeof localStorage !== "undefined" ? localStorage : null);

    function readLocal() {
      if (!storage) return [];
      try {
        var parsed = JSON.parse(storage.getItem(STORAGE_KEY) || "[]");
        if (!Array.isArray(parsed)) return [];
        return parsed.filter(function (row) {
          return row && typeof row.name === "string" && typeof row.score === "number";
        });
      } catch (e) {
        return [];
      }
    }

    function writeLocal(rows) {
      if (!storage) return;
      var trimmed = rows.slice().sort(compare).slice(0, STORAGE_CAP);
      storage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    }

    function remember(entry) {
      var rows = readLocal();
      rows.push(entry);
      writeLocal(rows);
    }

    function topLocal() {
      return readLocal().slice().sort(compare).slice(0, 10);
    }

    function localEntry(input, ms) {
      var name = String(input.name == null ? "" : input.name).trim().toUpperCase();
      return {
        name: name,
        score: Number(input.score),
        patches: Number(input.patches),
        mode: input.mode,
        date: new Date().toISOString(),
        ms: ms,
      };
    }

    async function getTop10() {
      try {
        var response = await fetch(apiBase + "/scores", { method: "GET", signal: AbortSignal.timeout(4000) });
        if (!response.ok) throw new Error("scores " + response.status);
        var data = await response.json();
        if (!data || !Array.isArray(data.scores)) throw new Error("scores shape");
        return { source: "online", scores: data.scores };
      } catch (error) {
        return {
          source: "local",
          scores: topLocal(),
          error: error && error.message ? error.message : String(error),
        };
      }
    }

    async function startRun() {
      var startedAt = Date.now();
      try {
        var response = await fetch(apiBase + "/start", { method: "GET", signal: AbortSignal.timeout(4000) });
        if (!response.ok) throw new Error("start " + response.status);
        var data = await response.json();
        if (!data || typeof data.token !== "string") throw new Error("start token");
        return {
          source: "online",
          token: data.token,
          issuedAt: data.issuedAt,
          startedAt: startedAt,
        };
      } catch (error) {
        return {
          source: "local",
          token: null,
          issuedAt: null,
          startedAt: startedAt,
          error: error && error.message ? error.message : String(error),
        };
      }
    }

    async function submit(input) {
      input = input || {};
      var startedAt = typeof input.startedAt === "number" ? input.startedAt : Date.now();
      var elapsed = Math.max(0, Date.now() - startedAt);
      var ms = typeof input.ms === "number" ? Math.max(input.ms, elapsed) : elapsed;
      var entry = localEntry(input, ms);

      if (!input.token) {
        remember(entry);
        return { ok: false, source: "local", entry: entry };
      }

      try {
        var response = await fetch(apiBase + "/scores", {
          method: "POST",
          signal: AbortSignal.timeout(4000),
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: input.token,
            name: input.name,
            score: input.score,
            patches: input.patches,
            mode: input.mode,
            ms: ms,
          }),
        });
        var data = null;
        try {
          data = await response.json();
        } catch (e) {
          data = {};
        }
        if (response.ok) {
          return { ok: true, source: "online", status: response.status, entry: data.entry || entry };
        }
        if (response.status === 429 || response.status >= 500) {
          remember(entry);
          return {
            ok: false,
            source: "local",
            status: response.status,
            error: data.error || "unavailable",
            entry: entry,
          };
        }
        return {
          ok: false,
          source: "rejected",
          status: response.status,
          error: data.error || "rejected",
        };
      } catch (error) {
        remember(entry);
        return {
          ok: false,
          source: "local",
          entry: entry,
          error: error && error.message ? error.message : String(error),
        };
      }
    }

    return {
      getTop10: getTop10,
      startRun: startRun,
      submit: submit,
    };
  }

  var api = {
    createScoreAdapter: createScoreAdapter,
    suggestedScore: suggestedScore,
    maxScore: maxScore,
    SCORE: SCORE,
  };

  root.ASRScores = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
