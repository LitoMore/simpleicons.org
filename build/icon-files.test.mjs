import assert from 'node:assert/strict';
import {readFileSync, readdirSync} from 'node:fs';
import path from 'node:path';
import test from 'node:test';

test('the build publishes each original SVG at its legacy URL', () => {
	const source = 'node_modules/simple-icons/icons';
	const output = 'dist/icons';
	const filenames = readdirSync(source).filter((name) => name.endsWith('.svg'));
	assert.deepEqual(new Set(readdirSync(output)), new Set(filenames));
	const changed = filenames.filter((filename) => {
		const original = readFileSync(path.join(source, filename));
		return !original.equals(readFileSync(path.join(output, filename)));
	});
	assert.deepEqual(changed, []);
});
