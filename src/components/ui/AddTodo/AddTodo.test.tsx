import '@testing-library/jest-dom';
import { expect, test, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddTodo from './AddTodo';

const mockTextInput = '新しいTodoを入力';

describe('AddTodo コンポーネント', () => {
	describe('textの内容をtodo配列に追加する', () => {
		test('textの内容を親コンポーネントに渡す', async () => {
			const mockSendText = vi.fn();
			const user = userEvent.setup();
			render(<AddTodo sendText={mockSendText} />);

			// 入力フィールドにテキストを入力
			const input = screen.getByPlaceholderText('新しいTodoを入力');
			await user.type(input, mockTextInput);

			// Addボタンをクリック
			const addButton = screen.getByRole('button');
			await user.click(addButton);

			// sendTextが正しい引数で呼ばれたことを確認
			expect(mockSendText).toHaveBeenCalledWith(mockTextInput);
		});

		test('Addボタンをクリックしたら、sendTextが呼ばれる', async () => {
			const mockSendText = vi.fn();
			const user = userEvent.setup();
			render(<AddTodo sendText={mockSendText} />);

			// 入力フィールドにテキストを入力
			const input = screen.getByPlaceholderText('新しいTodoを入力');
			await user.type(input, mockTextInput);

			// Addボタンをクリック
			const addButton = screen.getByRole('button', { name: 'Add' });
			await user.click(addButton);

			// sendTextが呼ばれたことを確認
			expect(mockSendText).toHaveBeenCalledWith(mockTextInput);
		});

		test('sendTextが呼ばれた後、textInputの中身はリセットされる', async () => {
			const mockSendText = vi.fn();
			const user = userEvent.setup();
			render(<AddTodo sendText={mockSendText} />);

			// 入力フィールドにテキストを入力
			const input = screen.getByPlaceholderText('新しいTodoを入力');
			await user.type(input, 'リセットテスト');

			// Addボタンをクリック
			const addButton = screen.getByRole('button', { name: 'Add' });
			await user.click(addButton);

			// 入力フィールドが空になっていることを確認
			expect(input).toHaveValue('');
		});

		test('text が空のとき、Addボタンが非活性状態になる', () => {
			const mockSendText = vi.fn();
			render(<AddTodo sendText={mockSendText} />);

			// Addボタンが非活性であることを確認
			const addButton = screen.getByRole('button', { name: 'Add' });
			expect(addButton).toBeDisabled();
		});

		test('text にスペースのみのとき、Addボタンが非活性状態になる', async () => {
			const mockSendText = vi.fn();
			const user = userEvent.setup();
			render(<AddTodo sendText={mockSendText} />);

			// スペースのみを入力
			const input = screen.getByPlaceholderText('新しいTodoを入力');
			await user.type(input, '   ');

			// Addボタンが非活性であることを確認
			const addButton = screen.getByRole('button', { name: 'Add' });
			expect(addButton).toBeDisabled();
		});
	});
});
