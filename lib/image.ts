import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public/images/default");

export function getRandomDefaultImage(id: string) {
  const fileNames = fs.readdirSync(dir);
  const length = fileNames.length;

  const randomIndex = getHash(id) % length;

  return "/images/default/" + fileNames[randomIndex];
}

function getHash(str: string) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash += str[i].charCodeAt(0);
  }

  return hash;
}
