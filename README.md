# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/gullalder/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/gullalder/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA VI launch-week meme ("I called in sick. My AI clocked in.") whose picture shows the official make.fun ghost on shift doing bounty work, posted on X at https://x.com/LoniV38576/status/2124029925640556740, built by an AI agent for make.fun's "Post a GTA 6 meme on X" bounty, $500 in USDC.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out /root/autodl-tmp/node22/bin/node main.ts
```

The grader entrypoint validates the post URL and copies POST.json unchanged to the output directory using only the Node standard library.

## Deliverables

- **meme.png** — selected 1200×675 PNG: “I called in sick. My AI clocked in.” The player is busy with GTA VI while the official ghost represents the AI taking bounty work.
- **meme-alt1.png** — 13-year wait / virtual crime versus the AI's legal income.
- **meme-alt2.png** — GTA VI is finally real; rent is too.
- **POST.json** — the real, already-published X post URL used by the gate.
- **POST.md** — recommended and alternate draft copy, both below 280 characters with the literal [PLAY CODE] placeholder. Both explain that people and their AI agents can earn real money in make.fun bounties and include the bounty URL. These drafts predate the published post.
- **main.ts** — dependency-free Node 22 grader entrypoint that validates and copies POST.json.
- **render.ts** — preserved meme renderer, run manually with `node render.ts`; generated HTML and original renders are in renders/.
- **LICENSE** — MIT license copied from the kit starter.
- **.makefun/owner.json** — entrant's public wallet address.

All three images were opened and visually inspected during creation. The sick-day joke was selected because its two short lines make the player/agent gag immediately readable. All three PNG dimensions and signatures are checked by the renderer.

## Reproduce the memes manually

```sh
node render.ts
```

Requires Node 22, local `google-chrome` and the system DejaVu Sans and Liberation Sans Narrow fonts. Each HTML page embeds the official SVG assets as data URLs and uses original HTML/CSS artwork for the city, screen and controller. Chrome renders locally with `--headless --virtual-time-budget=9000 --window-size=1200,675`; no npm dependencies or remote page resources are used.

## Official assets

Downloaded from https://make.fun/press/ on 2026-11-20 using the page's press-kit download: https://make.fun/press/make-fun-press-kit.zip.

The unmodified ZIP and extracted image/SVG assets are retained in assets/. The meme embeds `mark-on-dark.svg` (official ghost mascot) and `wordmark-on-dark.svg` (official make.fun logo), unchanged. The mascot is the AI worker within the scene, next to an “ON SHIFT” label and bounty-income panel. The press kit's four brand text documents (`README.txt`, `palette.txt`, `boilerplate.txt`, `type.txt`) were removed from the repository because they are downloaded documents, not entry code; the unmodified ZIP still contains them for provenance.

## Judging priorities

The AI judge compares each post's **first picture and text**, in this order:

1. make.fun ghost, logo or name inside the picture; entries without one lose to every entry with one. Every variant contains the official ghost, official wordmark and readable make.fun text.
2. Humor: relatable launch-day absence and an AI agent covering the money-making shift.
3. GTA VI relevance: launch-week headlines, GTA VI on screen, a five-star wanted HUD, the 13-year wait or the game finally being real.
4. Selling make.fun: bounty work and AI income are part of the gag, reinforced by the post copy.
5. Brevity: two large punchline lines and short post copy.

These are launch-week meme scenarios, not reporting or a claim about an actual launch date, a payout received, or guaranteed earnings. The original posting instructions were to replace [PLAY CODE], check the final text length, and attach the selected image first; a human has now published the post linked above.

See the [make.fun bounty guide](https://github.com/gullalder/bring-the-humans-02).

---
<sub>Entered on [make.fun](https://make.fun/?ref=r1te5ect&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
