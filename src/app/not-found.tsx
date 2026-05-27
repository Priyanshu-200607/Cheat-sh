import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="page-container fade-in"
      style={{ textAlign: 'center', paddingTop: '5rem' }}
    >
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</div>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 700 }}>
        Page Not Found
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        This cheat sheet doesn&apos;t exist... yet.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'var(--accent-blue)',
          color: '#fff',
          borderRadius: 'var(--radius-md)',
          padding: '0.6rem 1.25rem',
          fontWeight: 600,
          fontSize: '0.875rem',
          textDecoration: 'none',
        }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}
