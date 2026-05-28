"use client";
import { useState, useEffect } from "react";
import PiRLogo from "./PiRLogo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "#030213" : "#fff";
  const textOpacity = scrolled ? 0.8 : 0.9;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 40,
          padding: "18px clamp(20px,5vw,100px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          transition: "background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease",
          background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06), 0 4px 20px -4px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <a href="#" style={{ display: "flex", alignItems: "center" }}>
          <PiRLogo
            style={{
              height: 28, width: "auto",
              filter: scrolled ? "invert(1) brightness(0)" : "none",
              transition: "filter 0.4s ease",
            }}
          />
        </a>

        <div className="hidden lg:flex items-center gap-10" style={{ fontFamily: "var(--font-poppins)", fontSize: 18 }}>
          {["Products", "Articles", "FAQ"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ color: textColor, opacity: textOpacity, transition: "opacity .15s, color .4s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = String(textOpacity))}
            >
              {l}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <span style={{ fontFamily: "var(--font-noto-thai)", fontSize: 18, color: textColor, opacity: textOpacity, transition: "color .4s, opacity .4s" }}>
            ดูผลิตภัณฑ์ของเรา
          </span>
          <a
            href="#contact"
            className="btn-anim"
            style={{
              fontFamily: "var(--font-noto-thai)", fontSize: 18,
              background: "#C73D43", borderRadius: 12, padding: "12px 16px", color: "#fff",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#9D1E2F")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C73D43")}
          >
            พูดคุยกับเรา
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="lg:hidden flex items-center justify-center btn-anim"
          style={{
            width: 44, height: 44,
            border: scrolled ? "1.5px solid rgba(3,2,19,.25)" : "1.5px solid rgba(255,255,255,.5)",
            borderRadius: 12, color: textColor,
            transition: "border-color .4s, color .4s",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col gap-6"
          style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", padding: "18px clamp(20px,5vw,100px)" }}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between">
            <a href="#" onClick={() => setOpen(false)}>
              <PiRLogo style={{ height: 28, width: "auto", filter: "invert(1) brightness(0)" }} />
            </a>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="btn-anim flex items-center justify-center"
              style={{ width: 44, height: 44, border: "1.5px solid rgba(3,2,19,.2)", borderRadius: 12, color: "#030213" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-4 pt-6" style={{ fontFamily: "var(--font-poppins)", fontSize: 24, color: "#030213" }}>
            {["Products", "Articles", "FAQ"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="py-2"
                style={{ borderBottom: "1px solid rgba(3,2,19,.08)" }}
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-anim"
              style={{ fontFamily: "var(--font-noto-thai)", fontSize: 18, background: "#C73D43", borderRadius: 20, padding: "14px 24px", color: "#fff", textAlign: "center" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#9D1E2F")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#C73D43")}
            >
              พูดคุยกับเรา
            </a>
            <a
              href="#products"
              onClick={() => setOpen(false)}
              className="btn-anim ghost-dark"
              style={{ fontFamily: "var(--font-noto-thai)", fontSize: 18, border: "2px solid rgba(3,2,19,.2)", borderRadius: 20, padding: "14px 24px", color: "#030213", textAlign: "center" }}
            >
              ดูผลิตภัณฑ์ของเรา
            </a>
          </div>
        </div>
      )}
    </>
  );
}
