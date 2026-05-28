"use client";
const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const features1 = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/>
        <rect x="3" y="15" width="6" height="6" rx="1"/><path d="M15 15h6v6h-6z"/>
      </svg>
    ),
    title: "Multi-Format",
    desc: "รองรับไฟล์หลากหลาย เช่น PDF รูปถ่าย และแบบฟอร์มกระดาษ",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
      </svg>
    ),
    title: "Fast Extraction",
    desc: "จัดโครงสร้างอัตโนมัติ พร้อมแก้ไขใน 5 วินาที",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/>
        <path d="M9 6h6a3 3 0 0 1 3 3v6"/>
      </svg>
    ),
    title: "System Integration",
    desc: "เชื่อมต่อกับระบบที่มีอยู่ได้โดยตรง ไม่ต้องย้ายข้อมูล",
  },
];

const features2 = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/>
        <circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
        <path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3"/>
      </svg>
    ),
    title: "AI Assistant",
    desc: "ใช้งาน Claude, GPT, Gemini ในที่เดียว",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <path d="M3 3v18h18"/><path d="M7 14l3-4 4 3 5-7"/>
      </svg>
    ),
    title: "Auto Reports",
    desc: "ระบบรายงานอัตโนมัติ โดยไม่ต้องสั่ง",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
        <circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2.5"/>
        <path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M14 20c0-2 2-3 3-3s4 1 4 3"/>
      </svg>
    ),
    title: "Team Collaboration",
    desc: "ทีมทำงานร่วมกันได้แบบ Real-time",
  },
];

