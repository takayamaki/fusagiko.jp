import { writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const AXES = ["engineering", "creative"] as const;
type Axis = (typeof AXES)[number];

const axis = process.argv[2] as Axis | undefined;

if (!axis || !AXES.includes(axis)) {
  console.error(`Usage: pnpm new-article <axis>`);
  console.error(`  axis: ${AXES.join(" | ")}`);
  process.exit(1);
}

const now = new Date();
const pad = (n: number) => String(n).padStart(2, "0");
const slug = [
  now.getFullYear(),
  pad(now.getMonth() + 1),
  pad(now.getDate()),
  pad(now.getHours()),
  pad(now.getMinutes()),
].join("");

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const filePath = join(root, "src", "content", axis, `${slug}.md`);

if (existsSync(filePath)) {
  console.error(`Already exists: ${filePath}`);
  process.exit(1);
}

const content = `---
title:
date: ${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}
description:
---

`;

writeFileSync(filePath, content, "utf-8");
console.log(`Created: ${filePath}`);
