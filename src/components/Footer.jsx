import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <a href="#top" className="back-top">
        Back to top <span aria-hidden="true">↑</span>
      </a>
    </footer>
  )
}
