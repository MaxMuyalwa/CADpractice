import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 150
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x: number;
      y: number;
      baseSize: number;
      size: number;
      speedX: number;
      speedY: number;
      angle: number;
      velocity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseSize = Math.random() * 2 + 1; // Increased size
        this.size = this.baseSize;
        this.speedX = (Math.random() - 0.5) * 0.5; // Increased speed
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.angle = Math.random() * Math.PI * 2;
        this.velocity = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (mouse.x != null && mouse.y != null) {
          let dx = this.x - mouse.x;
          let dy = this.y - mouse.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = dx / distance;
            const directionY = dy / distance;
            
            this.x += directionX * force * 5; 
            this.y += directionY * force * 5;
          }
        }

        this.angle += this.velocity;
        this.size = this.baseSize + Math.abs(Math.sin(this.angle)) * 2;

        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        const opacity = Math.abs(Math.sin(this.angle)) * 0.5 + 0.5; // Increased opacity (0.5 to 1.0)
        // Using the CADpractice matrix green color: #00a651 -> rgb(0, 166, 81)
        ctx!.fillStyle = `rgba(0, 166, 81, ${opacity})`;
        
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = window.innerWidth < 768 ? 100 : 250; // Increased count
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      // Trail effect matching the theme background
      if (theme === 'dark') {
        ctx!.fillStyle = 'rgba(1, 24, 16, 0.1)'; // Matches #011810, more transparent trail
      } else {
        ctx!.fillStyle = 'rgba(229, 229, 229, 0.1)'; // Matches #E5E5E5, more transparent trail
      }
      ctx!.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};
