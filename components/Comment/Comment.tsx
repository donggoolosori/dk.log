import { label, repo } from '@constants/utterances';
import { useEffect, useRef } from 'react';

interface Props {
  id: string;
}

const Comment = ({ id }: Props) => {
  const commentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://utteranc.es/client.js';
    scriptElem.async = true;
    scriptElem.setAttribute('repo', `${repo}`);
    scriptElem.setAttribute('issue-term', 'pathname');
    scriptElem.setAttribute('theme', 'photon-dark');
    scriptElem.setAttribute('label', `${label}`);
    scriptElem.crossOrigin = 'anonymous';

    const commentContainer = commentRef.current;

    commentContainer?.appendChild(scriptElem);

    return () => {
      if (commentContainer) commentContainer.innerHTML = '';
    };
  }, [id]);

  return <section ref={commentRef} />;
};

export default Comment;
