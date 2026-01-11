// app/simple/page.tsx

import Link from "next/link";

export default function SimplePage() {
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
          SIMPLE
        </h1>

        <p style={{ marginTop: 14, opacity: 0.7, lineHeight: 1.6, maxWidth: 760 }}>
          SIMPLE is the in-OS execution interface on MatrixOS. It is designed as a
          single surface: one flow at a time, minimal background activity, and a
          consistent audit posture.
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
            <h2
              style={{
                margin: 0,
                fontSize: 12,
                letterSpacing: "0.25em",
                opacity: 0.85,
              }}
            >
              V1 CAPABILITIES
            </h2>
            <p
              style={{
                marginTop: 10,
                opacity: 0.65,
                lineHeight: 1.55,
                fontSize: 13,
              }}
            >
              Execute conversions for supported internal exposures. View balances.
              Internal send and internal request. View ledger and trace events.
            </p>
          </section>

          <section
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 18,
              padding: 16,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: 12,
                letterSpacing: "0.25em",
                opacity: 0.85,
              }}
            >
              WHAT IT DOES NOT DO
            </h2>
            <p
              style={{
                marginTop: 10,
                opacity: 0.65,
                lineHeight: 1.55,
                fontSize: 13,
              }}
            >
              No external deposit addresses on device. No direct external chain
              deposits. No background notifications. No app ecosystem.
            </p>
          </section>

          <section
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 18,
              padding: 16,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: 12,
                letterSpacing: "0.25em",
                opacity: 0.85,
              }}
            >
              RECEIPTS & TRACE
            </h2>
            <p
              style={{
                marginTop: 10,
                opacity: 0.65,
                lineHeight: 1.55,
                fontSize: 13,
              }}
            >
              Consequential actions generate a receipt (REGISTRO) or a security
              trace event (RASTRO) for audit integrity.
            </p>
          </section>

          <section
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 18,
              padding: 16,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: 12,
                letterSpacing: "0.25em",
                opacity: 0.85,
              }}
            >
              WITHDRAW MODEL
            </h2>
            <p
              style={{
                marginTop: 10,
                opacity: 0.65,
                lineHeight: 1.55,
                fontSize: 13,
              }}
            >
              Withdrawals are initiated on device and executed through the Mirror
              app when required for identity and funding workflows.
              Responsibilities are intentionally separated.
            </p>
          </section>
        </div>

        <div
          style={{
            marginTop: 18,
            fontSize: 11,
            letterSpacing: "0.25em",
            opacity: 0.35,
          }}
        >
          SINGLE SURFACE · ONE FLOW AT A TIME · DEVICE-FIRST
        </div>
      </div>
    </main>
  );
}
