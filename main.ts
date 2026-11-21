import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

try {
  const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? '/bot');
  const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
  const bytes = readFileSync(resolve(botDir, 'POST.json'));
  const post: unknown = JSON.parse(bytes.toString('utf8'));
  const postUrl = /^https:\/\/(?:www\.|mobile\.)?(?:x\.com|twitter\.com)\/(?:[^/?#]+\/status|i\/web\/status)\/\d+(?:[?#].*)?$/;
  if (
    post === null || typeof post !== 'object' || Array.isArray(post) ||
    !('url' in post) || typeof post.url !== 'string' || !postUrl.test(post.url)
  ) {
    throw new Error('POST.json must be an object with a valid X post url');
  }
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(resolve(outputDir, 'POST.json'), bytes);
  console.log('Copied POST.json');
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
