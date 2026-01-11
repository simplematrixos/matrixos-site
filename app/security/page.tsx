// app/security/page.tsx

import Link from "next/link";

export default function SecurityPage() {
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
      <div style={{ width: "min(980px, 100%)" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.3em", opacity: 0.45 }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            HOME
          </Link>
        </div>

        <h1
          style={{
            marginTop: 14,
            fontSize: 18,
            letterSpacing: "0.7em",
            fontWeight: 300,
          }}
        >
          SECURITY
        </h1>

        <p style={{ marginTop: 14, opacity: 0.7, lineHeight: 1.6, maxWidth: 760 }}>
          MatrixOS approaches security through architectural reduction rather than feature density.
          The system is designed to minimize attack surface, background activity, and ambiguity.
        </p>

        <div
          style={{
            marginTop: 22,
            borderTop: "1px solid rgba(255,255,255,0.10)",
          }}
        />

        <div
          style={{
            marginTop: 18,
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          <section
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 18,
              padding: 16,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 12, letterSpacing: "0.25em", opacity: 0.85 }}>
              REDUCTION-FIRST
            </h2>
            <p style={{ marginTop: 10, opacity: 0.65, lineHeight: 1.55, fontSize: 13 }}>
              No third-party apps. No background services. No general-purpose multitasking. Security
              is achieved by removing entire classes of risk.
            </p>
          </section>

          <section
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 18,
              padding: 16,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 12, letterSpacing: "0.25em", opacity: 0.85 }}>
              DEVICE VS MIRROR
            </h2>
            <p style={{ marginTop: 10, opacity: 0.65, lineHeight: 1.55, fontSize: 13 }}>
              The device handles execution. The Mirror app handles identity and funding workflows.
              Responsibilities are intentionally separated.
            </p>
          </section>

          <section
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 18,
              padding: 16,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 12, letterSpacing: "0.25em", opacity: 0.85 }}>
              CONTROLLED CONNECTIVITY
            </h2>
            <p style={{ marginTop: 10, opacity: 0.65, lineHeight: 1.55, fontSize: 13 }}>
              Network connectivity is limited and intended to be inactive when the device is idle.
              Silent wake behavior avoids ambient signaling.
            </p>
          </section>

          <section
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 18,
              padding: 16,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 12, letterSpacing: "0.25em", opacity: 0.85 }}>
              AUDIT POSTURE
            </h2>
            <p style={{ marginTop: 10, opacity: 0.65, lineHeight: 1.55, fontSize: 13 }}>
              Consequential actions generate internal records (REGISTRO) or security events (RASTRO)
              to support traceability without exposing implementation detail.
            </p>
          </section>
        </div>

        <div style={{ marginTop: 18, fontSize: 11, letterSpacing: "0.25em", opacity: 0.35 }}>
          ARCHITECTURAL SECURITY · NO PERFORMANCE CLAIMS
        </div>
      </div>
    </main>
  );
}
