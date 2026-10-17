import Image from "next/image";
import type { ReactNode } from "react";

const LINE_URL = "https://line.me/R/ti/p/@cosmosandharmony";
const TEL_URL = "tel:+66936367692";
const PHONE_DISPLAY = "093-636-7692";
const FACEBOOK_URL = "https://www.facebook.com/cosmosandharmony";
const INSTAGRAM_URL = "https://www.instagram.com/cosmosandharmony";
const ADDRESS =
  "73/4 หมู่ 6 ซอยสุขสวัสดิ์ 76 ถนนสุขสวัสดิ์ ตำบลบางจาก อำเภอพระประแดง จังหวัดสมุทรปราการ 10130";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("73/4 หมู่ 6 ซอยสุขสวัสดิ์ 76 บางจาก พระประแดง สมุทรปราการ 10130");

/* ---------- ไอคอน ---------- */

function Flower({ className = "", petal = "var(--sun)", center = "var(--tangerine)" }: { className?: string; petal?: string; center?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="50" cy="26" rx="18" ry="22" fill={petal} transform={`rotate(${r} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="14" fill={center} />
    </svg>
  );
}

function LineIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.5C6.2 2.5 1.5 6.3 1.5 11c0 4.2 3.7 7.7 8.8 8.4.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.6 1.1-.5 6-3.5 8.2-6 1.5-1.7 2.3-3.4 2.3-5.4 0-4.7-4.7-8.5-10.5-8.5zM8.1 13.6H6c-.3 0-.6-.3-.6-.6V8.8c0-.3.3-.6.6-.6s.6.3.6.6v3.6h1.5c.3 0 .6.3.6.6s-.3.6-.6.6zm2.1-.6c0 .3-.3.6-.6.6s-.6-.3-.6-.6V8.8c0-.3.3-.6.6-.6s.6.3.6.6V13zm5.1 0c0 .3-.2.5-.4.6h-.2c-.2 0-.4-.1-.5-.2l-2.1-2.9V13c0 .3-.3.6-.6.6s-.6-.3-.6-.6V8.8c0-.3.2-.5.4-.6h.2c.2 0 .4.1.5.2l2.1 2.9V8.8c0-.3.3-.6.6-.6s.6.3.6.6V13zm3.4-2.7c.3 0 .6.3.6.6s-.3.6-.6.6h-1.5v.9h1.5c.3 0 .6.3.6.6s-.3.6-.6.6h-2.1c-.3 0-.6-.3-.6-.6V8.8c0-.3.3-.6.6-.6h2.1c.3 0 .6.3.6.6s-.3.6-.6.6h-1.5v.9h1.5z" />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21.9v-7.4h2.5l.4-2.9h-2.9V9.8c0-.8.2-1.4 1.4-1.4h1.5V5.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8v2.9h2.5v7.4C5.7 21.2 2 17 2 12 2 6.5 6.5 2 12 2s10 4.5 10 10c0 5-3.7 9.2-8.5 9.9z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function PinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

/* ---------- ชิ้นส่วนที่ใช้ซ้ำ ---------- */

function LineButton({ className = "", children = "ทักไลน์เลย" }: { className?: string; children?: ReactNode }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-pop inline-flex items-center justify-center gap-2 rounded-full bg-line px-7 py-3.5 font-display text-lead font-medium text-white ${className}`}
    >
      <LineIcon className="h-6 w-6" />
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <p className="sticker mb-4 inline-block -rotate-2 rounded-full bg-sun px-4 py-1 font-display text-small font-medium uppercase tracking-wide">
        {eyebrow}
      </p>
      <h2 className="font-display text-h2 font-semibold">{title}</h2>
      {intro && <p className="mt-4 text-lead text-ink-soft">{intro}</p>}
    </div>
  );
}

/* ---------- ข้อมูล ---------- */

