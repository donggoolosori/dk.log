import { label, repo } from '@constants/utterances';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

const Comment = () => {
  const commentRef = useRef<HTMLElement>(null);

  const route = useRouter().asPath;

  useEffect(() => {
    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://utteranc.es/client.js';
    scriptElem.async = true;
    scriptElem.setAttribute('repo', `${repo}`);
    scriptElem.setAttribute('issue-term', 'url');
    scriptElem.setAttribute('theme', 'photon-dark');
    scriptElem.setAttribute('label', `${label}`);
    scriptElem.crossOrigin = 'anonymous';

    commentRef.current?.appendChild(scriptElem);
  }, [route]);

  return <section ref={commentRef} />;
};

export default Comment;
