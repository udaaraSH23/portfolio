'use client';

import React, { useState, useEffect } from 'react';
import { m } from 'framer-motion';

interface ImageMosaicProps {
  src: string;
  piecesCount?: number;
  className?: string;
}

export const ImageMosaic = ({ 
  src, 
  piecesCount = 64, 
  className = '' 
}: ImageMosaicProps) => {
  const [shards, setShards] = useState<{
    id: number;
    xBase: number;
    yBase: number;
    width: number;
    height: number;
    isOuter: boolean;
    clipPath: string;
    driftX: number;
    driftY: number;
    driftRotate: number;
    delay: number;
    duration: number;
  }[]>([]);

  useEffect(() => {
    const cols = Math.sqrt(piecesCount);
    const generatedShards = Array.from({ length: piecesCount }).map((_, i) => {
      const r = Math.floor(i / cols);
      const c = i % cols;
      
      const xBase = (c / cols) * 100;
      const yBase = (r / cols) * 100;
      const width = 100 / cols;
      const height = 100 / cols;

      const isOuter = r === 0 || r === cols - 1 || c === 0 || c === cols - 1;
      
      // Much more irregular shapes for the outer layer
      const p1 = isOuter ? `${Math.random() * 40}% ${Math.random() * 40}%` : '0% 0%';
      const p2 = isOuter ? `${60 + Math.random() * 40}% ${Math.random() * 40}%` : '100% 0%';
      const p3 = isOuter ? `${60 + Math.random() * 40}% ${60 + Math.random() * 40}%` : '100% 100%';
      const p4 = isOuter ? `${Math.random() * 40}% ${60 + Math.random() * 40}%` : '0% 100%';
      
      return {
        id: i,
        xBase,
        yBase,
        width,
        height,
        isOuter,
        clipPath: `polygon(${p1}, ${p2}, ${p3}, ${p4})`,
        driftX: isOuter ? (Math.random() - 0.5) * 120 : 0,
        driftY: isOuter ? (Math.random() - 0.5) * 120 : 0,
        driftRotate: isOuter ? (Math.random() - 0.5) * 45 : 0,
        delay: Math.random() * 3,
        duration: 10 + Math.random() * 5
      };
    });
    // We use a small delay or check to ensure this doesn't trigger a synchronous re-render warning
    // though in many cases this is actually fine for client-side initialization.
    const timer = setTimeout(() => {
      setShards(generatedShards);
    }, 0);
    return () => clearTimeout(timer);
  }, [piecesCount]);

  if (shards.length === 0) {
    return <div className={className} style={{ position: 'relative', width: '100%', height: '100%' }} />;
  }

  return (
    <div 
      className={className} 
      style={{ 
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'visible'
      }}
    >
      {shards.map((shard) => {
        if (!shard.isOuter) return null;
        
        return (
          <m.div
            key={shard.id}
            animate={{ 
              x: [0, shard.driftX, 0],
              y: [0, shard.driftY, 0],
              rotate: [0, shard.driftRotate, 0],
              opacity: [1, 0.4, 1],
              scale: [1, 0.7, 1]
            }}
            transition={{
              duration: shard.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shard.delay
            }}
            style={{
              position: 'absolute',
              left: `${shard.xBase}%`,
              top: `${shard.yBase}%`,
              width: `${shard.width}%`,
              height: `${shard.height}%`,
              backgroundImage: `url(${src})`,
              backgroundSize: `${Math.sqrt(piecesCount) * 100}% ${Math.sqrt(piecesCount) * 100}%`,
              backgroundPosition: `${shard.xBase}% ${shard.yBase}%`,
              clipPath: shard.clipPath,
              zIndex: 10,
              filter: 'drop-shadow(0 0 5px rgba(100, 255, 218, 0.4))',
              border: '0.5px solid rgba(100, 255, 218, 0.3)'
            }}
          />
        );
      })}
    </div>
  );
};


