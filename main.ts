import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const entry = "Door alarm: 47 opens. Yogurt saw your 3 AM shame spiral. Ice maker kept receipts. Kale expires Tuesday.";

writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");