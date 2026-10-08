const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'C:\\Users\\RASHID AZAM\\.gemini\\antigravity-ide\\brain\\e4383fbb-567b-4734-bfe3-2e9fb7e18534\\.user_uploaded\\media_1791484576565.png';
const publicDir = path.join(__dirname, '..', 'public');
const brandingDir = path.join(publicDir, 'images', 'branding');

if (!fs.existsSync(brandingDir)) {
  fs.mkdirSync(brandingDir, { recursive: true });
}

async function processImages() {
  console.log('Processing full logo and brand emblem favicons...');

  // 1. Copy full brand logo to public/images/branding/logo.png and public/logo.png
  await sharp(inputPath)
    .png()
    .toFile(path.join(brandingDir, 'logo.png'));

  await sharp(inputPath)
    .png()
    .toFile(path.join(publicDir, 'logo.png'));

  // 2. Extract emblem icon (left side of logo) for favicons
  const metadata = await sharp(inputPath).metadata();
  const width = metadata.width || 1024;
  const height = metadata.height || 418;

  // Emblem is the left ~42% of the full logo image width
  const emblemWidth = Math.floor(width * 0.42);

  const croppedEmblem = sharp(inputPath).extract({
    left: 0,
    top: 0,
    width: emblemWidth,
    height: height,
  });

  // Create square 512x512 icon containing the emblem
  const squareIconBuffer = await croppedEmblem
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp(squareIconBuffer).resize(512, 512).toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  await sharp(squareIconBuffer).resize(192, 192).toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  await sharp(squareIconBuffer).resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(squareIconBuffer).resize(32, 32).toFile(path.join(publicDir, 'favicon-32x32.png'));
  await sharp(squareIconBuffer).resize(16, 16).toFile(path.join(publicDir, 'favicon-16x16.png'));
  await sharp(squareIconBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.png'));
  await sharp(squareIconBuffer).resize(32, 32).toFile(path.join(publicDir, 'favicon.ico'));

  // 3. Generate 1200x630 Open Graph card image with full logo centered on white background
  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([
      {
        input: await sharp(inputPath).resize(900, 360, { fit: 'contain' }).toBuffer(),
        gravity: 'center',
      },
    ])
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));

  // 4. Update site.webmanifest
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

  console.log('Full brand logo and brand emblem favicons generated successfully!');
}

processImages().catch((err) => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
