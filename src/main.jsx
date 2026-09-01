import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const tools = ['React', 'Vite', 'Node.js', 'Docker']

function App() {
  return (
    <main className="page-shell">
      <nav aria-label="Primary navigation">
        <a className="brand" href="/" aria-label="Website Development home">
          <span className="brand-mark" aria-hidden="true">W</span>
          Website Development
        </a>
        <span className="status"><span aria-hidden="true" />Environment ready</span>
      </nav>

      <section className="hero">
        <div>
          <p className="eyebrow">Alloy development workspace</p>
          <h1>Build the web,<br />without the setup.</h1>
          <p className="intro">
            A focused React environment with fast refresh, containerized tooling,
            and a clean foundation for the next idea.
          </p>
          <a className="cta" href="#workspace">Explore the workspace <span aria-hidden="true">&rarr;</span></a>
        </div>

        <aside className="terminal" aria-label="Development server status">
          <div className="terminal-bar">
            <span /><span /><span />
            <p>workspace</p>
          </div>
          <div className="terminal-body">
            <p><b>$</b> npm run dev</p>
            <p className="muted">VITE ready in 214 ms</p>
            <p><strong>&#10003;</strong> Local: http://localhost:3000/</p>
            <p><strong>&#10003;</strong> React fast refresh enabled</p>
            <span className="cursor" aria-hidden="true" />
          </div>
        </aside>
      </section>

      <section className="workspace" id="workspace">
        <div>
          <p className="section-number">01</p>
          <h2>Everything in place.</h2>
        </div>
        <div className="workspace-copy">
          <p>The foundation is intentionally small, modern, and ready to extend.</p>
          <ul>
            {tools.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
