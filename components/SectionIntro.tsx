export default function SectionIntro({ kicker, title, text, light = false }: { kicker: string; title: string; text?: string; light?: boolean }) {
  return <div className={`section-intro ${light ? 'light' : ''}`}><span>{kicker}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}
