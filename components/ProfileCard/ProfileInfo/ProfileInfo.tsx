// constants
import {
  desc,
  email,
  githubURL,
  githubUserName,
  instagramURL,
  instagramUserName,
  location,
  name,
} from '@constants/profile';
// icons
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';

const ProfileInfo = () => {
  return (
    <div className="p-6 flex flex-col h-1/2 justify-between">
      <section className="flex flex-col gap-2">
        <h1 className="text-4xl">{name}</h1>
        <h2 className="text-xl font-light">{desc}</h2>
      </section>

      <div className="flex items-center text-lg gap-3">
        <MailOutlineIcon className="text-2xl" />
        <p className="translate-y-[1px]">{email}</p>
      </div>
      <a href={githubURL} className="flex items-center text-lg gap-3">
        <GitHubIcon className="text-2xl" />
        <p className="translate-y-[1px]">{githubUserName}</p>
      </a>
      <a href={instagramURL} className="flex items-center text-lg gap-3">
        <InstagramIcon className="text-2xl" />
        <p className="translate-y-[1px]">{instagramUserName}</p>
      </a>
      <div className="flex items-center text-lg gap-3">
        <LocationOnIcon className="text-2xl" />
        <p className="translate-y-[1px]">{location}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
