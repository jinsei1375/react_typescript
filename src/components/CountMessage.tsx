import React from 'react';

interface CounterMessageProps {
	count: number;
}

function CountMessage({ count }: CounterMessageProps) {
	return (
		<div>
			<p>10以上になった: {count}</p>
		</div>
	);
}

export default CountMessage;
