'use client';

import React, { useEffect, useRef } from 'react';

export const TechnicalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      // Re-populate dots on resize
      dots.length = 0;
      for (let x = 0; x < width + spacing; x += spacing) {
        for (let y = 0; y < height + spacing; y += spacing) {
          dots.push({
            x,
            y,
            originX: x,
            originY: y,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.1
          });
        }
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);

    const dots: { x: number; y: number; originX: number; originY: number; size: number; opacity: number }[] = [];
    const spacing = 50;
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        const dx = mouseX - dot.originX;
        const dy = mouseY - dot.originY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 500;

        if (dist < maxDist) {
          const angle = Math.atan2(dy, dx);
          const force = (maxDist - dist) / maxDist;
          const movement = force * force * 50;
          dot.x = dot.originX + Math.cos(angle) * movement;
          dot.y = dot.originY + Math.sin(angle) * movement;
          ctx.strokeStyle = `rgba(255, 255, 255, ${dot.opacity + force * 0.5})`;
        } else {
          dot.x = dot.originX;
          dot.y = dot.originY;
          ctx.strokeStyle = `rgba(255, 255, 255, ${dot.opacity})`;
        }

        ctx.lineWidth = 1.5;
        ctx.beginPath();
        const s = dot.size;
        ctx.moveTo(dot.x - s, dot.y);
        ctx.lineTo(dot.x + s, dot.y);
        ctx.moveTo(dot.x, dot.y - s);
        ctx.lineTo(dot.x, dot.y + s);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'transparent',
      }}
    />
  );
};
