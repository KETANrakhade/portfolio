import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const TRAIL_LENGTH = 18;

const CustomCursor = () => {
  const trailRefs = useRef([]);

  useEffect(() => {
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    const trails = document.querySelectorAll('.cursor-trail');

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    const positions = Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }));

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';

      const target = e.target;
      const isPointer =
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON';

      dot.classList.toggle('pointer', isPointer);
      outline.classList.toggle('pointer', isPointer);
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.12;
      outlineY += (mouseY - outlineY) * 0.12;
      outline.style.left = outlineX + 'px';
      outline.style.top = outlineY + 'px';

      // shift trail positions
      for (let i = positions.length - 1; i > 0; i--) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.35;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.35;
      }
      positions[0].x += (mouseX - positions[0].x) * 0.35;
      positions[0].y += (mouseY - positions[0].y) * 0.35;

      trails.forEach((el, i) => {
        el.style.left = positions[i].x + 'px';
        el.style.top = positions[i].y + 'px';
        el.style.opacity = ((TRAIL_LENGTH - i) / TRAIL_LENGTH) * 0.6;
        const size = 6 - (i / TRAIL_LENGTH) * 5;
        el.style.width = size + 'px';
        el.style.height = size + 'px';
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    const rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-outline" />
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div key={i} className="cursor-trail" />
      ))}
    </>
  );
};

export default CustomCursor;
