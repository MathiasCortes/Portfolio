import React, { useEffect, useRef } from 'react';

const NodeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Ensure canvas is visible
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.display = 'block';
    canvas.style.visibility = 'visible';
    
    // Debugging
    console.log('Canvas initialized with dimensions:', canvas.width, 'x', canvas.height);

    // Configuration
    const nodeCount = 80;
    const connectionDistance = 200;
    const nodeSpeed = 0.2;
    const nodes = [];

    // Create gradient
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#06b6d4'); // cyan-500
      gradient.addColorStop(0.5, '#0891b2'); // cyan-600
      gradient.addColorStop(1, '#164e63'); // cyan-900
      return gradient;
    };

    // Node class
    class Node {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * nodeSpeed;
        this.vy = (Math.random() - 0.5) * nodeSpeed;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        // Move nodes
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = createGradient();
        ctx.fill();
      }
    }

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node());
    }

    // Connect nodes that are close to each other
    const connectNodes = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = createGradient();
            ctx.globalAlpha = 1 - distance / connectionDistance;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Fill background with gradient
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, '#0f172a');
      bgGradient.addColorStop(1, '#000000');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      // Connect nodes
      connectNodes();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(to bottom, #0f172a, #000000)',
        display: 'block',
        visibility: 'visible'
      }}
    />
  );
};

export default NodeBackground;
