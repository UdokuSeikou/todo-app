import { expect, test, describe } from 'vitest';
import { sum } from './test';

describe('testが自動化できているのか検証する', () => {
	test('渡した引数の和が返ってくる', () => {
		expect(sum(1, 2)).toBe(3);
	});
});
