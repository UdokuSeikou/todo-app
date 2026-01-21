import '@testing-library/jest-dom';
import { expect, test, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TodoList from './TodoList';
import { todos } from '../../../mock';

describe('TodoList コンポーネント', () => {
	describe('渡されたtodoの配列をリスト表示する', () => {
		test('todoの内容（text）が表示されること', () => {
			const mockOnToggleComplete = vi.fn();
			render(
				<TodoList
					todos={todos}
					onToggleComplete={mockOnToggleComplete}
				/>,
			);

			// 各 todo の text が表示されることを確認
			expect(screen.getByText('do it !')).toBeInTheDocument();
			expect(screen.getByText('just do it !')).toBeInTheDocument();
		});

		test('todos が空の場合、何も表示されないこと', () => {
			const mockOnToggleComplete = vi.fn();
			render(
				<TodoList
					todos={[]}
					onToggleComplete={mockOnToggleComplete}
				/>,
			);

			// todo の内容は存在しない
			expect(screen.queryByText('do it !')).not.toBeInTheDocument();
			expect(screen.queryByText('just do it !')).not.toBeInTheDocument();
		});

		test('checkboxをクリックしたら、onToggleCompleteが呼ばれること', async () => {
			const mockOnToggleComplete = vi.fn();
			const user = userEvent.setup();
			render(
				<TodoList
					todos={todos}
					onToggleComplete={mockOnToggleComplete}
				/>,
			);

			// 最初のtodoのcheckboxをクリック
			const checkbox = screen.getAllByRole('checkbox')[0];
			await user.click(checkbox);

			// onToggleCompleteが呼ばれたことを確認
			expect(mockOnToggleComplete).toHaveBeenCalledWith(todos[0].id);
		});
	});
});
