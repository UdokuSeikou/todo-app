import '@testing-library/jest-dom';
import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';

import TodoList from './TodoList';
import { todos } from '../../../mock';

describe('TodoList コンポーネント', () => {
	describe('渡されたtodoの配列をリスト表示する', () => {
		test('todoの内容（text）が表示されること', () => {
			render(<TodoList todos={todos} />);

			// 各 todo の text が表示されることを確認
			expect(screen.getByText('do it !')).toBeInTheDocument();
			expect(screen.getByText('just do it !')).toBeInTheDocument();
		});

		test('todos が空の場合、何も表示されないこと', () => {
			render(<TodoList todos={[]} />);

			// todo の内容は存在しない
			expect(screen.queryByText('do it !')).not.toBeInTheDocument();
			expect(screen.queryByText('just do it !')).not.toBeInTheDocument();
		});
	});
});
