import fs from "fs";
import path from "path";

import { heroIconSlugs } from "../src/data/hero";
// const heroIconSlugs = [""];

const iconsDir = path.join(process.cwd(), "public", "icons");

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
  console.log("✓ Created public/icons directory");
}

const downloadIcon = async (iconSlug: string): Promise<void> => {
  const url = `https://cdn.simpleicons.org/${iconSlug}`;
  const filePath = path.join(iconsDir, `${iconSlug}.svg`);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to download ${iconSlug}: ${response.status}`);
  }

  const svgContent = await response.text();
  fs.writeFileSync(filePath, svgContent);
  console.log(`✓ Downloaded: ${iconSlug}.svg`);
};

const downloadAllIcons = async (): Promise<void> => {
  console.log(`Starting download of ${heroIconSlugs.length} icons...\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const iconSlug of heroIconSlugs) {
    try {
      await downloadIcon(iconSlug);
      successCount++;
      await new Promise((resolve) => setTimeout(resolve, 100));
    } catch (error) {
      console.error(
        `✗ Error downloading ${iconSlug}:`,
        (error as Error).message
      );
      errorCount++;
    }
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`Download complete!`);
  console.log(`Success: ${successCount}`);
  console.log(`Failed: ${errorCount}`);
  console.log(`Total: ${heroIconSlugs.length}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
};

downloadAllIcons().catch(console.error);
