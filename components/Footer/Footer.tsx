import { blogDesc, siteTitle } from '@constants/blog';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full flex justify-center mt-20 mb-10 text-slate-600 dark:text-white">
      <p>{`Copyright © 2022 • ${siteTitle} - ${blogDesc}`}</p>
    </div>
  );
};

export default Footer;
