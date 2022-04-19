import { MouseEvent, TouchEvent, useCallback, useRef } from 'react';

const use3dCard = () => {
  const cardWrapper = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLElement>(null);

  const onMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!cardWrapper.current) return;

    const rect = cardWrapper.current.getBoundingClientRect();

    const xAxis = rect.left + rect.width / 2;
    const yAxis = rect.top + rect.height / 2;

    let rotateY, rotateX;

    if (e.type === 'mousemove') {
      rotateY = ((e as MouseEvent).clientX - xAxis) / 20;
      rotateX = (yAxis - (e as MouseEvent).clientY) / 20;
    } else if (e.type === 'touchmove') {
      rotateY = ((e as TouchEvent).touches[0].clientX - xAxis) / 20;
      rotateX = (yAxis - (e as TouchEvent).touches[0].clientY) / 20;
    }

    if (card.current) {
      card.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }
  }, []);

  const onLeave = useCallback(() => {
    if (card.current) {
      card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
      card.current.style.transition = 'transform 1s ease';
    }
  }, []);

  const onEnter = useCallback(() => {
    if (card.current) {
      card.current.style.transition = 'transform 0.1s ease';
    }
  }, []);

  return { card, cardWrapper, onEnter, onLeave, onMove };
};

export default use3dCard;
