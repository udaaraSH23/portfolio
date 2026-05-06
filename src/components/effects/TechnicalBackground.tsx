'use client';

import React, { useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';

export const TechnicalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth out mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 60;

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
        
        // React to mouse spring
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
        ctx.fillStyle = 'rgba(100, 255, 218, 0.3)';
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
      
      // Draw connections
      ctx.strokeStyle = 'rgba(100, 255, 218, 0.05)';
      ctx.lineWidth = 1;
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
  }, [springX, springY, mouseX, mouseY]);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }}>
      {/* Aurora Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(13, 148, 136, 0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      
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
