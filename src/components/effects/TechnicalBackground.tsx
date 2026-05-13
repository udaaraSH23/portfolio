'use client';

import React, { useEffect, useRef, useMemo } from 'react';
import { useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';

interface TechnicalBackgroundProps {
  particleColor?: string;
  connectionColor?: string;
  blobColorPrimary?: string;
  blobColorSecondary?: string;
}

export const TechnicalBackground = ({
  // --- TWEAK COLORS HERE ---
  particleColor = 'black',
  connectionColor = 'black',
  blobColorPrimary = 'black',
  blobColorSecondary = 'rgba(0, 0, 0, 0.1)'
}: TechnicalBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Helper to resolve CSS variables for Canvas (Don't change this)
  const resolveColor = (colorStr: string) => {
    if (typeof window === 'undefined') return colorStr;
    if (colorStr.startsWith('var(')) {
      const varName = colorStr.replace('var(', '').replace(')', '').trim();
      return getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || '#64FFDA';
    }
    return colorStr;
  };

  const colors = useMemo(() => ({
    particle: resolveColor(particleColor),
    connection: resolveColor(connectionColor)
  }), [particleColor, connectionColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // --- TWEAK DENSITY HERE ---
    const particles: Particle[] = [];
    const particleCount = 100;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        const dx = springX.get() - this.x;
        const dy = springY.get() - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          this.x -= dx * 0.01;
          this.y -= dy * 0.01;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = colors.particle;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // --- TWEAK LINE WIDTH & STYLE HERE ---
      ctx.strokeStyle = colors.connection;
      ctx.lineWidth = 3;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [springX, springY, mouseX, mouseY, colors]);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, overflow: 'hidden' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      />
    </div>
  );
};
