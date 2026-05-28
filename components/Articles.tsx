"use client";
const articles = [
  { gradient: "linear-gradient(135deg,#235A8C,#61ABD9)", title: "เริ่ม AI ที่องค์กรของคุณ อย่างไรไม่ให้ล้มเหลว" },
  { gradient: "linear-gradient(135deg,#C73D43,#F7B6BA)", title: "5 use cases AI ที่คืนทุนเร็วที่สุดในปี 2026" },
  { gradient: "linear-gradient(135deg,#0F1E32,#3F6E9E)", title: "RAG vs Fine-tuning เลือกแบบไหนให้เหมาะกับงาน" },
  { gradient: "linear-gradient(135deg,#A9E9FF,#235A8C)", title: "Document AI กับการเปลี่ยนเอกสารเป็นข้อมูลจริง" },
];

export default function Articles() {
  return (
    <section id="articles" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", paddingLeft: "clamp(20px,5vw,100px)", paddingRight: "clamp(20px,5vw,100px)" }}>
        <div className="flex flex-col gap-3 mb-10">
          <h2 style={{
            fontFamily: "var(--font-syne)", fontWeight: 700,
            fontSize: "clamp(40px,5.5vw,64px)", letterSpacing: "-0.025em",
            color: "var(--ink)", margin: 0,
          }}>Articles</h2>
          <p style={{ fontFamily: "var(--font-noto-thai)", fontSize: "clamp(16px,1.7vw,24px)", color: "var(--muted)", margin: 0 }}>
            กลยุทธ์ การใช้งานจริง และทิศทางของโลก AI
          </p>
        </div>

        <div className="grid gap-6 mb-10" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))" }}>
          {articles.map((a) => (
            <a
              key={a.title}
              href="#"
              className="flex flex-col gap-3 cursor-pointer group"
            >
              <div
                className="rounded-[20px] overflow-hidden relative transition-transform duration-200 group-hover:-translate-y-1"
                style={{ aspectRatio: "292/250", background: a.gradient }}
              >
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 50%,rgba(0,0,0,.15))" }} />
              </div>
              <h3 style={{
                fontFamily: "var(--font-noto-thai)", fontWeight: 500,
                fontSize: 18, color: "var(--ink)", textAlign: "center",
                lineHeight: 1.4, margin: 0,
              }}>{a.title}</h3>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#"
            className="btn-anim ghost-dark"
            style={{
              fontFamily: "var(--font-noto-thai)", fontSize: 18,
              border: "2px solid var(--line-soft)", borderRadius: 20, padding: "14px 24px",
              display: "inline-flex", alignItems: "center", gap: 10, color: "var(--ink)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--ink)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--line-soft)")}
          >
            ดูบทความทั้งหมด
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
