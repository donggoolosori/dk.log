import { profileImage } from '@constants/profile';
import Image from 'next/image';

const ProfileImage = () => {
  return (
    <div className="relative w-full h-1/2 shadow-md shadow-sky-200 dark:shadow-indigo-500">
      <Image
        src={profileImage}
        alt="profile-image"
        priority
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default ProfileImage;