const highlights = [
  {
    en: "Quirky Eco-Conscious Care",
    title: "เปลี่ยนกิจวัตรธรรมดา ให้เป็นพิธีเล็ก ๆ ที่มีความสุข",
    body: "ของใช้รักษ์โลกดีไซน์สนุก ขี้เล่นนิด ๆ ที่ทำให้ทุกครั้งที่ล้างมือ อาบน้ำ หรือจุดกลิ่นหอม กลายเป็นช่วงเวลาเล็ก ๆ ที่ยิ้มได้และมีความหมาย",
    color: "bg-sun",
    rotate: "-rotate-1",
  },
  {
    en: "Conscious Care with Everyday Delight",
    title: "ใส่ใจโลก ใส่ใจคุณ ในทุก ๆ วัน",
    body: "คัดส่วนผสมที่ได้จากธรรมชาติ (Natural-Derived) อ่อนโยนต่อคน สัตว์เลี้ยง และบ้าน พร้อมแพ็กเกจที่คิดมาเพื่อลดขยะ ใช้แล้วสบายใจ",
    color: "bg-peach",
    rotate: "rotate-1",
  },
  {
    en: "Rooted & Reimagined",
    title: "เติบโตจากรากไทย ตีความใหม่ ทำด้วยความหมาย",
    body: "แรงบันดาลใจจากวัตถุดิบและวัฒนธรรมไทย เช่น ข้าวไทยและสมุนไพร นำมาเล่าใหม่ให้ร่วมสมัย ทุกชิ้นทำด้วยหัวใจจากประเทศไทย",
    color: "bg-paper",
    rotate: "-rotate-1",
  },
];

const products = [
  {
    image: "/images/gift-box-inside.jpg",
    alt: "กล่องของขวัญ Cosmos & Harmony มีสบู่ข้าวไทย น้ำหอม บอดี้ออยล์ โลชั่นทามือ ชาวเวอร์ออยล์ และสครับเกลือ",
    tag: "สบู่ & Personal Care",
    title: "สบู่ทำมือ & ของใช้ส่วนตัว",
    body: "สบู่ข้าวไทย สบู่ออร์แกนิก สบู่เชียบัตเตอร์ โลชั่นทามือ ชาวเวอร์ออยล์ บอดี้ออยล์ และสครับ จัดรวมเป็นเซ็ตของขวัญได้ตามงบ",
  },
  {
    image: "/images/aroma-front.jpg",
    alt: "เซ็ต Aroma Roller 5 กลิ่น Day Break, Workspace, Refuel, Transition, Deep Sleep ในกล่องคราฟต์",
    tag: "Scent",
    title: "เครื่องหอม & อโรมา",
    body: "อโรมาโรลเลอร์จากน้ำมันหอมระเหย 5 กลิ่นสำหรับ 5 ช่วงเวลาของวัน ตั้งแต่ตื่นนอน ทำงาน ไปจนถึงหลับสบาย",
  },
  {
    image: "/images/wrap-coral.jpg",
    alt: "ของขวัญห่อด้วยผ้าลายดอกไม้สีส้มพีช ผูกโบว์ พร้อมป้าย Gift for You",
    tag: "Gifting",
    title: "ห่อของขวัญด้วยผ้า",
    body: "ห่อด้วยผ้าลายน่ารักแทนกระดาษ ผู้รับนำผ้าไปใช้ต่อได้ เป็นของขวัญสองต่อที่ช่วยลดขยะ",
  },
];

const services = [
  { title: "Corporate Gift", body: "ของขวัญองค์กร ปีใหม่ เทศกาล ขอบคุณลูกค้า และพนักงาน" },
  { title: "ของชำร่วย & ของพรีเมียม", body: "งานแต่ง งานสัมมนา งานอีเวนต์ ของที่ระลึกแบรนด์" },
  { title: "Hospitality", body: "ของใช้ในห้องพักและของต้อนรับแขก สำหรับโรงแรมและรีสอร์ต" },
  { title: "Customization", body: "ใส่โลโก้ เลือกกลิ่น เลือกแพ็กเกจและการ์ด ให้เป็นของคุณเอง" },
];

const categories = ["Personal Care", "Pet Care", "Home & Ambience", "Soap", "Scent", "Gift Set"];

