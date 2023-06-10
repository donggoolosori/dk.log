import { siteName } from "@constants/siteMetaData";
import { email, githubURL, instagramURL } from "@constants/profile";

import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";

const Footer = () => {
  return (
    <div className="flex flex-col mt-20 mb-10 gap-4">
      <div className="flex justify-center gap-4">
        <a href={githubURL} aria-label="github link">
          <AiFillGithub />
        </a>
        <a href={`mailto:${email}`} aria-label="email link">
          <AiOutlineMail />
        </a>
        <a href={instagramURL} aria-label="instagram link">
          <AiOutlineInstagram />
        </a>
      </div>
      <div className="w-full flex justify-center">
        <p>{`Copyright © ${new Date().getFullYear()} • ${siteName}`}</p>
      </div>
    </div>
  );
};

export default Footer;
