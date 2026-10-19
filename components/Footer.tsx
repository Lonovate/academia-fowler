export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <a href="#top" className="brand light-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-full.jpeg" alt="Academia Fowler" style={{ height: 45 }} />
        </a>
        <p>Where every student is known,<br />valued, and empowered to grow.</p>
        <a className="back-top" href="#top">Back to top &#8593;</a>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 Fowler Academy</span>
        <span>Privacy &middot; Accessibility</span>
        <span>English / Espa&ntilde;ol</span>
      </div>
    </footer>
  )
}
