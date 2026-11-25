import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const target = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
const source = new URL('./entry.png', import.meta.url);
mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);
