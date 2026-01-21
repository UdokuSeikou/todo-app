import type { Todo } from './types/todo';

export const todos: Todo[] = [
	{
		id: '111',
		text: 'do it !',
		complete: false,
		deadline: new Date('2026-1-31'),
		createdAt: new Date('2025-12-1'),
		updatedAt: new Date('2025-12-1'),
	},
	{
		id: '2',
		text: 'just do it !',
		complete: false,
		deadline: new Date('2026-1-10'),
		createdAt: new Date('2025-12-1'),
		updatedAt: new Date('2025-12-1'),
	},
	{
		id: '3',
		text: "don't do it !",
		complete: true,
		deadline: new Date('2026-1-10'),
		createdAt: new Date('2025-12-1'),
		updatedAt: new Date('2025-12-1'),
	},
];