const faqs = [
  {
    q: "สั่งทำ Corporate Gift ขั้นต่ำกี่ชิ้น?",
    a: "จำนวนขั้นต่ำขึ้นอยู่กับสินค้าและรูปแบบการปรับแต่ง ยิ่งสั่งมาก ราคาต่อชิ้นยิ่งพิเศษ ทักไลน์บอกจำนวนและงบประมาณคร่าว ๆ ทีมงานจะเสนอเซ็ตที่เหมาะให้",
  },
  {
    q: "ใส่โลโก้บริษัท หรือออกแบบแพ็กเกจเองได้ไหม?",
    a: "ได้ เราออกแบบได้ตั้งแต่ใส่โลโก้ การ์ดข้อความ เลือกกลิ่น เลือกผ้าห่อ ไปจนถึงจัดเซ็ตใหม่ให้เข้ากับแบรนด์หรือธีมงานของคุณ",
  },
  {
    q: "ควรสั่งล่วงหน้านานแค่ไหน?",
    a: "ขึ้นอยู่กับจำนวนและการปรับแต่ง ช่วงเทศกาลอย่างปีใหม่คิวจะแน่น แนะนำให้ติดต่อล่วงหน้าเพื่อให้มีเวลาเลือกแบบและผลิตได้ทัน",
  },
  {
    q: "ซื้อเป็นของขวัญชิ้นเดียว หรือของชำร่วยจำนวนน้อยได้ไหม?",
    a: "ได้ ทั้งลูกค้าองค์กรและลูกค้าทั่วไป ทักไลน์บอกโอกาส งบ และจำนวน เราช่วยแนะนำของขวัญที่เหมาะให้",
  },
];

/* ---------- หน้าเว็บ ---------- */

