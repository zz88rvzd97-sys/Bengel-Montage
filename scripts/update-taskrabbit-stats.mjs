import { readFile, writeFile } from "node:fs/promises";

const profileUrl = "https://www.taskrabbit.de/profile/benjamin-brian-e--2?invitation_source=url";
const outputPath = new URL("../assets/taskrabbit-stats.json", import.meta.url);

const response = await fetch(profileUrl, {
  headers: {
    "accept-language": "de-DE,de;q=0.9",
    "user-agent": "BEngel-Montage-Website/1.0 (+https://www.bengel-montage.de/)"
  }
});

if (!response.ok) {
  throw new Error(`Taskrabbit returned HTTP ${response.status}`);
}

const html = await response.text();
const nextDataMatch = html.match(
  /<script[^>]+id=["']__NEXT_DATA__["'][^>]*>([\s\S]*?)<\/script>/i
);

if (!nextDataMatch) {
  throw new Error("Taskrabbit profile data was not found");
}

const nextData = JSON.parse(nextDataMatch[1]);
const profile = nextData?.props?.pageProps?.page?.bff;
const rating = Number(profile?.rating?.average);
const reviewMatch = String(profile?.rating?.totalReviews ?? "").match(/\d+/);
const reviewCount = Number(reviewMatch?.[0]);
const taskCount = Number(profile?.taskCount);

if (
  profile?.slug !== "benjamin-brian-e--2" ||
  !Number.isFinite(rating) ||
  rating < 0 ||
  rating > 5 ||
  !Number.isInteger(reviewCount) ||
  reviewCount < 0 ||
  !Number.isInteger(taskCount) ||
  taskCount < 0
) {
  throw new Error("Taskrabbit returned invalid profile statistics");
}

const current = JSON.parse(await readFile(outputPath, "utf8"));
const hasChanged =
  Number(current.rating) !== rating ||
  Number(current.reviewCount) !== reviewCount ||
  Number(current.taskCount) !== taskCount;
const now = new Date();
const lastChecked = Date.parse(current.checkedAt ?? current.updatedAt ?? "");
const keepaliveDue =
  !Number.isFinite(lastChecked) ||
  now.getTime() - lastChecked >= 30 * 24 * 60 * 60 * 1000;

if (!hasChanged && !keepaliveDue) {
  console.log("Taskrabbit statistics are unchanged.");
  process.exit(0);
}

const updated = {
  rating,
  reviewCount,
  taskCount,
  source: profileUrl,
  updatedAt: hasChanged ? now.toISOString() : current.updatedAt,
  checkedAt: now.toISOString()
};

await writeFile(outputPath, `${JSON.stringify(updated, null, 2)}\n`);
console.log(hasChanged
  ? "Taskrabbit statistics were updated."
  : "Taskrabbit statistics were checked."
);
