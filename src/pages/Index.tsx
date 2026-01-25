import { useState } from 'react';

import TodoList from '../components/ui/TodoList/TodoList';
import AddTodo from '../components/ui/AddTodo/AddTodo';

import { todos } from '../mock';
import type { Todo } from '../types/todo';

export default function Index() {
	const [todoList, setTodoList] = useState(todos);

	// チェックボックスのクリックによって、完了状態をトグルで切り替える
	const onToggleComplete = (id: Todo['id']) => {
		setTodoList(
			todoList.map((todo) =>
				todo.id === id ? { ...todo, complete: !todo.complete } : todo,
			),
		);
	};

	const sendText = (text: Todo['text']) => {
		const newTodo: Todo = {
			id: `${self.crypto.randomUUID()}`,
			text: text,
			complete: false,
			// 仮で現在時刻を入力、後で修正
			deadline: new Date(),
			createdAt: new Date(),
			updatedAt: new Date(),
		};
		setTodoList([...todoList, newTodo]);
	};

	return (
		<>
			<div>
				<TodoList
					todos={todoList}
					onToggleComplete={onToggleComplete}
				/>
				<AddTodo sendText={sendText} />
			</div>
		</>
	);
}
