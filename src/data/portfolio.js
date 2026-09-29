// Single source of truth for portfolio content.
// NOTE: No personal content was provided in the repository, so clearly
// identifiable placeholders ([YOUR NAME], [ROLE], etc.) are used here.
// Edit this file only — components read everything from here.

export const profile = {
  name: '[Your Name]',
  shortName: '[YN]',
  role: '[Frontend Developer / Your Role]',
  location: '[City, Country]',
  email: 'hello@example.com',
  availability: 'Available for new projects',
  intro:
    'Placeholder introduction. Replace this paragraph with a short, honest summary of who you are and what you do.',
}

export const socials = [
  { label: 'GitHub', url: 'https://github.com/your-username' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/your-username' },
  { label: 'Email', url: 'mailto:hello@example.com' },
]

export const navLinks = [
  { id: 'about', num: '01', label: 'About' },
  { id: 'skills', num: '02', label: 'Skills' },
  { id: 'experience', num: '03', label: 'Experience' },
  { id: 'projects', num: '04', label: 'Projects' },
  { id: 'contact', num: '05', label: 'Contact' },
]

export const about = {
  lead: 'Placeholder lead statement — replace with your one-sentence positioning.',
  paragraphs: [
    'Placeholder paragraph about your background. This repo contained no personal content, so every text block marked “placeholder” should be replaced by you.',
    'Placeholder paragraph about how you work and what you care about on the web: performance, accessibility and thoughtful interaction.',
  ],
}

export const skills = [
  {
    group: 'Frontend',
    items: ['React', 'JavaScript (ES2023)', 'HTML5', 'CSS3'],
  },
  {
    group: 'Ecosystem',
    items: ['Vite', 'Node.js', 'npm', 'REST APIs'],
  },
  {
    group: 'Styling & Motion',
    items: ['Design systems', 'Responsive layout', 'CSS animation', 'Figma → code'],
  },
  {
    group: 'Practice',
    items: ['Accessibility (WCAG)', 'Performance budgets', 'Git workflows', 'Code review'],
  },
]

export const experience = [
  {
    period: '[YYYY] – Present',
    role: '[Role Title]',
    org: '[Company / Organization]',
    note: 'Placeholder entry — replace with real responsibilities and outcomes.',
  },
  {
    period: '[YYYY] – [YYYY]',
    role: '[Role Title]',
    org: '[Company / Organization]',
    note: 'Placeholder entry — remove or edit as needed.',
  },
]

export const projectTypes = {
  webapp: 'Web App',
  site: 'Website',
  tool: 'Tooling',
  experiment: 'Experiment',
}

export const projects = [
  {
    id: 'alloy-workspace',
    title: 'Alloy Dev Workspace',
    year: '2026',
    type: 'webapp',
    summary:
      'The starter environment this very site is built on: React + Vite with containerized tooling and instant fast-refresh.',
    details:
      'A minimal, opinionated development workspace. Docker Compose installs dependencies into a named volume and boots Vite on port 3000, keeping the host checkout clean. Placeholder project derived from the actual repository setup — replace with a real project.',
    technologies: ['React', 'Vite', 'Node.js', 'Docker'],
    links: [],
    palette: ['#173f2b', '#e07248'],
  },
  {
    id: 'project-two',
    title: '[Project Two]',
    year: '[YYYY]',
    type: 'site',
    summary: 'Placeholder project description. Replace title, year and copy with real work.',
    details:
      'Placeholder long-form case-study text. Each project supports a summary, a longer detail view, a technology list and optional external links.',
    technologies: ['[Tech A]', '[Tech B]'],
    links: [{ label: 'Live site', url: 'https://example.com' }],
    palette: ['#b24d28', '#15231c'],
  },
  {
    id: 'project-three',
    title: '[Project Three]',
    year: '[YYYY]',
    type: 'tool',
    summary: 'Placeholder project description for a third entry.',
    details:
      'Placeholder long-form case-study text. Add as many or as few projects as you actually have — the grid adapts.',
    technologies: ['[Tech C]', '[Tech D]'],
    links: [{ label: 'Source', url: 'https://github.com/your-username' }],
    palette: ['#14231b', '#5ec783'],
  },
]

export const contact = {
  heading: 'Let’s build something.',
  text: 'Placeholder contact copy — say how people should reach you and what kinds of work you’re looking for.',
}
