// docs/javascripts/mermaid-init.js
// Mermaid mit dunklem Knoten-Theme initialisieren — hoher Kontrast
window.addEventListener("DOMContentLoaded", function () {
  if (typeof mermaid !== "undefined") {
    mermaid.initialize({
      startOnLoad: true,
      theme: "base",
      themeVariables: {
        // Knoten
        primaryColor:       "#1e1b4b",   // dunkles Indigo — Knoten-Hintergrund
        primaryBorderColor: "#a78bfa",   // Lila Rand
        primaryTextColor:   "#ffffff",   // Weißer Text in Knoten

        // Sekundäre Knoten (z.B. Subgraphen)
        secondaryColor:       "#f5f3ff",
        secondaryBorderColor: "#7c3aed",
        secondaryTextColor:   "#3730a3",

        // Tertiäre Knoten
        tertiaryColor:       "#ede9fe",
        tertiaryBorderColor: "#c4b5fd",
        tertiaryTextColor:   "#1e1e2e",

        // Linien & Pfeile
        lineColor:          "#6d28d9",
        edgeLabelBackground: "#ede9fe",

        // Hintergrund
        background:         "#ffffff",
        mainBkg:            "#1e1b4b",
        nodeBorder:         "#a78bfa",
        clusterBkg:         "#f5f3ff",
        clusterBorder:      "#7c3aed",

        // Schrift
        fontFamily:         "JetBrains Mono, monospace",
        fontSize:           "13px",

        // Aktivierungs- & Sequenz-Diagramme
        activationBorderColor: "#6d28d9",
        activationBkgColor:    "#1e1b4b",
        actorBkg:              "#1e1b4b",
        actorBorder:           "#a78bfa",
        actorTextColor:        "#ffffff",
        actorLineColor:        "#6d28d9",

        // Notizen
        noteBkgColor:       "#faf5ff",
        noteTextColor:      "#3730a3",
        noteBorderColor:    "#c4b5fd",

        // Git-Diagramme
        git0: "#6d28d9",
        git1: "#7c3aed",
        git2: "#8b5cf6",
        git3: "#a78bfa",
      },
    });
  }
});

