import { siteName } from "@constants/siteMetaData";
import { email, githubURL, instagramURL } from "@constants/profile";

import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="flex flex-col mt-20 mb-10 text-slate-600 dark:text-white gap-4">
      <div className="flex justify-center gap-4">
        <a href={githubURL} aria-label="github link">
          <GitHubIcon />
        </a>
        <a href={`mailto:${email}`} aria-label="email link">
          <EmailIcon />
        </a>
        <a href={instagramURL} aria-label="instagram link">
          <InstagramIcon />
        </a>
      </div>
      <div className="w-full flex justify-center">
        <p>{`Copyright © ${new Date().getFullYear()} • ${siteName}`}</p>
      </div>
    </div>
  );
};

export default Footer;
