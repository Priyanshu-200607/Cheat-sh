'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Fuse from 'fuse.js';
import { getAllSnippets } from '@/data/index';

const allSnippets = getAllSnippets();

const fuse = new Fuse(allSnippets, {
  keys: [
    { name: 'description', weight: 0.5 },
    { name: 'sectionTitle', weight: 0.25 },
    { name: 'categoryTitle', weight: 0.15 },
    { name: 'code', weight: 0.1 },
  ],
  threshold: 0.35,
  includeScore: true,
  minMatchCharLength: 2,
});

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState(() =>
    initialQuery ? fuse.search(initialQuery) : []
  );

  useEffect(() => {
    if (query.trim().length >= 2) {
      const r = fuse.search(query.trim());
      setResults(r);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      router.back();
    }
  };

  return (
    <div className="page-container fade-in">
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>
          🔍 Search Snippets
        </h1>

        {/* Search input */}
        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)',
              pointerEvents: 'none',
            }}
          >
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search snippets, topics, keywords..."
            autoFocus
            style={{
              width: '100%',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '0.875rem 1rem 0.875rem 3rem',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              fontFamily: 'inherit',
              outline: 'none',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onFocus={e => {
              e.target.style.borderColor = 'var(--accent-blue)';
              e.target.style.boxShadow = '0 0 0 3px rgba(88,166,255,0.15)';
            }}
            onBlur={e => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.boxShadow = 'none';
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '1.1rem',
                lineHeight: 1,
                padding: '0.2rem',
              }}
            >
              ×
            </button>
          )}
        </div>

        {/* Results info */}
        {query.length >= 2 && (
          <div style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            marginBottom: '1rem',
          }}>
            {results.length > 0
              ? `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`
              : `No results for "${query}"`}
          </div>
        )}

        {/* No query state */}
        {query.length < 2 && (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🔍</div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Type at least 2 characters to search
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              {allSnippets.length} snippets across {new Set(allSnippets.map(s => s.categoryId)).size} topics
            </p>
          </div>
        )}

        {/* Results list */}
        {results.length > 0 && (
          <div className="search-results">
            {results.slice(0, 30).map((result, idx) => {
              const item = result.item;
              return (
                <Link
                  key={idx}
                  href={`/${item.categoryId}#${item.sectionId}`}
                  className="search-result-item"
                  style={{ animationDelay: `${idx * 0.03}s` }}
                >
                  <div className="search-result-path">
                    <span>{item.categoryIcon}</span>
                    <span>{item.categoryTitle}</span>
                    <span style={{ color: 'var(--border)' }}>›</span>
                    <span>{item.sectionTitle}</span>
                    {result.score !== undefined && (
                      <span style={{ marginLeft: 'auto', color: 'var(--accent-green)', fontSize: '0.65rem', fontWeight: 600 }}>
                        {Math.round((1 - result.score) * 100)}% match
                      </span>
                    )}
                  </div>
                  <div className="search-result-desc">{item.description}</div>
                  <div className="search-result-code">
                    {item.code.split('\n')[0].trim()}
                    {item.code.includes('\n') ? '...' : ''}
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* No results */}
        {query.length >= 2 && results.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🤷</div>
            <p style={{ color: 'var(--text-secondary)' }}>No snippets found for &ldquo;{query}&rdquo;</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Try different keywords or browse a topic directly.
            </p>
            <Link href="/" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--accent-blue)', fontSize: '0.9rem' }}>
              Browse all topics →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="page-container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <div style={{ color: 'var(--text-muted)' }}>Loading search...</div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
