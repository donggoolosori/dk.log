import { profileImage } from '@constants/profile';
import Image from 'next/image';
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
        className="w-100 h-[580px] rounded-3xl shadow-lg shadow-sky-600 overflow-hidden"
      >
        <div className="relative w-full h-1/2 shadow-md shadow-sky-300">
          <Image
            src={profileImage}
            alt="profile-image"
            priority
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <h1>Dongjune Kim</h1>
          <div>
            <p>email</p>
          </div>
          <h3>github</h3>
          <h3>location</h3>
        </div>
      </section>
    </div>
  );
};

export default ProfileCard;
