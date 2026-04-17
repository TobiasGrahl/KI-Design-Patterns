// docs/javascripts/mermaid-init.js
// Helles Schema: dunkler Text auf hellem Lila-Hintergrund — maximaler Kontrast
window.addEventListener("DOMContentLoaded", function () {
  if (typeof mermaid === "undefined") return;

  mermaid.initialize({
    startOnLoad: true,
    theme: "base",           // "base" = vollständig überschreibbar
    themeVariables: {
      // ── Knoten ──────────────────────────────────────────────────────
      primaryColor:        "#ede9fe",   // helles Lila — Knoten-Hintergrund
      primaryBorderColor:  "#6d28d9",   // kräftiges Lila — Rand
      primaryTextColor:    "#1e1e2e",   // fast Schwarz — Text IN Knoten

      // ── Sekundäre Knoten ────────────────────────────────────────────
      secondaryColor:        "#ddd6fe",
      secondaryBorderColor:  "#7c3aed",
      secondaryTextColor:    "#1e1e2e",

      // ── Tertiäre Knoten ─────────────────────────────────────────────
      tertiaryColor:        "#f5f3ff",
      tertiaryBorderColor:  "#a78bfa",
      tertiaryTextColor:    "#1e1e2e",

      // ── Subgraphen ──────────────────────────────────────────────────
      clusterBkg:    "#f0ebff",
      clusterBorder: "#7c3aed",

      // ── Kanten & Pfeile ─────────────────────────────────────────────
      lineColor:           "#6d28d9",
      edgeLabelBackground: "#f5f3ff",

      // ── Hintergrund ─────────────────────────────────────────────────
      background:  "#fafafa",
      mainBkg:     "#ede9fe",   // = primaryColor
      nodeBorder:  "#6d28d9",   // = primaryBorderColor

      // ── Schrift ─────────────────────────────────────────────────────
      fontFamily: "JetBrains Mono, monospace",
      fontSize:   "13px",

      // ── Sequenzdiagramme ────────────────────────────────────────────
      actorBkg:       "#ede9fe",
      actorBorder:    "#6d28d9",
      actorTextColor: "#1e1e2e",
      actorLineColor: "#6d28d9",

      activationBkgColor:    "#ddd6fe",
      activationBorderColor: "#6d28d9",

      // ── Notizen ─────────────────────────────────────────────────────
      noteBkgColor:    "#faf5ff",
      noteTextColor:   "#1e1e2e",
      noteBorderColor: "#a78bfa",

      // ── Git-Diagramme ───────────────────────────────────────────────
      git0: "#6d28d9",
      git1: "#7c3aed",
      git2: "#8b5cf6",
      git3: "#a78bfa",
      git4: "#c4b5fd",
      gitBranchLabel0: "#ffffff",
      gitBranchLabel1: "#ffffff",
      gitBranchLabel2: "#ffffff",
      gitBranchLabel3: "#1e1e2e",
      gitBranchLabel4: "#1e1e2e",

      // ── Zustandsdiagramme ───────────────────────────────────────────
      fillType0: "#ede9fe",
      fillType1: "#ddd6fe",
      fillType2: "#c4b5fd",
    },
  });
});
