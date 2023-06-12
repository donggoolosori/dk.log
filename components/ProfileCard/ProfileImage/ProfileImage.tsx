import { profileImage } from "@constants/profile";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="relative w-full h-1/2 shadow-md shadow-primary">
      <Image
        src={profileImage}
        alt="profile-image"
        priority
        sizes="100%"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default ProfileImage;
