'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { allCategories } from '@/data/index';

interface SidebarWrapperProps {
  children: React.ReactNode;
}

export function SidebarWrapper({ children }: SidebarWrapperProps) {
  // --- mounted guard: prevents any SSR/client mismatch ---
  const [mounted, setMounted] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  // Parse current path
  const segments = pathname.split('/').filter(Boolean);
  const currentCategory = segments[0] || '';
  const currentSection = segments[1] || '';

  // Mark mounted — after this point all client-only state is safe
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-expand current category (only after mount)
  useEffect(() => {
    if (currentCategory) {
      setExpandedCategories(prev => new Set([...prev, currentCategory]));
    }
  }, [currentCategory]);

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Keyboard shortcut: Cmd/Ctrl+K for search
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      router.push('/search');
    }
    if (e.key === 'Escape') {
      setMobileSidebarOpen(false);
    }
  }, [router]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(categoryId)) next.delete(categoryId);
      else next.add(categoryId);
      return next;
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  // Safe toggle: only reads window after mount
  const handleHamburgerClick = () => {
    if (!mounted) return;
    if (window.innerWidth < 769) {
      setMobileSidebarOpen(prev => !prev);
    } else {
      setSidebarOpen(prev => !prev);
    }
  };

  return (
    <div className="app-layout">
      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${mounted && mobileSidebarOpen ? 'visible' : ''}`}
        onClick={() => setMobileSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${mounted && !sidebarOpen ? 'hidden' : ''} ${mounted && mobileSidebarOpen ? 'mobile-open' : ''}`}>
        {/* Logo */}
        <Link href="/" className="sidebar-logo" onClick={() => setMobileSidebarOpen(false)}>
          <span>💻</span>
          <span>
            <span className="logo-cheat">cheat</span>
            <span className="logo-dot">.</span>
            <span className="logo-shit">sh</span>
          </span>
        </Link>

        {/* Sidebar search */}
        <div className="sidebar-search">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search snippets... (⌘K)"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        {/* Nav */}
        <nav className="sidebar-nav">
          <div className="sidebar-category-title">Languages</div>
          {allCategories.filter(c => ['python','c','cpp','java','oops'].includes(c.id)).map(cat => (
            <SidebarCategory
              key={cat.id}
              category={cat}
              isExpanded={mounted && expandedCategories.has(cat.id)}
              onToggle={() => toggleCategory(cat.id)}
              currentCategory={mounted ? currentCategory : ''}
              currentSection={mounted ? currentSection : ''}
              onNavigate={() => setMobileSidebarOpen(false)}
            />
          ))}

          <div className="sidebar-category-title">Python Libraries</div>
          {allCategories.filter(c => ['numpy','pandas','matplotlib','sklearn'].includes(c.id)).map(cat => (
            <SidebarCategory
              key={cat.id}
              category={cat}
              isExpanded={mounted && expandedCategories.has(cat.id)}
              onToggle={() => toggleCategory(cat.id)}
              currentCategory={mounted ? currentCategory : ''}
              currentSection={mounted ? currentSection : ''}
              onNavigate={() => setMobileSidebarOpen(false)}
            />
          ))}

          <div className="sidebar-category-title">CS Fundamentals</div>
          {allCategories.filter(c => ['dsa','sql','os','system-design','cryptography'].includes(c.id)).map(cat => (
            <SidebarCategory
              key={cat.id}
              category={cat}
              isExpanded={mounted && expandedCategories.has(cat.id)}
              onToggle={() => toggleCategory(cat.id)}
              currentCategory={mounted ? currentCategory : ''}
              currentSection={mounted ? currentSection : ''}
              onNavigate={() => setMobileSidebarOpen(false)}
            />
          ))}
        </nav>

        {/* Bottom actions */}
        <div style={{ padding: '0.75rem 1rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            {allCategories.length} topics
          </span>
          <button
            className="btn-icon"
            onClick={toggleTheme}
            title="Toggle theme"
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '0.25rem 0.5rem', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: '0.85rem' }}
          >
            {/* Render a fixed icon until mounted to avoid SSR mismatch */}
            {mounted ? (theme === 'dark' ? '☀️' : '🌙') : '☀️'}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className={`main-content ${mounted && !sidebarOpen ? 'sidebar-collapsed' : ''}`}>
        {/* Top bar */}
        <header className="topbar">
          <button
            className="topbar-hamburger"
            onClick={handleHamburgerClick}
            aria-label="Toggle sidebar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>

          {/* Breadcrumb */}
          <div className="topbar-breadcrumb">
            <Link href="/">Home</Link>
            {mounted && currentCategory && (
              <>
                <span className="sep">›</span>
                <Link href={`/${currentCategory}`}>
                  {allCategories.find(c => c.id === currentCategory)?.title || currentCategory}
                </Link>
              </>
            )}
            {mounted && currentSection && (
              <>
                <span className="sep">›</span>
                <span className="current">
                  {allCategories
                    .find(c => c.id === currentCategory)
                    ?.sections.find(s => s.id === currentSection)?.title || currentSection}
                </span>
              </>
            )}
          </div>

          {/* Search button */}
          <div className="topbar-actions">
            <Link
              href="/search"
              className="btn btn-ghost"
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', gap: '0.5rem' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              Search
              <kbd style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                padding: '0 4px',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
              }}>⌘K</kbd>
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main>{children}</main>
      </div>
    </div>
  );
}

// Sidebar category item component
function SidebarCategory({
  category,
  isExpanded,
  onToggle,
  currentCategory,
  currentSection,
  onNavigate,
}: {
  category: { id: string; icon: string; title: string; sections: { id: string; title: string }[] };
  isExpanded: boolean;
  onToggle: () => void;
  currentCategory: string;
  currentSection: string;
  onNavigate: () => void;
}) {
  const isActive = category.id === currentCategory;

  // Use a CSS class-based approach for the arrow instead of inline transform
  // to avoid server/client shorthand expansion mismatch
  return (
    <div>
      <div
        className={`sidebar-item ${isActive ? 'active' : ''}`}
        onClick={onToggle}
      >
        <span className="sidebar-item-icon">{category.icon}</span>
        <span style={{ flex: 1 }}>{category.title}</span>
        <span className={`sidebar-arrow ${isExpanded ? 'expanded' : ''}`}>▶</span>
      </div>

      {isExpanded && (
        <div className="slide-in">
          {category.sections.map(section => (
            <Link
              key={section.id}
              href={`/${category.id}#${section.id}`}
              className={`sidebar-sub-item ${isActive && currentSection === section.id ? 'active' : ''}`}
              onClick={onNavigate}
            >
              {section.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
