// app/documents/page.tsx

import Link from "next/link";

export default function DocumentsPage() {
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
          DOCUMENTS
        </h1>

        <p
          style={{
            marginTop: 14,
            opacity: 0.7,
            lineHeight: 1.6,
            maxWidth: 820,
          }}
        >
          This page provides public-facing disclosures and model descriptions
          for MatrixOS, Matrix One, and SIMPLE. Documents are versioned and
          subject to change. Nothing here is legal, tax, or investment advice.
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
              INTERNAL LEDGER MODEL
            </h2>
            <p
              style={{
                marginTop: 10,
                opacity: 0.65,
                lineHeight: 1.55,
                fontSize: 13,
              }}
            >
              SIMPLE balances represent economic exposure tracked on an internal
              ledger. The device does not present external wallet addresses or
              on-chain custody surfaces.
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
              WHAT USERS RECEIVE
            </h2>
            <p
              style={{
                marginTop: 10,
                opacity: 0.65,
                lineHeight: 1.55,
                fontSize: 13,
              }}
            >
              A constrained on-device execution interface, internal records, and
              controlled settlement behavior for supported functionality.
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
              WHAT USERS DO NOT RECEIVE
            </h2>
            <p
              style={{
                marginTop: 10,
                opacity: 0.65,
                lineHeight: 1.55,
                fontSize: 13,
              }}
            >
              No on-device external deposit addresses. No direct external chain
              receive. No claims of “unhackable” or “military-grade.” No
              guarantees of availability or redemption time.
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
          VERSIONED DISCLOSURES · SUBJECT TO CHANGE
        </div>
      </div>
    </main>
  );
}
