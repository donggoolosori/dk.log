import { label, repo } from "@constants/utterances";

const Utterances = () => {
  return (
    <section
      ref={(element) => {
        if (!element) return;

        const script = document.createElement("script");

        script.setAttribute("src", "https://utteranc.es/client.js");
        script.setAttribute("async", "true");
        script.setAttribute("repo", `${repo}`);
        script.setAttribute("issue-term", "pathname");
        script.setAttribute("theme", "github-light");
        script.setAttribute("label", `${label}`);
        script.setAttribute("crossorigin", "anonymous");

        element.replaceChildren(script);
      }}
    />
  );
};

export default Utterances;
