import Icon from './Icon'

export default function ButtonLink({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <a className={`button ${secondary ? 'button-secondary' : ''}`} href={href}>{children}<Icon name="arrow" /></a>
}
