import React, { useCallback, useRef } from 'react';

const ProfileCard = () => {
  const cardWrapper = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardWrapper.current) return;

    const rect = cardWrapper.current.getBoundingClientRect();

    const xAxis = rect.left + rect.width / 2;
    const yAxis = rect.top + rect.height / 2;

    const rotateY = (xAxis - e.clientX) / 10;
    const rotateX = (yAxis - e.clientY) / 10;

    if (card.current) {
      card.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      card.current.style.transition = 'all 0.1s ease';
    }
  }, []);

  const onMouseLeave = useCallback(() => {
    if (card.current) {
      card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
      card.current.style.transition = 'all 1s ease';
    }
  }, []);

  return (
    <div
      ref={cardWrapper}
      className="max-w-[440px] h-[620px] mb-20 mx-auto flex items-center justify-center"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <section
        ref={card}
        className="w-100 h-[580px] bg-slate-400 rounded-3xl"
      ></section>
    </div>
  );
};

export default ProfileCard;
