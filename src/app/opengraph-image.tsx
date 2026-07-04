import { ImageResponse } from 'next/og';

export const alt = 'Udara Shanuka - Full-Stack & DevOps Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0A192F',
          color: '#E6F1FF',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            letterSpacing: 4,
            color: '#64FFDA',
            fontWeight: 800,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          Udara Shanuka
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: -2,
            maxWidth: 950,
          }}
        >
          Building systems that actually work at scale.
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: '#8892B0',
            marginTop: 32,
          }}
        >
          Full-Stack &amp; DevOps Engineer
        </div>
      </div>
    ),
    { ...size },
  );
}
