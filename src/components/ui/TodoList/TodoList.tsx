import type { Todo } from '../../../types/todo';

interface TodoListProps {
	todos: Todo[];
	onToggleComplete: (id: Todo['id']) => void;
}

// Todo配列の内容をリスト表示する
export default function TodoList({ todos, onToggleComplete }: TodoListProps) {
	return (
		<>
			<h1>List</h1>
			<div className="m-50 flex flex-col">
				{todos.map((todo) => (
					<div
						key={todo.id}
						className="m-0.5 flex items-center rounded-2xl border border-blue-300 p-3 text-xl"
					>
						<input
							type="checkbox"
							name={todo.id}
							id={todo.id}
							checked={todo.complete}
							onChange={() => onToggleComplete(todo.id)}
							className="ml-3 h-4 w-4"
						/>
						<label
							htmlFor={todo.id}
							className={`flex-1 text-center ${todo.complete ? 'text-gray-400' : ''}`}
						>
							{todo.text}
						</label>
						<div className="mr-3.5">
							{todo.deadline.toLocaleDateString()}
						</div>
					</div>
				))}
			</div>
		</>
	);
}
