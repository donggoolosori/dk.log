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
} from "@constants/profile";
// icons
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { ImLocation } from "@react-icons/all-files/im/ImLocation";

const ProfileInfo = () => {
  return (
    <div className="p-6 flex flex-col h-1/2 justify-between">
      <section className="flex flex-col gap-2">
        <h1 className="text-3xl">{name}</h1>
        <h2 className="text-lg font-light">{desc}</h2>
      </section>

      <a href={`mailto:${email}`} className="flex items-center text-md gap-3">
        <AiOutlineMail className="text-2xl" />
        <p>{email}</p>
      </a>
      <a href={githubURL} className="flex items-center text-md gap-3">
        <AiFillGithub className="text-2xl" />
        <p>{githubUserName}</p>
      </a>
      <a href={instagramURL} className="flex items-center text-md gap-3">
        <AiOutlineInstagram className="text-2xl" />
        <p>{instagramUserName}</p>
      </a>
      <div className="flex items-center text-md gap-3">
        <ImLocation className="text-2xl" />
        <p>{location}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
