"use client";

export default function Hero() {
  return (
    <header
      style={{
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        display: "flex",
        alignItems: "flex-start",
        height: "100vh",
        minHeight: 600,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/fig-hero-bg.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, zIndex: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "60% top",
        }}
      />


      <div
        style={{
          position: "relative", zIndex: 2, width: "100%",
          paddingTop: 160,
          paddingBottom: 100,
          paddingLeft: "clamp(28px,7vw,140px)",
          paddingRight: "clamp(28px,7vw,140px)",
          maxWidth: 1440, margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-poppins)", fontWeight: 700,
            fontSize: "clamp(44px,6.5vw,72px)", lineHeight: 1.0,
            letterSpacing: "-0.03em", margin: "0 0 20px",
            maxWidth: 660, color: "#fff",
            opacity: 0, animation: "heroFadeUp 0.9s ease 0.1s forwards",
          }}
        >
          Strategy. Systems.<br />
          AI that actually <span style={{ color: "#A9E9FF" }}>delivers.</span>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-noto-thai)", fontSize: "clamp(18px,2vw,22px)",
            lineHeight: 1.4, margin: "0 0 44px", maxWidth: 560,
            color: "rgba(255,255,255,0.9)",
            opacity: 0, animation: "heroFadeUp 0.9s ease 0.3s forwards",
          }}
        >
          เราคือพาร์ทเนอร์ที่ดูแลคุณ ตั้งแต่วางแผนกลยุทธ์สู่การใช้งานจริง
        </p>
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 16,
          opacity: 0, animation: "heroFadeUp 0.9s ease 0.5s forwards",
        }}>
          <a href="#contact"
            className="btn-anim"
            style={{
              fontFamily: "var(--font-noto-thai)", fontSize: 18,
              background: "#C73D43", borderRadius: 20, padding: "15px 28px",
              color: "#fff", display: "inline-flex", alignItems: "center", gap: 8,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#9D1E2F")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C73D43")}>
            พูดคุยกับเรา
          </a>
          <a href="#products"
            className="btn-anim"
            style={{
              fontFamily: "var(--font-noto-thai)", fontSize: 18,
              border: "2px solid rgba(255,255,255,.6)", borderRadius: 20, padding: "15px 28px",
              color: "#fff", display: "inline-flex", alignItems: "center", gap: 8,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,.10)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,.6)"; e.currentTarget.style.background = "transparent"; }}>
            ดูผลิตภัณฑ์ของเรา
          </a>
        </div>
      </div>
    </header>
  );
}
