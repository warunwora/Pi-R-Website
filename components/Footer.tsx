"use client";
import Image from "next/image";

const socials = [
  {
    label: "Facebook",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M14 9V7c0-.6.4-1 1-1h2V3h-3a4 4 0 0 0-4 4v2H7v3h3v9h4v-9h3l1-3h-4z"/></svg>,
  },
  {
    label: "Instagram",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={18} height={18}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>,
  },
  {
    label: "X",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M3 3l7.5 9.5L3.5 21H5l6.5-7.5L17 21h4l-7.7-10L20.5 3H19l-6 6.7L8 3H3z"/></svg>,
  },
  {
    label: "TikTok",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M16 3v3.5a4.5 4.5 0 0 0 4.5 4.5V14a7.5 7.5 0 0 1-4.5-1.5V16a5 5 0 1 1-5-5v3a2 2 0 1 0 2 2V3h3z"/></svg>,
  },
  {
    label: "WhatsApp",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" width={18} height={18}><path d="M21 12a9 9 0 1 1-3.4-7L21 4l-1.1 4a9 9 0 0 1 1.1 4z"/><path d="M9 9c0 4 2 6 6 6l1.5-1.5-2-1-1 1c-1 0-3-2-3-3l1-1-1-2L9 9z" fill="currentColor"/></svg>,
  },
  {
    label: "Line",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M12 3C6.5 3 2 6.6 2 11c0 2.6 1.5 5 4 6.5L5 21l4-2c1 .2 2 .3 3 .3 5.5 0 10-3.6 10-8.2C22 6.6 17.5 3 12 3z"/></svg>,
  },
];

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "#235A8C", color: "#fff", padding: "64px 0 32px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", paddingLeft: "clamp(20px,5vw,100px)", paddingRight: "clamp(20px,5vw,100px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* col 1 */}
          <div className="flex flex-col gap-4" style={{ alignItems: "flex-start" }}>
            <Image src="/assets/pir-logo.png" alt="Pi R Square" width={160} height={44} style={{ height: 44, width: "auto", objectFit: "contain", display: "block" }} />
            <div style={{ fontFamily: "var(--font-dm-sans)", fontSize: 20, fontWeight: 500, marginTop: 4 }}>Pi R SQUARE Co., Ltd.</div>
            <p style={{ fontFamily: "var(--font-noto-thai)", fontSize: 16, lineHeight: 1.6, opacity: 0.92, margin: 0 }}>
              81/1<br />สุขุมวิท 2, แขวงคลองตัน, เขตคลองเตย, กรุงเทพฯ 10110
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "nowrap", marginTop: 8 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="social-anim inline-flex items-center justify-center"
                  style={{
                    width: 40, height: 40, flexShrink: 0,
                    border: "1.5px solid rgba(255,255,255,0.6)",
                    borderRadius: "50%",
                    color: "#fff",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#235A8C";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.6)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* col 2 */}
          <div>
            <h4 style={{ fontFamily: "var(--font-noto-thai)", fontWeight: 500, fontSize: 20, margin: "0 0 24px" }}>ผลิตภัณฑ์ของเรา</h4>
            <ul className="flex flex-col gap-4" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { label: "ConDoc.ai", href: "#products" },
                { label: "SMARTLOOP", href: "#products" },
                { label: "Pi R Academy", href: "#academy" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{ fontFamily: "var(--font-noto-thai)", fontSize: 16, opacity: 0.85, transition: "opacity .15s, letter-spacing .15s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.letterSpacing = "0.02em"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.letterSpacing = "0"; }}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* col 3 */}
          <div>
            <h4 style={{ fontFamily: "var(--font-noto-thai)", fontWeight: 500, fontSize: 20, margin: "0 0 24px" }}>ติดต่อเรา</h4>
            <ul className="flex flex-col gap-4" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {[{ label: "ข้อมูลการติดต่อ", href: "#contact" }, { label: "คำถามที่พบบ่อย", href: "#faq" }].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{ fontFamily: "var(--font-noto-thai)", fontSize: 16, opacity: 0.85, transition: "opacity .15s, letter-spacing .15s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.letterSpacing = "0.02em"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.letterSpacing = "0"; }}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="text-center"
          style={{
            fontFamily: "var(--font-dm-sans)", fontSize: 16, opacity: 0.7,
            paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.12)",
          }}
        >
          © 2026 PI R Square Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
