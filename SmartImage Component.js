function SmartImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{
        width: '100%',
        maxWidth: '400px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        objectFit: 'cover',
        background: '#f0f0f0', // subtle placeholder background color
      }}
      onError={e => { e.target.onerror = null; e.target.src = '/images/placeholder.png'; }}
    />
  );
}
