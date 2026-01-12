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
      <style>{`
        .mxFooter{
          margin-top: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .mxFooterText{
          margin-top: 0px;
          font-size: 11px;
          letter-spacing: 0.26em;
          opacity: 0.28;
          line-height: 1.35;
          text-align: center;
        }
        .mxFooterText .line2{ display: inline; }
        @media (max-width: 640px){
          .mxFooterText .line2{
            display: block;
            margin-top: 6px;
          }
        }
        .mxXLink{
          margin-top: 12px;
          width: 26px;
          height: 26px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          opacity: 0.55;
          text-decoration: none;
          color: inherit;
        }
        .mxXLink:hover{ opacity: 0.78; }
        .mxXLink:focus-visible{
          outline: none;
          box-shadow: 0 0 0 6px rgba(255,255,255,0.08);
          border-radius: 999px;
        }
      `}</style>

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
              CAPABILITIES
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

        {/* Home-exact footer slot + centered X icon */}
        <div className="mxFooter">
          <div className="mxFooterText">
            SEALED · DEVICE-FIRST · <span className="line2">SUBJECT TO CHANGE</span>
          </div>

          <a
            className="mxXLink"
            href="https://x.com/MatrixOSio"
            target="_blank"
            rel="noreferrer"
            aria-label="MatrixOS on X"
            title="MatrixOS on X"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2H21.6l-7.33 8.382L22.8 22h-6.62l-5.186-6.64L5.19 22H1.83l7.85-8.97L1.2 2h6.78l4.684 6.01L18.244 2Zm-1.16 18h1.86L6.87 3.93H4.88L17.084 20Z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
