import { useState } from 'react';

import TodoList from '../components/ui/TodoList/TodoList';
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

	return (
		<>
			<TodoList
				todos={todoList}
				onToggleComplete={onToggleComplete}
			/>
		</>
	);
}
