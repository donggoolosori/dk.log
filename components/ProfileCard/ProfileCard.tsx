import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';
import use3dCard from './use3dCard.hook';

const ProfileCard = () => {
  const { card, cardWrapper, onMouseEnter, onMouseLeave, onMouseMove } =
    use3dCard();

  return (
    <div
      ref={cardWrapper}
      className="max-w-[640px] h-[620px] mb-20 mx-auto flex items-center justify-center"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      style={{ perspective: '1000px' }}
    >
      <section
        ref={card}
        className="w-100 h-[580px] rounded-2xl shadow-lg shadow-sky-300 overflow-hidden flex flex-col justify-between transition-colors"
      >
        <ProfileImage />
        <ProfileInfo />
        <div className="bg-gradient-to-r from-sky-300 via-purple-500 to-indigo-500 w-full h-[6px]" />
      </section>
    </div>
  );
};

export default ProfileCard;
