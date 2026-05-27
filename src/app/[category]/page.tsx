import { notFound } from 'next/navigation';
import { allCategories, getCategoryById } from '@/data/index';
import { SectionView } from '@/components/SectionView';
import type { Metadata } from 'next';
import '../components.css';

// Pre-render all category routes at build time (SSG)
export function generateStaticParams() {
  return allCategories.map((cat) => ({ category: cat.id }));
}

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId);
  if (!category) return { title: 'Not Found' };
  return {
    title: `${category.title} Cheat Sheet`,
    description: `${category.description} — Quick reference with code examples for interviews.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId);
  if (!category) notFound();

  const totalSnippets = category.sections.reduce(
    (sum, sec) => sum + sec.snippets.length,
    0
  );

  return (
    <div className="page-container fade-in">
      {/* Hero banner */}
      <div className="category-hero">
        <div className="category-hero-inner">
          <div className="category-hero-icon">{category.icon}</div>
          <div>
            <h1>{category.title} Cheat Sheet</h1>
            <p>{category.description}</p>
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                marginTop: '0.75rem',
                flexWrap: 'wrap',
              }}
            >
              <span className="tag tag-blue">{category.sections.length} sections</span>
              <span className="tag tag-green">{totalSnippets} snippets</span>
              <span
                className="tag"
                style={{
                  background: `${category.color}15`,
                  color: category.color,
                  borderColor: `${category.color}40`,
                }}
              >
                Interview Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick-jump pills — pure CSS hover, no event handlers */}
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          padding: '0.875rem 1.25rem',
          marginBottom: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginRight: '0.25rem',
          }}
        >
          Jump to:
        </span>
        {category.sections.map((sec) => (
          <a key={sec.id} href={`#${sec.id}`} className="jump-pill">
            {sec.title}
          </a>
        ))}
      </div>

      {/* Sections list */}
      <div className="section-list">
        {category.sections.map((section) => (
          <SectionView
            key={section.id}
            section={section}
            categoryColor={category.color}
          />
        ))}
      </div>

      {/* Back link */}
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a href="/" className="back-link">
          ← Back to all topics
        </a>
      </div>
    </div>
  );
}
