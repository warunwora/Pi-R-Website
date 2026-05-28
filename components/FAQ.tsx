"use client";
import { useState } from "react";

const faqs = [
  {
    q: "PI R Square ทำอะไร?",
    a: "เราออกแบบกลยุทธ์ AI และสร้างระบบ AI พร้อมใช้งานจริง ตั้งแต่วาง Roadmap ส่งมอบ Solution จนถึงอบรมทีมงานองค์กร",
  },
  {
    q: "ต่างจากบริษัท AI อื่นอย่างไร?",
    a: "เราไม่ขาย Tool สำเร็จรูป แต่ดีไซน์ระบบให้เข้ากับ Workflow จริง ของแต่ละองค์กร พร้อมดูแลตั้งแต่กลยุทธ์ ระบบ และคน",
  },
  {
    q: "ไม่แน่ใจว่าองค์กรเหมาะกับบริการไหน ควรเริ่มต้นอย่างไร?",
    a: "เริ่มต้นด้วย Free Consultation 30 นาที ทีมเราจะช่วยสำรวจโจทย์และเสนอเส้นทางที่เหมาะกับองค์กรของคุณ",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{ background: "linear-gradient(180deg,#FFFFFF,#F4F9FF)", padding: "80px 0" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", paddingLeft: "clamp(20px,5vw,100px)", paddingRight: "clamp(20px,5vw,100px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
          className="faq-grid"
        >
          <div>
            <h2 style={{
              fontFamily: "var(--font-syne)", fontWeight: 700,
              fontSize: "clamp(36px,4.5vw,50px)", lineHeight: 1.05,
              letterSpacing: "-0.025em", color: "var(--ink)", margin: "0 0 18px",
            }}>
              Questions?<br />We&apos;ve got answers.
            </h2>
            <p style={{ fontFamily: "var(--font-noto-thai)", fontSize: "clamp(18px,1.7vw,24px)", color: "var(--muted)", margin: 0 }}>
              พร้อมมองหา solution ให้ธุรกิจคุณ
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "#fff", borderRadius: 20,
                  border: open === i ? "1px solid #E6EEF7" : "1px solid #F0F4FA",
                  boxShadow: open === i ? "0 6px 18px -10px rgba(15,30,60,.15)" : "none",
                  transition: "border-color .2s ease, box-shadow .2s ease",
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                <button
                  className="w-full text-left"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    gap: 16, width: "100%",
                    padding: "18px 20px",
                    fontFamily: "var(--font-noto-thai)", fontWeight: 500,
                    fontSize: "clamp(16px,1.5vw,20px)", color: "var(--ink)",
                  }}
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span style={{
                    transition: "transform .25s ease",
                    transform: open === i ? "rotate(180deg)" : "rotate(0)",
                    flexShrink: 0,
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                {/* grid-template-rows trick: no layout shift, smooth height */}
                <div style={{
                  display: "grid",
                  gridTemplateRows: open === i ? "1fr" : "0fr",
                  transition: "grid-template-rows .28s ease",
                }}>
                  <div style={{ overflow: "hidden" }}>
                    <div style={{
                      padding: "0 20px 18px",
                      fontFamily: "var(--font-noto-thai)", fontSize: 16,
                      color: "var(--muted)", lineHeight: 1.6,
                    }}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
