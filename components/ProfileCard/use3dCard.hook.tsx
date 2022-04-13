import { useCallback, useRef } from 'react';

const use3dCard = () => {
  const cardWrapper = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardWrapper.current) return;

    const rect = cardWrapper.current.getBoundingClientRect();

    const xAxis = rect.left + rect.width / 2;
    const yAxis = rect.top + rect.height / 2;

    const rotateY = (e.clientX - xAxis) / 20;
    const rotateX = (yAxis - e.clientY) / 20;

    if (card.current) {
      card.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }
  }, []);

  const onMouseLeave = useCallback(() => {
    if (card.current) {
      card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
      card.current.style.transition = 'all 1s ease';
    }
  }, []);

  const onMouseEnter = useCallback(() => {
    if (card.current) {
      card.current.style.transition = 'all 0.1s ease';
    }
  }, []);

  return { card, cardWrapper, onMouseEnter, onMouseLeave, onMouseMove };
};

export default use3dCard;
