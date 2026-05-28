import Image from "next/image";

const logos = [
  { src: "/assets/client-siampiwat.png", alt: "Siam Piwat" },
  { src: "/assets/client-kbank.png", alt: "KBank" },
  { src: "/assets/client-sansiri.png", alt: "Sansiri" },
  { src: "/assets/client-scg.png", alt: "SCG" },
  { src: "/assets/client-ttb.png", alt: "ttb" },
  { src: "/assets/client-ptt.png", alt: "PTT Group" },
  { src: "/assets/client-phyathai.png", alt: "Phyathai" },
  { src: "/assets/client-aaa.png", alt: "AAA" },
];

export default function Clients() {
  return (
    <section style={{ padding: "72px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", paddingLeft: "clamp(20px,5vw,100px)", paddingRight: "clamp(20px,5vw,100px)" }}>
        <p
          className="text-center mx-auto"
          style={{
            fontFamily: "var(--font-noto-thai)",
            fontSize: "clamp(18px,2vw,24px)",
            color: "var(--ink)",
            maxWidth: 800,
            marginBottom: 48,
          }}
        >
          บริษัทและสถาบันชั้นนำที่เลือก PI R Square เป็นพาร์ทเนอร์ด้าน AI
        </p>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid var(--line)",
            borderRadius: 20,
            overflow: "hidden",
            background: "#fff",
          }}
        >
          {logos.map((logo, i) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center transition-colors hover:bg-[#fafcff]"
              style={{
                aspectRatio: "310/110",
                padding: 18,
                background: "#fff",
                borderRight: (i + 1) % 4 === 0 ? "none" : "1px solid var(--line)",
                borderBottom: i >= logos.length - 4 ? "none" : "1px solid var(--line)",
              }}
            >
              <Image src={logo.src} alt={logo.alt} width={160} height={56} className="max-h-14 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
