import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'public/images/default');

export function getRandomDefaultImage() {
  const fileNames = fs.readdirSync(dir);
  const length = fileNames.length;

  return '/images/default/' + fileNames[Math.floor(Math.random() * length)];
}
