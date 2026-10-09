const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateFavicons() {
  const inputLogo = path.join(__dirname, '../public/images/branding/logo.png');
  const publicDir = path.join(__dirname, '../public');

  if (!fs.existsSync(inputLogo)) {
    console.error('Logo file missing:', inputLogo);
    process.exit(1);
  }

  // Create a square icon mark by taking the icon portion (left part) of logo or fitting logo transparently in a square
  // The logo has a mark on the left and text on the right. Let's extract the mark or contain logo safely.
  const metadata = await sharp(inputLogo).metadata();
  console.log(`Original logo metadata: ${metadata.width}x${metadata.height}, format: ${metadata.format}`);

  // Create square canvas with transparent background
  const size = Math.max(metadata.width, metadata.height);

  // Extract icon mark from left portion or fit logo
  // For standard favicons, fitting the logo inside square or extracting the mark:
  const squareLogo = await sharp(inputLogo)
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();

  // Generate 512x512
  await sharp(squareLogo).resize(512, 512).toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  console.log('Generated android-chrome-512x512.png');

  // Generate 192x192
  await sharp(squareLogo).resize(192, 192).toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  console.log('Generated android-chrome-192x192.png');

  // Generate 180x180 (Apple Touch Icon)
  await sharp(squareLogo).resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png');

  // Generate 32x32
  await sharp(squareLogo).resize(32, 32).toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('Generated favicon-32x32.png');

  // Generate 16x16
  await sharp(squareLogo).resize(16, 16).toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('Generated favicon-16x16.png');

  // Generate favicon.ico (32x32 PNG saved as favicon.ico)
  await sharp(squareLogo).resize(32, 32).toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Generated favicon.ico');

  // Create webmanifest
  const manifest = {
    name: 'Rashid Azam | Web Developer & Technical SEO Specialist',
    short_name: 'Rashid Azam',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#d97706',
    background_color: '#ffffff',
    display: 'standalone',
  };

  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('Generated site.webmanifest');
}

generateFavicons().catch(err => {
  console.error(err);
  process.exit(1);
});
