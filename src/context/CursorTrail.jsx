import React, { useEffect, useRef, useState } from 'react';

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const circleRefs = useRef([]);
  const timeoutRef = useRef(null);
  
  // Generate color gradient from your colors
  const colors = Array(20).fill().map((_, i) => {
    if (i < 5) return "#0D1B2A";  // RichBlack
    if (i < 10) return "#415A77"; // SteelBlue
    if (i < 15) return "#778DA9"; // IceBlue
    return "#F0F4F8";             // OffWhite
  });

  // Initialize circle positions
  useEffect(() => {
    circleRefs.current = circleRefs.current.slice(0, 20);
    
    circleRefs.current.forEach(circle => {
      if (circle) {
        circle.x = 0;
        circle.y = 0;
      }
    });

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Reset the timeout on each mouse move
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 200); // Adjust this value to change how quickly the trail fades after stopping
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const animateCircles = () => {
      let x = mousePosition.x;
      let y = mousePosition.y;

      circleRefs.current.forEach((circle, index) => {
        if (circle) {
          // Smoother movement with easing
          const ease = 0.2 - (index * 0.01); // Progressive easing for smoother trail
          
          circle.style.left = `${x - 12}px`;
          circle.style.top = `${y - 12}px`;
          circle.style.transform = `scale(${(circleRefs.current.length - index) / circleRefs.current.length})`;
          circle.style.opacity = isMoving ? 1 - (index * 0.05) : 0;
          circle.style.transition = `opacity 0.3s ease-out, transform 0.1s ease-out`;
          
          circle.x = x;
          circle.y = y;

          const nextCircle = circleRefs.current[index + 1] || circleRefs.current[0];
          if (nextCircle) {
            x += (nextCircle.x - x) * ease;
            y += (nextCircle.y - y) * ease;
          }
        }
      });

      requestAnimationFrame(animateCircles);
    };

    const animationId = requestAnimationFrame(animateCircles);
    return () => cancelAnimationFrame(animationId);
  }, [mousePosition, isMoving]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {colors.map((color, index) => (
        <div
          key={index}
          ref={el => circleRefs.current[index] = el}
          className="fixed w-6 h-6 rounded-full"
          style={{
            backgroundColor: color,
            top: 0,
            left: 0,
            zIndex: 30, // Maximum possible z-index
            filter: 'blur(1px)', // Slight blur for smoother appearance
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;