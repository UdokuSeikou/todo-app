import { createBrowserRouter } from 'react-router';
import TodoList from './components/ui/TodoList/TodoList';

export const router = createBrowserRouter([
	{
		path: '/todo',
		children: [
			{
				path: 'list',
				Component: TodoList,
			},
		],
	},
]);
