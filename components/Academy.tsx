"use client";
import Image from "next/image";

const courses = [
  {
    tag: "Executive",
    title: "AI Strategy for C-Suite",
    desc: "วางทิศทาง AI ระดับองค์กร ตั้งแต่ Roadmap ถึง KPI",
    meta: "2 days · In-house",
  },
  {
    tag: "Workshop",
    title: "Prompt Engineering สำหรับทีมการตลาด",
    desc: "เขียน Prompt ที่ใช้งานได้จริง พร้อม template ที่ปรับใช้ได้ทันที",
    meta: "1 day · Hybrid",
  },
  {
    tag: "Bootcamp",
    title: "Build with LLMs: Hands-on",
    desc: "สร้าง workflow ด้วย LLM API + RAG ในโปรเจกต์จริง",
    meta: "4 days · On-site",
  },
  {
    tag: "Track",
    title: "AI Literacy for Operations",
    desc: "เริ่มต้น AI ในงานหลังบ้าน ลดเวลา เพิ่มความแม่นยำ",
    meta: "3 sessions · Online",
  },
];

export default function Academy() {
  return (
    <section
      id="academy"
      style={{ background: "linear-gradient(180deg,#FFFFFF 0%,#A9E9FF 50%,#FFFFFF 100%)", padding: "100px 0" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", paddingLeft: "clamp(20px,5vw,100px)", paddingRight: "clamp(20px,5vw,100px)" }}>
        <div className="flex flex-col gap-5 mb-10" style={{ maxWidth: 1240 }}>
          <Image
            src="/assets/fig-academy-logo.png"
            alt="Pi R Academy"
            width={280}
            height={56}
            className="object-contain"
            style={{ height: 56, width: "auto", alignSelf: "flex-start", maxWidth: 280 }}
          />
          <h2 style={{
            fontFamily: "var(--font-noto-thai)", fontWeight: 700,
            fontSize: "clamp(32px,4.4vw,48px)", color: "#000", lineHeight: 1.1, margin: 0,
          }}>AI ที่ได้ผล เริ่มต้นที่คน</h2>
          <p style={{
            fontFamily: "var(--font-noto-thai)", fontSize: "clamp(16px,1.7vw,24px)",
            color: "#000", margin: 0, maxWidth: 900,
          }}>
            หลักสูตรที่คัดมาเพื่อคุณ ออกแบบตามอุตสาหกรรม และเป้าหมายจริง ไม่ใช่แค่ Template สำเร็จรูป
          </p>
        </div>

        <div
          style={{
            background: "#fff", borderRadius: 32,
            boxShadow: "0 0 40px rgba(0,0,0,.06)",
            padding: 40, marginBottom: 40,
            display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 20,
          }}
        >
          {courses.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1"
              style={{
                borderRadius: 20, padding: 24,
                background: "linear-gradient(170deg,#F8FBFF,#FFFFFF)",
                border: "1px solid #EEF3FA",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 20px 40px -20px rgba(15,30,60,.18)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <span style={{
                fontFamily: "var(--font-poppins)", fontSize: 12, fontWeight: 600,
                letterSpacing: ".05em", textTransform: "uppercase", color: "#C73D43"
              }}>{c.tag}</span>
              <h3 style={{
                fontFamily: "var(--font-noto-thai)", fontWeight: 600, fontSize: 20,
                lineHeight: 1.25, color: "var(--ink)", margin: 0,
              }}>{c.title}</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontFamily: "var(--font-noto-thai)", fontSize: 15, lineHeight: 1.5, flex: 1 }}>{c.desc}</p>
              <div style={{
                fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "var(--muted)",
                marginTop: "auto", paddingTop: 12, borderTop: "1px dashed #E6EEF7",
              }}>{c.meta}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <a
            href="#"
            className="btn-anim"
            style={{
              fontFamily: "var(--font-noto-thai)", fontSize: 18,
              background: "#61ABD9", borderRadius: 20, padding: "14px 24px",
              display: "inline-flex", alignItems: "center", gap: 10, color: "#fff",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#3F6E9E")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#61ABD9")}
          >
            ไปยัง Pi R Academy
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
