import fs from 'fs';

async function main() {
  const url = 'https://gaksai.vercel.app/assets/index-D5V-iQRb.js';
  console.log('Fetching', url);
  const response = await fetch(url);
  const text = await response.text();
  fs.writeFileSync('index-D5V-iQRb.js', text);
  console.log('Successfully written minified file containing', text.length, 'characters.');
}

main().catch(console.error);
