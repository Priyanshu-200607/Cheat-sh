import Link from 'next/link';
import { allCategories } from '@/data/index';
import type { Metadata } from 'next';
import './components.css';

export const metadata: Metadata = {
  title: 'cheat.sh — Developer Cheat Sheets',
  description:
    'Fast, beautiful developer cheat sheets for interviews. Python, C, C++, Java, SQL, Data Structures, Algorithms, OS, System Design, Cryptography.',
};

export default function HomePage() {
  const totalSnippets = allCategories.reduce(
    (sum, c) => sum + c.sections.reduce((s2, sec) => s2 + sec.snippets.length, 0),
    0
  );
  const totalSections = allCategories.reduce((sum, c) => sum + c.sections.length, 0);

  return (
    <div className="page-container">
      {/* Hero */}
      <section className="home-hero">
        <h1>
          <span className="highlight-blue">cheat</span>
          <span style={{ color: 'var(--text-muted)' }}>.</span>
          <span className="highlight-red">sh</span>
        </h1>
        <p>
          Your one-stop developer cheat sheet for coding interviews.
          Fast. Organised. Offline-ready.
        </p>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          {[
            { value: allCategories.length, label: 'Topics' },
            { value: totalSections, label: 'Sections' },
            { value: `${totalSnippets}+`, label: 'Snippets' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '0.75rem 1.5rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Search CTA — CSS hover, no event handlers */}
        <Link href="/search" className="search-cta">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            Search snippets...
          </span>
          <kbd
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              padding: '2px 6px',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontFamily: 'inherit',
            }}
          >
            ⌘K
          </kbd>
        </Link>
      </section>

      {/* Languages */}
      <section style={{ marginBottom: '2.5rem' }}>
        <SectionHeader emoji="🌐" title="Programming Languages" />
        <div className="category-grid">
          {allCategories
            .filter((c) => ['python', 'c', 'cpp', 'java', 'oops'].includes(c.id))
            .map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
        </div>
      </section>

      {/* Libraries */}
      <section style={{ marginBottom: '2.5rem' }}>
        <SectionHeader emoji="📦" title="Python Libraries" />
        <div className="category-grid">
          {allCategories
            .filter((c) => ['numpy', 'pandas', 'matplotlib', 'sklearn'].includes(c.id))
            .map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
        </div>
      </section>

      {/* CS Fundamentals */}
      <section style={{ marginBottom: '2.5rem' }}>
        <SectionHeader emoji="🧠" title="CS Fundamentals &amp; Interview Prep" />
        <div className="category-grid">
          {allCategories
            .filter((c) =>
              ['dsa', 'sql', 'os', 'system-design', 'cryptography'].includes(c.id)
            )
            .map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
        </div>
      </section>

      {/* DevOps & Tools */}
      <section>
        <SectionHeader emoji="🛠️" title="DevOps &amp; Developer Tools" />
        <div className="category-grid">
          {allCategories
            .filter((c) => ['git', 'docker'].includes(c.id))
            .map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
        </div>
      </section>

      {/* Footer tip */}
      <div
        style={{
          marginTop: '4rem',
          padding: '1.25rem 1.5rem',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
        }}
      >
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          💡 All content is statically embedded — no API calls, no database, works offline. Press{' '}
          <kbd
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              borderRadius: '3px',
              padding: '1px 5px',
              fontSize: '0.75rem',
            }}
          >
            ⌘K
          </kbd>{' '}
          anywhere to search.
        </p>
      </div>
    </div>
  );
}

function SectionHeader({ emoji, title }: { emoji: string; title: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '1rem',
      }}
    >
      <span style={{ fontSize: '1.2rem' }}>{emoji}</span>
      <h2
        style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}
      >
        {title}
      </h2>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  );
}

function CategoryCard({
  category,
  index,
}: {
  category: (typeof allCategories)[0];
  index: number;
}) {
  const snippetCount = category.sections.reduce((s, sec) => s + sec.snippets.length, 0);

  return (
    <Link
      href={`/${category.id}`}
      className="category-card fade-in"
      style={
        {
          '--card-gradient': category.gradient,
          animationDelay: `${index * 0.05}s`,
        } as React.CSSProperties
      }
    >
      <div className="card-icon">{category.icon}</div>
      <div>
        <div className="card-title">{category.title}</div>
        <div className="card-description">{category.description}</div>
      </div>
      <div className="card-meta">
        <span className="card-badge">{category.sections.length} sections</span>
        <span className="card-badge">{snippetCount} snippets</span>
      </div>
    </Link>
  );
}
