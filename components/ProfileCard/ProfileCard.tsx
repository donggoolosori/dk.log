import { astronautImage } from "@constants/profile";
import Image from "next/image";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import use3dCard from "./use3dCard.hook";

const ProfileCard = () => {
  const { card, cardWrapper, onEnter, onLeave, onMove } = use3dCard();

  return (
    <div
      ref={cardWrapper}
      className="max-w-[640px] h-[620px] mb-20 mx-auto flex items-center justify-center"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
      onTouchMove={onMove}
      onTouchEnd={onLeave}
      onTouchStart={onEnter}
      style={{ perspective: "1000px" }}>
      <div className=" absolute right-0 bottom-0">
        <Image src={astronautImage} alt="astronaut" width={170} height={160} />
      </div>
      <section
        ref={card}
        className="w-100 h-[580px] rounded-2xl shadow-lg shadow-sky-300 dark:shadow-indigo-600 overflow-hidden flex flex-col justify-between">
        <ProfileImage />
        <ProfileInfo />
        <div className="bg-gradient-to-r from-sky-300 via-purple-500 to-indigo-500 w-full h-[6px]" />
      </section>
    </div>
  );
};

export default ProfileCard;
