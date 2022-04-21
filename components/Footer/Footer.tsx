import { blogDesc, siteTitle } from '@constants/blog';
import { email, githubURL, instagramURL } from '@constants/profile';

import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="flex flex-col mt-20 mb-10 text-slate-600 dark:text-white gap-4">
      <div className="flex justify-center gap-4">
        <a href={githubURL}>
          <GitHubIcon />
        </a>
        <a href={`mailto:${email}`}>
          <EmailIcon />
        </a>
        <a href={instagramURL}>
          <InstagramIcon />
        </a>
      </div>
      <div className="w-full flex justify-center">
        <p>{`Copyright © 2022 • ${siteTitle} - ${blogDesc}`}</p>
      </div>
    </div>
  );
};

export default Footer;
