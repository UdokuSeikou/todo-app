import { useState, type FormEvent } from 'react';
import type { Todo } from '../../../types/todo';

interface AddTodoProps {
	sendText: (text: Todo['text']) => void;
}

export default function AddTodo({ sendText }: AddTodoProps) {
	const [textValue, setTextValue] = useState<string>('');
	const isDisabled = !textValue.trim();

	// テキスト入力の変更を管理
	const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTextValue(e.target.value);
	};

	// フォーム送信を管理
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const trimmedValue = textValue.trim();

		// textInputの内容が空白のときは送信しない
		if (trimmedValue) {
			sendText(trimmedValue);
			setTextValue('');
		}
	};

	// Enterキーの入力で送信
	const handlerOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		// 入力確定前の場合は送信しない
		if (e.nativeEvent.isComposing) return;

		// Enterキーが入力された場合、textを送信する
		if (e.key === 'Enter') {
			e.preventDefault();
			const trimmedValue = textValue.trim();

			// textInputの内容が空白のときは送信しない
			if (trimmedValue) {
				sendText(trimmedValue);
				setTextValue('');
			}
		}
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div>
				<input
					type="text"
					name="textInput"
					id="textInput"
					placeholder="新しいTodoを入力"
					className=""
					onChange={(e) => handlerOnChange(e)}
					onKeyDown={(e) => handlerOnKeyDown(e)}
					value={textValue}
				/>
				<button
					type="submit"
					disabled={isDisabled}
					className="bg-blue-400"
				>
					Add
				</button>
			</div>
		</form>
	);
}
