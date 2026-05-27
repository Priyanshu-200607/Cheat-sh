'use client';

import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { Section } from '@/data/types';

interface SectionViewProps {
  section: Section;
  categoryColor?: string;
}

export function SectionView({ section, categoryColor = '#58a6ff' }: SectionViewProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isDark, setIsDark] = useState(true);

  // Detect theme client-side only
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.getAttribute('data-theme') !== 'light');
    };
    checkTheme();
    // Observe theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-card" id={section.id}>
      {/* Header */}
      <div
        className="section-header"
        onClick={() => setIsOpen((o) => !o)}
        role="button"
        aria-expanded={isOpen}
      >
        <div>
          <div
            className="section-title"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: categoryColor,
                flexShrink: 0,
              }}
            />
            {section.title}
            <span
              style={{
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                fontWeight: 400,
                marginLeft: '0.15rem',
              }}
            >
              {section.snippets.length} snippet{section.snippets.length !== 1 ? 's' : ''}
            </span>
          </div>
          {section.description && (
            <div className="section-description">{section.description}</div>
          )}
        </div>
        <button className={`section-toggle ${isOpen ? 'open' : ''}`} aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      {/* Snippets body */}
      {isOpen && (
        <div className="section-body fade-in">
          <div className="snippet-table">
            {section.snippets.map((snippet, idx) => (
              <SnippetRow
                key={idx}
                code={snippet.code}
                description={snippet.description}
                language={snippet.language || 'python'}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface SnippetRowProps {
  code: string;
  description: string;
  language: string;
  isDark: boolean;
}

function SnippetRow({ code, description, language, isDark }: SnippetRowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isMultiLine = code.trim().includes('\n');

  const codeStyle = isDark ? vscDarkPlus : oneLight;

  return (
    <div className="snippet-row">
      {/* Code block */}
      <div className="snippet-code-block">
        <div className="code-scroll-wrapper">
          {isMultiLine ? (
            <SyntaxHighlighter
              language={normalizeLanguage(language)}
              style={codeStyle}
              customStyle={{
                margin: 0,
                borderRadius: '6px',
                fontSize: '0.78rem',
                background: isDark ? '#0d1117' : '#f6f8fa',
                border: `1px solid ${isDark ? '#30363d' : '#d0d7de'}`,
                padding: '0.75rem 1rem',
                paddingRight: '3.5rem', // room for copy button
                overflowX: 'auto',
                overflowY: 'visible',
                WebkitOverflowScrolling: 'touch',
              }}
              wrapLongLines={false}
              showLineNumbers={code.split('\n').length > 8}
              lineNumberStyle={{ color: isDark ? '#6e7681' : '#9198a1', fontSize: '0.7rem', minWidth: '2.5em' }}
            >
              {code}
            </SyntaxHighlighter>
          ) : (
            <code
              style={{
                background: isDark ? '#0d1117' : '#f6f8fa',
                border: `1px solid ${isDark ? '#30363d' : '#d0d7de'}`,
                borderRadius: '6px',
                padding: '0.4rem 0.9rem',
                display: 'block',
                fontSize: '0.83rem',
                color: isDark ? '#79c0ff' : '#0550ae',
                paddingRight: '3.5rem',
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                whiteSpace: 'nowrap',
              }}
            >
              {code}
            </code>
          )}
        </div>

        {/* Copy button */}
        <button
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          title="Copy to clipboard"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Description */}
      <div className="snippet-description">{description}</div>
    </div>
  );
}

// Map our language strings to prism-compatible ones
function normalizeLanguage(lang: string): string {
  const map: Record<string, string> = {
    c: 'c',
    cpp: 'cpp',
    python: 'python',
    java: 'java',
    sql: 'sql',
    javascript: 'javascript',
    typescript: 'typescript',
    bash: 'bash',
    css: 'css',
    json: 'json',
  };
  return map[lang.toLowerCase()] ?? 'python';
}
