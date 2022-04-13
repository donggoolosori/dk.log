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
        <h1 className="text-3xl">{name}</h1>
        <h2 className="text-lg font-light">{desc}</h2>
      </section>

      <div className="flex items-center text-md gap-3">
        <MailOutlineIcon className="text-2xl" />
        <p>{email}</p>
      </div>
      <a href={githubURL} className="flex items-center text-md gap-3">
        <GitHubIcon className="text-2xl" />
        <p>{githubUserName}</p>
      </a>
      <a href={instagramURL} className="flex items-center text-md gap-3">
        <InstagramIcon className="text-2xl" />
        <p>{instagramUserName}</p>
      </a>
      <div className="flex items-center text-md gap-3">
        <LocationOnIcon className="text-2xl" />
        <p>{location}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
