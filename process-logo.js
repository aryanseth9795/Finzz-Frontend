const Jimp = require("jimp");
const path = require("path");

async function processLogo() {
  try {
    const inputPath = path.join(__dirname, "public", "finzz-logo.png");
    const outputPath = path.join(
      __dirname,
      "public",
      "finzz-logo-transparent.png",
    );

    const image = await Jimp.read(inputPath);
    const width = image.bitmap.width;
    const height = image.bitmap.height;

    // Assume top-left pixel is background color
    const bgColor = image.getPixelColor(0, 0);
    const bgRgba = Jimp.intToRGBA(bgColor);

    // Color distance function
    function colorDistance(c1, c2) {
      return Math.sqrt(
        Math.pow(c1.r - c2.r, 2) +
          Math.pow(c1.g - c2.g, 2) +
          Math.pow(c1.b - c2.b, 2),
      );
    }

    // Threshold for background color matching
    const threshold = 30;

    image.scan(0, 0, width, height, function (x, y, idx) {
      const pColor = Jimp.intToRGBA(image.getPixelColor(x, y));
      if (colorDistance(pColor, bgRgba) < threshold) {
        this.bitmap.data[idx + 3] = 0; // Make transparent
      }
    });

    // Auto crop transparent edges
    image.autocrop();

    await image.writeAsync(outputPath);
    console.log("Successfully extracted text logo and removed background!");
  } catch (error) {
    console.error("Error processing logo:", error);
  }
}

processLogo();
