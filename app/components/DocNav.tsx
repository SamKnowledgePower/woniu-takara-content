import Link from "next/link";

const docLinks = [
  { href: "/contract", label: "契約" },
  { href: "/service", label: "服務說明書" },
  { href: "/progress", label: "進度表" },
] as const;

export default function DocNav({ current }: { current: (typeof docLinks)[number]["href"] }) {
  return (
    <header className="docNav">
      <Link className="docNav__back" href="/">← 回首頁</Link>
      <nav className="docNav__links" aria-label="方案文件">
        {docLinks.map(({ href, label }) => (
          <Link key={href} href={href} aria-current={href === current ? "page" : undefined}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
