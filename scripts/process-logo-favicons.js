const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'C:\\Users\\RASHID AZAM\\.gemini\\antigravity-ide\\brain\\e4383fbb-567b-4734-bfe3-2e9fb7e18534\\.user_uploaded\\media_1791462435670.png';
const publicDir = path.join(__dirname, '..', 'public');
const brandingDir = path.join(publicDir, 'images', 'branding');

if (!fs.existsSync(brandingDir)) {
  fs.mkdirSync(brandingDir, { recursive: true });
}

async function processImages() {
  console.log('Processing logo and favicons...');

  // 1. Copy full brand logo to public/images/branding/logo.png
  await sharp(inputPath)
    .resize({ width: 800 })
    .png()
    .toFile(path.join(brandingDir, 'logo.png'));

  // Create clean logo with transparent or white background for light theme header
  await sharp(inputPath)
    .resize({ width: 600 })
    .png()
    .toFile(path.join(publicDir, 'logo.png'));

  // 2. Crop top icon part (monogram emblem) for favicons
  // The input image is 512x512 approx; the icon occupies the top ~60%
  const metadata = await sharp(inputPath).metadata();
  const iconHeight = Math.floor((metadata.height || 512) * 0.65);
  const iconWidth = metadata.width || 512;

  const croppedEmblem = sharp(inputPath).extract({
    left: 0,
    top: 0,
    width: iconWidth,
    height: iconHeight,
  });

  // Save 512x512 square icon with padding
  const squareIconBuffer = await croppedEmblem
    .resize(512, 512, { fit: 'contain', background: { r: 15, g: 16, b: 18, alpha: 1 } })
    .png()
    .toBuffer();

  await sharp(squareIconBuffer).resize(512, 512).toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  await sharp(squareIconBuffer).resize(192, 192).toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  await sharp(squareIconBuffer).resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(squareIconBuffer).resize(32, 32).toFile(path.join(publicDir, 'favicon-32x32.png'));
  await sharp(squareIconBuffer).resize(16, 16).toFile(path.join(publicDir, 'favicon-16x16.png'));
  await sharp(squareIconBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.png'));
  await sharp(squareIconBuffer).resize(32, 32).toFile(path.join(publicDir, 'favicon.ico'));

  // Generate 1200x630 Open Graph card image
  const ogBackground = { r: 255, g: 255, b: 255, alpha: 1 };
  await sharp(inputPath)
    .resize(800, 400, { fit: 'contain', background: { r: 15, g: 16, b: 18, alpha: 1 } })
    .extend({
      top: 115,
      bottom: 115,
      left: 200,
      right: 200,
      background: ogBackground,
    })
    .resize(1200, 630)
    .toFile(path.join(publicDir, 'og-image.png'));

  // 3. Create site.webmanifest
  const webmanifest = {
    name: "Rashid Azam - Web Developer & Technical SEO Expert",
    short_name: "Rashid Azam",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone"
  };

  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(webmanifest, null, 2));

  console.log('All logo, favicons, OG image, and site.webmanifest generated successfully!');
}

processImages().catch((err) => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
