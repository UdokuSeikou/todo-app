import type { Todo } from '../../../types/todo';

interface AddTodoProps {
	addButtonHandler: (text: Todo['text']) => void;
}

export default function AddTodo({ addButtonHandler }: AddTodoProps) {}
