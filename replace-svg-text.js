const fs = require("fs");
const path = require("path");

const mockupsDir = path.join(__dirname, "app", "components", "mockups");
const files = ["HomeAppSvg.tsx", "PoolAppSvg.tsx", "ChatAppSvg.tsx"];

// Define replacements
const replacements = [
  // Dollar amounts to Rupees
  { search: /\$45\.00/g, replace: "₹3,500" },
  { search: /\$120\.00/g, replace: "₹8,500" },
  { search: /\$8\.50/g, replace: "₹650" },
  { search: /\$350\.00/g, replace: "₹25,000" },

  // Pool amounts
  { search: /\$1,240\.00/g, replace: "₹90,000" },
  { search: /\$400\.00/g, replace: "₹35,000" },
  { search: /\$20\.00/g, replace: "₹5,000" },
  { search: /\$840\.00/g, replace: "₹55,000" },
  { search: /\$460\.00/g, replace: "₹25,000" },
  { search: /\$0\.00/g, replace: "₹0" },
  { search: /\$380\.00/g, replace: "₹30,000" },

  // Names & Initials
  // David Smith -> Rahul Sharma
  { search: />\s*D\s*</g, replace: ">R<" },
  { search: /David Smith/g, replace: "Rahul Sharma" },
  { search: /David S\./g, replace: "Rahul S." },

  // Paris Trip -> Goa Trip
  { search: />\s*P\s*</g, replace: ">G<" }, // Only for Paris Trip initial in Home
  { search: /Paris Trip Pool/g, replace: "Goa Trip Pool" },
  { search: /Paris Trip/g, replace: "Goa Trip" },

  // Emma Johnson -> Priya Patel
  { search: />\s*E\s*</g, replace: ">P<" },
  { search: /Emma Johnson/g, replace: "Priya Patel" },
  { search: /Emma J\./g, replace: "Priya P." },
];

files.forEach((file) => {
  const filePath = path.join(mockupsDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, "utf8");

    // Apply replacements
    replacements.forEach(({ search, replace }) => {
      content = content.replace(search, replace);
    });

    // Special case: The Paris Trip 'P' to 'G' might have collided with Priya's 'P'.
    // In HomeAppSvg, item 2 is the pool (now Goa), item 3 is Priya.
    // They both had initials 'P' before but we just replaced 'P' with 'G' and 'E' with 'P'. This works!

    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Updated ${file}`);
  }
});
