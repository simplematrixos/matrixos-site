// app/page.tsx
"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";

type HomeNavItem = {
  label: string;
  href: string;
  color: string;
};

const RING: HomeNavItem[] = [
  { label: "MatrixOS", href: "/matrixos", color: "#E6F7FF" },
  { label: "Matrix One", href: "/matrix-one", color: "#9FA6B2" },
  { label: "SIMPLE", href: "/simple", color: "#00FFFF" },
  { label: "Security", href: "/security", color: "#FF3B3B" },
  { label: "Documents", href: "/documents", color: "#B14CFF" },
  { label: "About", href: "/about", color: "#6B7280" },
];

export default function HomePage() {
  const N = RING.length;
  const [touchReveal, setTouchReveal] = useState(false);

  const onTouchStart = useCallback(() => {
    setTouchReveal(true);
  }, []);

  const onTouchEnd = useCallback(() => {
    setTouchReveal(false);
  }, []);

  const onTouchCancel = useCallback(() => {
    setTouchReveal(false);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000000",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(18px, 3vw, 40px)",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial",
      }}
    >
      <style>{`
        :root{
          /* Logo: +~10% */
          --logoDesktop: 308px;
          --logoMobile: 220px;

          /* Ring radius: -~12% */
          --ringDesktop: 167px;
          --ringMobile: 123px;

          --dotDesktop: 14px;
          --dotMobile: 12px;

          --logoW: clamp(var(--logoMobile), 22vw, var(--logoDesktop));
          --ringR: clamp(
            var(--ringMobile),
            calc(var(--logoW) * 0.595),
            var(--ringDesktop)
          );
          --dot: clamp(var(--dotMobile), 1.3vw, var(--dotDesktop));
          --labelSize: clamp(10px, 1.1vw, 11px);

          /* stage sizing: fixed and predictable so page stays centered */
          --stageH: clamp(420px, 62vh, 660px);
          --belowStageGap: 14px;
        }

        html, body {
          background: #000000 !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .srOnly{
          position:absolute !important;
          width:1px !important;
          height:1px !important;
          padding:0 !important;
          margin:-1px !important;
          overflow:hidden !important;
          clip:rect(0,0,0,0) !important;
          white-space:nowrap !important;
          border:0 !important;
        }

        @keyframes sunBreathe {
          0%   { opacity: 0.78; filter: drop-shadow(0 0 10px rgba(0,255,255,0.12)) drop-shadow(0 0 22px rgba(0,255,255,0.06)); }
          50%  { opacity: 0.95; filter: drop-shadow(0 0 16px rgba(0,255,255,0.22)) drop-shadow(0 0 40px rgba(0,255,255,0.10)); }
          100% { opacity: 0.78; filter: drop-shadow(0 0 10px rgba(0,255,255,0.12)) drop-shadow(0 0 22px rgba(0,255,255,0.06)); }
        }

        @keyframes planetIntent {
          0%   { transform: scale(1); opacity: 0.50; }
          45%  { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 0.92; }
        }

        /* Mobile assist: labels visible briefly, then off unless pressing. */
        @keyframes assistFade {
          0%   { opacity: 0;   filter: blur(5px); transform: translate(-50%, calc(-50% + 22px)); }
          18%  { opacity: 0.92; filter: blur(0px); transform: translate(-50%, calc(-50% + 18px)); }
          78%  { opacity: 0.92; filter: blur(0px); transform: translate(-50%, calc(-50% + 18px)); }
          100% { opacity: 0;   filter: blur(5px); transform: translate(-50%, calc(-50% + 22px)); }
        }

        @media (prefers-reduced-motion: reduce) {
          .sun { animation: none !important; filter: none !important; opacity: 0.92 !important; }
          .planet:hover .dot,
          .planet:focus-visible .dot { animation: none !important; transform: none !important; }
          .planet:hover .label,
          .planet:focus-visible .label { transition: none !important; filter: none !important; }
          .ring.assist .label { animation: none !important; opacity: 0 !important; }
        }

        .wrap{
          width: min(980px, 100%);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* HARD-KILL any rectangles/outlines/shadows inside the stage */
        .stage,
        .stage *{
          border: 0 !important;
          outline: 0 !important;
          box-shadow: none !important;
        }
        .stage::before,
        .stage::after,
        .ring::before,
        .ring::after{
          border: 0 !important;
          outline: 0 !important;
          box-shadow: none !important;
        }

        .stage{
          position: relative;
          width: min(920px, 100%);
          height: var(--stageH);
          display: grid;
          place-items: center;
          background: transparent !important;
          overflow: visible !important;

          /* helps prevent accidental selection during press-hold */
          user-select: none;
          -webkit-user-select: none;
        }

        .sun{
          width: var(--logoW);
          height: auto;
          user-select: none;
          pointer-events: none;
          animation: sunBreathe 3200ms ease-in-out infinite;
          background: transparent !important;
          display: block;
        }

        .ring{
          position: absolute;
          inset: 0;
          z-index: 2;
          background: transparent !important;
          overflow: visible !important;
        }

        .planet{
          position: absolute;
          top: 50%;
          left: 50%;
          width: 84px;
          height: 84px;
          display: grid;
          place-items: center;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          border-radius: 999px;

          outline: none !important;
          box-shadow: none !important;
          border: none !important;
          background: transparent !important;
          -webkit-tap-highlight-color: transparent;
        }
        .planet:focus{ outline: none !important; }
        .planet:focus-visible{ outline: none !important; }

        .planet::before{
          content:"";
          position:absolute;
          inset:-18px;
          border-radius:999px;
          background: transparent !important;
        }

        .dot{
          width: var(--dot);
          height: var(--dot);
          border-radius: 999px;
          opacity: 0.50;
          transition:
            opacity 220ms ease-out,
            transform 220ms ease-out,
            box-shadow 220ms ease-out;
        }

        .label{
          position:absolute;
          top:50%;
          left:50%;
          transform: translate(-50%, calc(-50% + 22px));
          font-size: var(--labelSize);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9AA0A6;
          white-space: nowrap;
          opacity: 0;
          filter: blur(5px);
          transition:
            opacity 220ms ease-out,
            filter 220ms ease-out,
            transform 220ms ease-out;
          pointer-events:none;
        }

        /* Desktop hover/keyboard */
        .planet:hover .label,
        .planet:focus-visible .label{
          opacity: 0.92;
          filter: blur(0px);
          transform: translate(-50%, calc(-50% + 18px));
        }
        .planet:hover .dot,
        .planet:focus-visible .dot{
          opacity: 0.92;
          animation: planetIntent 520ms ease-out 1;
        }
        .planet:focus-visible .dot{
          box-shadow: 0 0 0 6px rgba(255,255,255,0.08);
        }

        /* Mobile press-only labels (no hover) */
        .planet:active .label{
          opacity: 0.92;
          filter: blur(0px);
          transform: translate(-50%, calc(-50% + 18px));
        }
        .planet:active .dot{
          opacity: 0.92;
          animation: planetIntent 520ms ease-out 1;
        }

        /* One-time mobile assist */
        .ring.assist .label{
          animation: assistFade 1500ms ease-out 1;
        }

        /* NEW: touch-to-reveal (mobile) — show ALL labels while touching */
        .ring.touchReveal .label{
          opacity: 0.92;
          filter: blur(0px);
          transform: translate(-50%, calc(-50% + 18px));
        }
        .ring.touchReveal .dot{
          opacity: 0.92;
        }

        .belowStage{
          margin-top: var(--belowStageGap);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer{
          margin-top: 12px;
          font-size: 11px;
          letter-spacing: 0.26em;
          opacity: 0.28;
          text-align: center;
          line-height: 1.35;
        }

        /* Mobile: split "SUBJECT TO CHANGE" under first line and center both */
        .footer .line2{
          display: inline;
        }
        @media (max-width: 640px) {
          :root{
            --stageH: clamp(420px, 70vh, 620px);
          }
          .footer .line2{
            display: block;
            margin-top: 6px;
          }
        }

        /* X link below footer, centered */
        .xLink{
          margin-top: 10px;
          text-decoration: none;
          color: inherit;
          opacity: 0.55;
          font-size: 12px;
          letter-spacing: 0.12em;
          line-height: 1;
          -webkit-tap-highlight-color: transparent;
        }
        .xLink:active{
          opacity: 0.85;
        }
        @media (hover: hover) {
          .xLink:hover{ opacity: 0.85; }
        }
      `}</style>

      <div className="wrap">
        <h1 className="srOnly">MatrixOS</h1>

        <div
          className="stage"
          aria-label="MatrixOS selector surface"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchCancel}
        >
          <img
            className="sun"
            src="/matrixos-logo.png"
            alt="MatrixOS"
            draggable={false}
          />

          <div
            className={`ring${touchReveal ? " touchReveal" : ""}`}
            aria-label="Primary navigation ring"
            ref={(el) => {
              if (!el) return;
              try {
                // mobile-only assist once per day
                const isMobile =
                  typeof window !== "undefined" &&
                  window.matchMedia &&
                  window.matchMedia("(max-width: 640px)").matches;

                if (!isMobile) return;

                const key = "mxos_home_label_assist_v1";
                const now = Date.now();
                const last = Number(window.localStorage.getItem(key) || "0");
                const oneDay = 24 * 60 * 60 * 1000;

                if (now - last < oneDay) return;

                window.localStorage.setItem(key, String(now));
                el.classList.add("assist");

                window.setTimeout(() => {
                  el.classList.remove("assist");
                }, 1550);
              } catch {
                // no-op (privacy mode / blocked storage)
              }
            }}
          >
            {RING.map((it, i) => {
              const angle = -90 + i * (360 / N);
              const transform = `translate(-50%, -50%) rotate(${angle}deg) translate(var(--ringR)) rotate(${-angle}deg)`;

              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className="planet"
                  style={{ transform }}
                  aria-label={it.label}
                >
                  <span className="dot" style={{ background: it.color }} />
                  <span className="label">{it.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="belowStage">
          <div className="footer">
            SEALED · DEVICE-FIRST · <span className="line2">SUBJECT TO CHANGE</span>
          </div>

          <a
            className="xLink"
            href="https://x.com/MatrixOSio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MatrixOS on X"
          >
            X
          </a>
        </div>
      </div>
    </main>
  );
}
