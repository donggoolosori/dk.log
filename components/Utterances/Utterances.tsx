"use client";

import { label, repo } from "@constants/utterances";
import { useEffect, useRef } from "react";

const Utterances = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const script = document.createElement("script");

    const config = {
      src: "https://utteranc.es/client.js",
      repo,
      label,
      "issue-term": "pathname",
      theme: "github-light",
      crossorigin: "anonymous",
      async: "true",
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    if (ref.current && ref.current.childElementCount === 0) {
      ref.current.appendChild(script);
    }
  }, []);

  return <section ref={ref} />;
};

export default Utterances;