export default function Home() {
  return (
    <>
      {/* แถบบน */}
      <header className="sticky top-0 z-40 border-b-2 border-ink bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold leading-none">
            <Flower className="h-8 w-8 spin-slow" />
            <span>
              Cosmos <span className="text-tangerine">&amp;</span> Harmony
            </span>
          </a>
          <nav className="hidden items-center gap-6 font-display text-small md:flex">
            <a href="#why" className="hover:text-tangerine">จุดเด่น</a>
            <a href="#products" className="hover:text-tangerine">สินค้า & บริการ</a>
            <a href="#faq" className="hover:text-tangerine">คำถาม</a>
            <a href="#contact" className="hover:text-tangerine">ติดต่อ</a>
          </nav>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pop inline-flex items-center gap-1.5 rounded-full bg-line px-4 py-2 font-display text-small font-medium text-white"
          >
            <LineIcon className="h-4 w-4" />
            ทักไลน์
          </a>
        </div>
      </header>

      <main id="top" className="flex-1 overflow-x-clip">
        {/* ส่วนหัว */}
        <section className="dotted-bg relative">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 md:grid-cols-2 md:gap-12 md:pb-24 md:pt-16">
            <div className="relative z-10 text-center md:text-left">
              <p className="sticker mb-5 inline-flex rotate-[-3deg] items-center gap-2 rounded-full bg-paper px-4 py-1.5 font-display text-small">
                🌿 Eco-conscious Gift · Premium · Souvenir
              </p>
              <h1 className="font-display text-hero font-semibold">
                <span className="whitespace-nowrap">ของขวัญรักษ์โลก</span>
                <br />
                ที่ทำให้ทุกวัน
                <span className="relative inline-block whitespace-nowrap">
                  <span className="relative z-10">ยิ้มได้</span>
                  <span className="absolute inset-x-0 bottom-1 -z-0 h-4 -rotate-1 rounded bg-sun md:h-5" aria-hidden="true" />
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-lead text-ink-soft md:mx-0">
                <strong className="font-semibold text-ink">Cosmos &amp; Harmony</strong> รับทำ Corporate Gift ของชำร่วย และของพรีเมียม
                สำหรับองค์กรและคนพิเศษของคุณ ด้วยสบู่ ของใช้ส่วนตัว และเครื่องหอมจากส่วนผสมธรรมชาติ พร้อมบริการจัดเซ็ตและออกแบบตามแบรนด์
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
                <LineButton className="w-full sm:w-auto" />
                <a href="#products" className="font-display font-medium underline decoration-tangerine decoration-2 underline-offset-4 hover:text-tangerine">
                  ดูสินค้าและบริการ ↓
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <Flower className="wiggle absolute -left-4 -top-6 z-10 h-20 w-20 md:-left-8 md:h-28 md:w-28" />
              <Flower className="absolute -bottom-6 -right-3 z-10 h-16 w-16 md:h-20 md:w-20" petal="var(--tangerine)" center="var(--sun)" />
              <div className="sticker rotate-2 overflow-hidden rounded-[2rem] bg-paper">
                <Image
                  src="/images/gift-box-inside.jpg"
                  alt="กล่องของขวัญ Cosmos & Harmony พร้อมสบู่ข้าวไทยและของใช้ส่วนตัวจากธรรมชาติ"
                  width={1254}
                  height={1254}
                  priority
                  sizes="(min-width: 768px) 50vw, 90vw"
                  className="h-auto w-full"
                />
              </div>
              <p className="sticker absolute -bottom-4 left-4 z-20 -rotate-6 rounded-xl bg-tangerine px-3 py-1.5 font-display text-small font-medium text-white">
                Heartmade in Thailand ♥
              </p>
            </div>
          </div>
        </section>

        {/* แถบวิ่งหมวดสินค้า */}
        <div className="border-y-2 border-ink bg-tangerine py-3 text-white">
          <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 font-display text-small font-medium md:text-body">
            {categories.map((c) => (
              <li key={c} className="flex items-center gap-6">
                <span>{c}</span>
                <span aria-hidden="true" className="text-sun">✺</span>
              </li>
            ))}
          </ul>
        </div>

        {/* จุดเด่น */}
        <section id="why" className="scroll-mt-20 px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="ทำไมต้องเรา" title="ของขวัญที่ดีต่อใจ และดีต่อโลก" />
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {highlights.map((h, i) => (
                <article key={h.en} className={`sticker ${h.color} ${h.rotate} rounded-3xl p-6 md:p-8`}>
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-paper font-display text-xl font-semibold">
                    {i + 1}
                  </span>
                  <p className="font-display text-small font-medium uppercase tracking-wide text-tangerine-deep">{h.en}</p>
                  <h3 className="mt-1 font-display text-h3 font-semibold">{h.title}</h3>
                  <p className="mt-3 text-ink-soft">{h.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* สินค้า / บริการ */}
        <section id="products" className="scroll-mt-20 border-y-2 border-ink bg-sun-soft px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="สินค้า & บริการ"
              title="จัดเซ็ตของขวัญได้ตามใจ ตามงบ"
              intro="เลือกสินค้าเดี่ยว หรือให้เราจัดเซ็ตให้เข้ากับโอกาสและแบรนด์ของคุณ ราคาขึ้นอยู่กับจำนวนและรูปแบบ ทักไลน์ขอใบเสนอราคาได้เลย"
            />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <article key={p.title} className="sticker flex flex-col overflow-hidden rounded-3xl bg-paper">
                  <div className="relative aspect-square border-b-2 border-ink bg-cream">
                    <Image src={p.image} alt={p.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                    <span className="sticker absolute left-3 top-3 rounded-full bg-sun px-3 py-1 font-display text-small font-medium">{p.tag}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-h3 font-semibold">{p.title}</h3>
                    <p className="mt-2 flex-1 text-ink-soft">{p.body}</p>
                    <p className="mt-4 font-display font-medium text-tangerine-deep">ราคา: สอบถามทางไลน์</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 grid items-center gap-8 md:grid-cols-[1fr_1.2fr]">
              <div className="grid grid-cols-2 gap-4">
                <div className="sticker -rotate-3 overflow-hidden rounded-2xl bg-paper">
                  <Image src="/images/wrap-blue.jpg" alt="ของขวัญห่อผ้าลายดอกไม้สีฟ้าเหลือง" width={1254} height={1254} sizes="(min-width: 768px) 20vw, 45vw" className="h-auto w-full" />
                </div>
                <div className="sticker mt-8 rotate-3 overflow-hidden rounded-2xl bg-paper">
                  <Image src="/images/wrap-navy.jpg" alt="ของขวัญห่อผ้าลายดอกไม้สีกรมท่า พร้อมป้ายการ์ด" width={1254} height={1254} sizes="(min-width: 768px) 20vw, 45vw" className="h-auto w-full" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-h2 font-semibold">บริการของเรา</h3>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {services.map((s) => (
                    <li key={s.title} className="rounded-2xl border-2 border-ink bg-paper p-5">
                      <p className="font-display text-h3 font-semibold">
                        <span className="mr-1 text-tangerine" aria-hidden="true">✺</span>
                        {s.title}
                      </p>
                      <p className="mt-1 text-small text-ink-soft">{s.body}</p>
                    </li>
                  ))}
                </ul>
                <LineButton className="mt-8 w-full sm:w-auto">ทักไลน์เลย ขอใบเสนอราคา</LineButton>
              </div>
            </div>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section id="faq" className="scroll-mt-20 px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <SectionTitle eyebrow="FAQ" title="คำถามที่พบบ่อย" />
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border-2 border-ink bg-paper p-5 open:bg-sun-soft md:p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-h3 font-medium [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-sun text-xl transition-transform group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section id="contact" className="scroll-mt-20 px-4 pb-16 md:pb-24">
          <div className="sticker relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-sun px-5 py-12 md:px-12 md:py-16">
            <Flower className="spin-slow absolute -right-10 -top-10 h-40 w-40 opacity-60" petal="var(--paper)" center="var(--tangerine)" />
            <div className="relative grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="font-display text-h2 font-semibold">มาคุยเรื่องของขวัญกัน!</h2>
                <p className="mt-4 text-lead">บอกเราว่าอยากให้ใคร โอกาสอะไร งบเท่าไหร่ เดี๋ยวเราช่วยจัดให้</p>
                <LineButton className="mt-8 w-full sm:w-auto" />
                <ul className="mt-8 space-y-4">
                  <li className="flex gap-3">
                    <PinIcon className="mt-1 h-5 w-5 shrink-0" />
                    <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-4 hover:text-tangerine-deep">
                      {ADDRESS}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <ClockIcon className="mt-1 h-5 w-5 shrink-0" />
                    <span>จันทร์ – ศุกร์ 8:00 – 17:00 น.</span>
                  </li>
                </ul>
              </div>

              <div className="grid content-start gap-4">
                <ContactCard href={LINE_URL} icon={<LineIcon className="h-6 w-6" />} label="LINE" value="@cosmosandharmony" iconBg="bg-line text-white" external />
                <ContactCard href={TEL_URL} icon={<PhoneIcon className="h-6 w-6" />} label="โทร" value={PHONE_DISPLAY} iconBg="bg-tangerine text-white" />
                <ContactCard href={FACEBOOK_URL} icon={<FacebookIcon className="h-6 w-6" />} label="Facebook" value="@cosmosandharmony" iconBg="bg-[#1877f2] text-white" external />
                <ContactCard href={INSTAGRAM_URL} icon={<InstagramIcon className="h-6 w-6" />} label="Instagram" value="@cosmosandharmony" iconBg="bg-ink text-white" external />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ส่วนท้าย */}
      <footer className="border-t-2 border-ink bg-ink px-4 py-10 text-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <Flower className="h-7 w-7" />
            Cosmos &amp; Harmony
          </div>
          <p className="text-small opacity-80">Eco-conscious Gift · Premium · Souvenir — Heartmade with love from Thailand</p>
          <p className="text-small opacity-60">© 2026 Cosmos And Harmony Co., Ltd.</p>
        </div>
      </footer>
    </>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
  iconBg,
  external = false,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  iconBg: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="btn-pop flex items-center gap-4 rounded-2xl bg-paper p-4"
    >
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ink ${iconBg}`}>{icon}</span>
      <span className="min-w-0">
        <span className="block text-small text-ink-soft">{label}</span>
        <span className="block truncate font-display text-h3 font-medium">{value}</span>
      </span>
    </a>
  );
}
