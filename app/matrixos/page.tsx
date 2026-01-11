// app/matrixos/page.tsx

import Link from "next/link";

export default function MatrixOSPage() {
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
          MATRIXOS
        </h1>

        <p style={{ marginTop: 14, opacity: 0.7, lineHeight: 1.6, maxWidth: 760 }}>
          MatrixOS is a sealed operating system designed for constrained
          execution on dedicated hardware. It is not a consumer mobile OS, not
          an app ecosystem, and not a general computing platform.
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
              WHAT IT IS
            </h2>
            <p style={{ marginTop: 10, opacity: 0.65, lineHeight: 1.55, fontSize: 13 }}>
              A purpose-built operating system that runs a single execution
              interface inside a controlled environment.
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
              WHY IT EXISTS
            </h2>
            <p style={{ marginTop: 10, opacity: 0.65, lineHeight: 1.55, fontSize: 13 }}>
              To provide a deterministic execution environment by reducing
              background activity, external dependencies, and interface
              complexity.
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
              PRINCIPLES
            </h2>
            <p style={{ marginTop: 10, opacity: 0.65, lineHeight: 1.55, fontSize: 13 }}>
              Single-purpose. No external custody interfaces. No third-party
              applications. Minimal network exposure. Auditable action trail.
            </p>
          </section>
        </div>

        <div style={{ marginTop: 18, fontSize: 11, letterSpacing: "0.25em", opacity: 0.35 }}>
          DEVELOPMENT BUILD · SPECIFICATIONS SUBJECT TO CHANGE
        </div>
      </div>
    </main>
  );
}
