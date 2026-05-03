import type { Metadata } from "next";
import Link from "next/link";
import { SchemaScript } from "../../../components/schema-script";
import { breadcrumbSchema } from "../../../lib/schema";
import { buildAlternatesTr, localeRoutes } from "../../../lib/i18n";

export const metadata: Metadata = {
  title: "Kurucu Mesajı | Advisera Global",
  description:
    "Advisera Global Kurucusu Deniz Erdoğan'dan bir mesaj — üretim şirketlerinin neden strateji değil, kontrol problemi yaşadığı üzerine.",
  alternates: buildAlternatesTr(localeRoutes.founderMessage),
};

export default function KurucuMesajiPage() {
  return (
    <div>
      <SchemaScript
        data={[
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/tr" },
            { name: "Hakkımızda", path: "/tr/hakkimizda" },
            { name: "Kurucu Mesajı", path: "/tr/hakkimizda/kurucu-mesaji" },
          ]),
        ]}
      />

      {/* Hero */}
      <section
        style={{
          paddingBlock: "clamp(120px,14vw,200px) clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
        className="max-w-site"
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "#a100ff",
            filter: "blur(130px)",
            opacity: 0.1,
            pointerEvents: "none",
          }}
        />
        <p className="label" style={{ marginBottom: 20 }}>Biz Kimiz</p>
        <h1 className="h1" style={{ color: "var(--fg)", maxWidth: 720, marginBottom: 32 }}>
          Kurucu Mesajı
        </h1>
        <p className="body-lg" style={{ color: "var(--muted)", maxWidth: 600 }}>
          Advisera Global Kurucusu Deniz Erdoğan&apos;dan.
        </p>
      </section>

      {/* Message body */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
          borderBottom: "1px solid var(--border)",
        }}
        className="max-w-site"
      >
        <div style={{ maxWidth: 720 }}>
          {/* Opening statement */}
          <p
            style={{
              fontSize: "clamp(22px,3.5vw,32px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--fg)",
              lineHeight: 1.35,
              marginBottom: 40,
            }}
          >
            Üretim şirketlerinin çoğunun problemi strateji değildir.
            <br />
            Problemleri kontrol eksikliğidir.
          </p>

          {/* Body paragraphs */}
          {[
            "Yıllar içinde farklı sektörlerde ve pazarlarda aynı durumu tekrar tekrar gördüm: Marjlar büyük stratejik hatalarda değil, günlük operasyonel sızıntılarda kaybedilir — fiyatlama tutarsızlıklarında, tedarik disiplini eksikliğinde ve nakit akışı yönetiminde.",
            "Danışmanlık projelerinin çoğu yanlış stratejiden değil, uygulanamayan stratejiden başarısız olur.",
            "Advisera Global'i bu boşluğu kapatmak için kurdum.",
            "Biz dışarıdan öneri veren bir danışmanlık firması değiliz. İşinizin içine gireriz: fiyatlama kararlarınıza, tedarik yapınıza, üretim akışınıza, ihracat sisteminize.",
            "Çünkü üretim sektöründe değer sunumlarda değil, kurulan sistemlerde oluşur.",
            "Çoğu maliyet düşürme projesi başarısız olur çünkü yapıya değil, pazarlığa odaklanır. Biz yapıya odaklanırız.",
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: 17,
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              {para}
            </p>
          ))}

          {/* What we install */}
          <div
            style={{
              margin: "48px 0",
              padding: "32px 36px",
              borderLeft: "3px solid var(--accent)",
              background: "rgba(161,0,255,0.05)",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 20,
              }}
            >
              Şunları kurarız:
            </p>
            {[
              "Maliyet kontrol sistemleri",
              "Fiyatlama disiplini",
              "Nakit akışı yönetimi",
              "İhracat altyapısı",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 16, color: "var(--fg)", fontWeight: 500 }}>
                  {item}
                </span>
              </div>
            ))}
            <p
              style={{
                fontSize: 15,
                color: "var(--muted)",
                marginTop: 20,
                fontStyle: "italic",
              }}
            >
              Öneri olarak değil, ekibinizin çalıştırdığı sistemler olarak.
            </p>
          </div>

          {/* Measurement */}
          <div
            style={{
              margin: "48px 0",
              padding: "32px 36px",
              border: "1px solid var(--border)",
              borderRadius: 12,
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: 20,
                opacity: 0.7,
              }}
            >
              Her projeyi tek bir şekilde ölçeriz:
            </p>
            {[
              "EBITDA artışı",
              "Nakit dönüş hızı",
              "İhracat gelir büyümesi",
            ].map((metric) => (
              <div
                key={metric}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <span style={{ color: "var(--accent)", fontSize: 18, lineHeight: 1 }}>▲</span>
                <span style={{ fontSize: 16, color: "var(--fg)", fontWeight: 600 }}>
                  {metric}
                </span>
              </div>
            ))}
            <p
              style={{
                fontSize: 15,
                color: "var(--muted)",
                marginTop: 20,
                fontStyle: "italic",
              }}
            >
              Bunları değiştirmiyorsa, yaptığımız işin değeri yoktur.
            </p>
          </div>

          {/* Closing */}
          {[
            "Yeni nesil üretim liderleri daha ucuz üretimle değil, daha iyi sistemlerle kazanacak.",
            "Biz fikir arayanlarla değil, kontrol, hız ve ölçeklenebilir büyüme isteyen şirketlerle çalışırız.",
            "Eğer gerçekten bunu istiyorsanız, başlangıç noktası burasıdır.",
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: 17,
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              {para}
            </p>
          ))}

          {/* Signature */}
          <div
            style={{
              marginTop: 56,
              paddingTop: 40,
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div
              aria-hidden="true"
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "linear-gradient(160deg, rgba(161,0,255,0.25) 0%, rgba(255,255,255,0.04) 100%)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--accent)",
                }}
              >
                DE
              </span>
            </div>
            <div>
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--fg)",
                  letterSpacing: "-0.01em",
                  marginBottom: 4,
                }}
              >
                Deniz Erdoğan
              </p>
              <p style={{ fontSize: 14, color: "var(--muted)" }}>
                Kurucu, Advisera Global
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          paddingBlock: "clamp(64px,8vw,120px)",
          paddingInline: "clamp(24px,5vw,80px)",
        }}
        className="max-w-site"
      >
        <h2 className="h2" style={{ color: "var(--fg)", marginBottom: 16 }}>
          Daha iyi sistemler kurmaya hazır mısınız?
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "var(--muted)",
            marginBottom: 32,
            maxWidth: 480,
          }}
        >
          Hedefinizi paylaşın; FAVÖK, nakit akışı ve ihracat büyümesine odaklanan
          90 günlük aksiyon planıyla geri dönelim.
        </p>
        <Link href="/tr/iletisim" className="btn-primary">
          Strateji Görüşmesi Planla →
        </Link>
      </section>
    </div>
  );
}
