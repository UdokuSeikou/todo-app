import type { Todo } from '../../../types/todo';

interface TodoListProps {
	todos: Todo[];
	onToggleComplete: (id: Todo['id']) => void;
}

export default function TodoList({ todos, onToggleComplete }: TodoListProps) {
	return (
		<>
			<h1>List</h1>
			<div className="flex flex-col">
				{todos.map((todo) => (
					<div
						key={todo.id}
						className="border p-3 text-xl"
					>
						<input
							type="checkbox"
							name={todo.id}
							id={todo.id}
							checked={todo.complete}
							onChange={() => onToggleComplete(todo.id)}
							className="h-4 w-4"
						/>
						<label
							htmlFor={todo.id}
							className={`ml-3 ${todo.complete ? 'text-gray-400' : ''}`}
						>
							{todo.text}
						</label>
					</div>
				))}
			</div>
		</>
	);
}