function FeatureList({ features }: { features: typeof features1 }) {
  return (
    <div className="flex flex-col gap-5 mb-8">
      {features.map((f) => (
        <div key={f.title} className="grid gap-4" style={{ gridTemplateColumns: "44px 1fr", alignItems: "start" }}>
          <span
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: 44, height: 44, borderRadius: 12,
              background: "linear-gradient(180deg,#F7FAFE,#EEF4FB)",
              border: "1px solid #E6EEF7",
              color: "var(--ink-soft)",
            }}
          >
            {f.icon}
          </span>
          <span className="flex flex-col gap-1">
            <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500, fontSize: 20, color: "var(--ink)", lineHeight: 1.15 }}>{f.title}</span>
            <span style={{ fontFamily: "var(--font-noto-thai)", fontSize: 18, color: "var(--muted)", lineHeight: 1.35 }}>{f.desc}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

function ConDocMock() {
  return (
    <div
      style={{
        width: "78%", aspectRatio: "16/10", background: "#fff", borderRadius: 16,
        boxShadow: "0 30px 70px -20px rgba(15,30,60,.25), 0 4px 14px rgba(15,30,60,.06)",
        display: "grid", gridTemplateColumns: "180px 1fr", overflow: "hidden",
      }}
    >
      <div style={{ background: "#F6F8FB", padding: 16, borderRight: "1px solid #ECEFF4", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ height: 14, borderRadius: 4, background: "linear-gradient(90deg,#2A3950,#3F526E)", width: "70%" }} />
        {[85,70,50,85,70,50].map((w,i) => (
          <div key={i} style={{ height: 10, borderRadius: 4, background: "linear-gradient(90deg,#E0E7F0,#EEF2F8)", width: `${w}%` }} />
        ))}
      </div>
      <div style={{ padding: "18px 18px 0", display: "flex", flexDirection: "column", gap: 10 }}>
        <span style={{
          display: "inline-block", padding: "4px 10px",
          background: "rgba(199,61,67,.08)", color: "#C73D43",
          borderRadius: 999, fontSize: 11, fontWeight: 600,
          fontFamily: "var(--font-dm-sans)", width: "fit-content"
        }}>ConDoc · OCR engine</span>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, flex: 1 }}>
          {[0,1].map(di => (
            <div key={di} style={{
              background: "#FAFBFD", border: "1px solid #ECEFF4", borderRadius: 8,
              padding: 10, display: "flex", flexDirection: "column", gap: 6, position: "relative"
            }}>
              <span style={{
                position: "absolute", top: 10, right: 10,
                width: 14, height: 14, borderRadius: "50%",
                background: "#06C755", boxShadow: "0 0 0 4px rgba(6,199,85,.15)"
              }} />
              {[70,50,85,70].map((w,i) => (
                <div key={i} style={{ height: 10, borderRadius: 4, background: "linear-gradient(90deg,#E0E7F0,#EEF2F8)", width: `${w}%` }} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SmartloopMock() {
  return (
    <div style={{ width: "90%", height: "78%", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 14 }}>
      <div style={{
        background: "#fff", borderRadius: 18,
        boxShadow: "0 20px 50px -15px rgba(15,30,60,.18),0 4px 14px rgba(15,30,60,.06)",
        padding: 16, display: "flex", flexDirection: "column", gap: 10
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 10, borderBottom: "1px solid #EEF1F6" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#C73D43,#61ABD9)" }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ height: 8, borderRadius: 4, background: "linear-gradient(90deg,#2A3950,#3F526E)", width: "70%" }} />
            <div style={{ height: 6, borderRadius: 4, background: "linear-gradient(90deg,#E0E7F0,#EEF2F8)", width: "50%" }} />
          </div>
        </div>
        {[
          { text: "How do I summarize this report?", out: false },
          { text: "Sure — let me extract key insights.", out: true },
          { text: "Use Claude for analysis.", out: false },
        ].map((m, i) => (
          <div key={i} style={{
            padding: "10px 12px", borderRadius: 12,
            fontFamily: "var(--font-dm-sans)", fontSize: 11, lineHeight: 1.4,
            maxWidth: "80%",
            background: m.out ? "var(--ink-soft)" : "#F2F4F8",
            color: m.out ? "#fff" : "inherit",
            alignSelf: m.out ? "flex-end" : "flex-start",
          }}>{m.text}</div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ background: "#fff", borderRadius: 14, boxShadow: "0 14px 40px -15px rgba(15,30,60,.18),0 2px 8px rgba(15,30,60,.04)", padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ height: 8, borderRadius: 4, background: "linear-gradient(90deg,#2A3950,#3F526E)", width: "50%" }} />
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
            {[
              { label: "Claude", color: "#06C755" },
              { label: "GPT-4o", color: "#4F7BD9" },
              { label: "Gemini", color: "#C73D43" },
              { label: "Llama", color: "#8B5CF6" },
            ].map((m) => (
              <span key={m.label} style={{
                padding: "6px 10px", borderRadius: 999, border: "1px solid #E6EEF7",
                fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 500,
                background: "#fff", display: "inline-flex", alignItems: "center", gap: 6,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: m.color, flexShrink: 0 }} />
                {m.label}
              </span>
            ))}
          </div>
        </div>
        <div style={{ background: "#fff", borderRadius: 14, boxShadow: "0 14px 40px -15px rgba(15,30,60,.18),0 2px 8px rgba(15,30,60,.04)", padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ height: 8, borderRadius: 4, background: "linear-gradient(90deg,#2A3950,#3F526E)", width: "70%" }} />
          {[85,70,50].map((w,i) => <div key={i} style={{ height: 10, borderRadius: 4, background: "linear-gradient(90deg,#E0E7F0,#EEF2F8)", width: `${w}%` }} />)}
          <span style={{
            display: "inline-block", padding: "4px 10px",
            background: "rgba(199,61,67,.08)", border: "1px solid rgba(199,61,67,.2)",
            color: "#C73D43", borderRadius: 999, fontSize: 11, fontWeight: 600,
            fontFamily: "var(--font-dm-sans)", width: "fit-content", marginTop: 4,
          }}>Auto report</span>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" style={{ padding: "80px 0 60px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", paddingLeft: "clamp(20px,5vw,100px)", paddingRight: "clamp(20px,5vw,100px)" }}>
        <div className="text-right mb-14">
          <h2 style={{
            fontFamily: "var(--font-syne)", fontWeight: 700,
            fontSize: "clamp(36px,5vw,64px)", lineHeight: 1, letterSpacing: "-0.025em",
            margin: 0, color: "var(--ink)",
          }}>We saw the gaps. We built the fix.</h2>
          <p style={{ fontFamily: "var(--font-noto-thai)", fontSize: "clamp(16px,1.7vw,24px)", color: "var(--muted)", marginTop: 14 }}>
            แต่ละผลิตภัณฑ์ของเรา ถูกสร้างขึ้นมาเพื่อตอบโจทย์แต่ละปัญหาโดยตรง
          </p>
        </div>

        {/* ConDoc.ai */}
        <article className="grid gap-8 lg:gap-[60px] items-center mb-[60px]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
          <div style={{ minWidth: 0 }}>
            <h3 style={{
              fontFamily: "var(--font-noto-thai)", fontWeight: 500,
              fontSize: "clamp(28px,3.4vw,40px)", lineHeight: 1.1, letterSpacing: "-0.012em",
              color: "var(--ink)", margin: "0 0 16px",
            }}>เอกสารของคุณ ยังกรอกทีละใบอยู่ไหม?</h3>
            <p style={{ fontFamily: "var(--font-noto-thai)", fontSize: "clamp(18px,1.7vw,22px)", color: "var(--muted)", margin: "0 0 28px" }}>
              ConDoc.ai แปลงเอกสารทุกชนิดอัตโนมัติ แม่นยำ รวดเร็ว
            </p>
            <FeatureList features={features1} />
            <a
              href="#"
              className="btn-anim"
              style={{
                fontFamily: "var(--font-noto-thai)", fontSize: 18,
                background: "#C73D43", borderRadius: 20, padding: "14px 24px",
                display: "inline-flex", alignItems: "center", gap: 10, color: "#fff",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#9D1E2F")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#C73D43")}
            >
              ทดลองใช้ ConDoc <ArrowIcon />
            </a>
          </div>
          <div
            className="rounded-[32px] overflow-hidden"
            style={{ aspectRatio: "760/428", background: "#000" }}
          >
            <video
              src="/assets/condoc-intro.mp4"
              autoPlay muted loop playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </article>

        {/* SMARTLOOP */}
        <article className="grid gap-8 lg:gap-[60px] items-center mb-[60px]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
          <div
            className="rounded-[32px] overflow-hidden order-last lg:order-first"
            style={{ aspectRatio: "760/428", background: "#000" }}
          >
            <video
              src="/assets/smartloop-demo.mp4"
              autoPlay muted loop playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div style={{ minWidth: 0 }}>
            <h3 style={{
              fontFamily: "var(--font-noto-thai)", fontWeight: 500,
              fontSize: "clamp(28px,3.4vw,40px)", lineHeight: 1.1, letterSpacing: "-0.012em",
              color: "var(--ink)", margin: "0 0 16px",
            }}>อยากใช้ AI หลายตัว แต่ไม่อยากจ่ายแพง?</h3>
            <p style={{ fontFamily: "var(--font-noto-thai)", fontSize: "clamp(18px,1.7vw,22px)", color: "var(--muted)", margin: "0 0 28px" }}>
              SMARTLOOP รวม AI ทุกตัวไว้ในที่เดียว
            </p>
            <FeatureList features={features2} />
            <a
              href="#"
              className="btn-anim"
              style={{
                fontFamily: "var(--font-noto-thai)", fontSize: 18,
                background: "#C73D43", borderRadius: 20, padding: "14px 24px",
                display: "inline-flex", alignItems: "center", gap: 10, color: "#fff",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#9D1E2F")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#C73D43")}
            >
              ทดลองใช้ SMARTLOOP <ArrowIcon />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
