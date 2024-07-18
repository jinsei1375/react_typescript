import React, { useState } from 'react';
import CountMessage from './components/CountMessage';

function Count() {
	// countステートを定義状態管理
	const [count, setCount] = useState<number>(0);

	// カウントアップボタンをクリックしたときの処理
	const handleCountUp = () => {
		setCount(count + 1);

		// 型チェックでエラーが出る
		// setCount('test');
	};

	// カウントダウンボタンをクリックしたときの処理
	const handleCountDown = () => {
		setCount(count - 1);
	};

	return (
		<>
			<h1>Count</h1>
			<p>{count}</p>
			<button onClick={handleCountUp}>カウントアップ</button>
			<button onClick={handleCountDown}>カウントダウン</button>
			{count >= 10 && <CountMessage count={count} />}
		</>
	);
}

export default Count;
