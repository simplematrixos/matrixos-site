// app/about/page.tsx

import Link from "next/link";

export default function AboutPage() {
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
          ABOUT
        </h1>

        <p style={{ marginTop: 14, opacity: 0.7, lineHeight: 1.6, maxWidth: 820 }}>
          MatrixOS Infrastructure, Inc. is building a hardware-first financial execution system.
          MatrixOS, Matrix One, and SIMPLE are in active development. This site does not make
          claims of institutional clients, regulatory approval, or guaranteed timelines.
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
              COMPANY
            </h2>
            <p style={{ marginTop: 10, opacity: 0.65, lineHeight: 1.55, fontSize: 13 }}>
              MatrixOS Infrastructure, Inc.
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
              STATUS
            </h2>
            <p style={{ marginTop: 10, opacity: 0.65, lineHeight: 1.55, fontSize: 13 }}>
              Early-stage. Active development. Specifications and behavior subject to change.
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
              DEVELOPMENT
            </h2>
            <p style={{ marginTop: 10, opacity: 0.65, lineHeight: 1.55, fontSize: 13 }}>
              Hardware and software are developed in parallel. The product posture is device-first
              with separation of concerns between device execution and Mirror app services.
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
              CONTACT
            </h2>
            <p style={{ marginTop: 10, opacity: 0.65, lineHeight: 1.55, fontSize: 13 }}>
              Add a contact email here (public-facing). Avoid investor solicitation language.
            </p>
          </section>
        </div>

        <div style={{ marginTop: 18, fontSize: 11, letterSpacing: "0.25em", opacity: 0.35 }}>
          NO CLAIMS · NO GUARANTEES · SUBJECT TO CHANGE
        </div>
      </div>
    </main>
  );
}
