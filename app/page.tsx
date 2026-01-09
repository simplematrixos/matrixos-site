// app/page.tsx

import Link from "next/link";

type HomeNavItem = {
  label: string;
  href: string;
  color: string;
  pulse?: boolean; // ONLY SIMPLE
};

// FINAL, ROLE-ENCODED COLOR MAP + SINGLE IDLE PULSE (SIMPLE ONLY)
const NAV: HomeNavItem[] = [
  { label: "MatrixOS", href: "/matrixos", color: "#E6F7FF" }, // OS / foundation
  { label: "Matrix One", href: "/matrix-one", color: "#9FA6B2" }, // hardware
  { label: "SIMPLE", href: "/simple", color: "#00FFFF", pulse: true }, // execution / CAPITAL
  { label: "Security", href: "/security", color: "#FF3B3B" }, // defense
  { label: "Documents", href: "/documents", color: "#B14CFF" }, // governance
  { label: "About", href: "/about", color: "#6B7280" }, // meta
];

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050607",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 18px",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial",
      }}
    >
      {/* Local CSS for the single dot pulse */}
      <style>{`
        @keyframes dotPulse {
          0%   { opacity: 0.45; transform: scale(1); }
          50%  { opacity: 0.95; transform: scale(1.04); }
          100% { opacity: 0.45; transform: scale(1); }
        }
      `}</style>

      <div style={{ width: "min(980px, 100%)", textAlign: "center" }}>
        {/* TOP LABEL */}
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.35em",
            opacity: 0.35,
            marginBottom: 8,
          }}
        >
          MATRIXOS
        </div>

        {/* MAIN TITLE */}
        <div
          style={{
            fontSize: 20,
            letterSpacing: "0.8em",
            fontWeight: 300,
            marginBottom: 16,
          }}
        >
          MATRIXOS
        </div>

        {/* SUBLINE */}
        <p
          style={{
            maxWidth: 760,
            margin: "0 auto",
            opacity: 0.7,
            lineHeight: 1.6,
            fontSize: 14,
          }}
        >
          A sealed financial execution system built as a physical instrument.
          MatrixOS runs as a controlled environment; SIMPLE is the in-OS interface.
        </p>

        {/* DIVIDER */}
        <div
          style={{
            margin: "28px auto",
            borderTop: "1px solid rgba(255,255,255,0.10)",
            width: "100%",
          }}
        />

        {/* SELECTOR — icon + label attached */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {NAV.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              style={{
                width: 104,
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                padding: 6,
                borderRadius: 16,
              }}
              aria-label={it.label}
            >
              <div
                style={{
                  width: 62,
                  height: 62,
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 999,
                    background: it.color,
                    boxShadow: `0 0 18px ${it.color}`,
                    animation: it.pulse ? "dotPulse 2.9s ease-in-out infinite" : "none",
                    transformOrigin: "center",
                    display: "block",
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  opacity: 0.55,
                  lineHeight: 1.2,
                  textAlign: "center",
                }}
              >
                {it.label}
              </div>
            </Link>
          ))}
        </div>

        {/* FOOTER LINE */}
        <div
          style={{
            marginTop: 22,
            fontSize: 11,
            letterSpacing: "0.26em",
            opacity: 0.35,
          }}
        >
          SEALED · DEVICE-FIRST · SUBJECT TO CHANGE
        </div>
      </div>
    </main>
  );
}
