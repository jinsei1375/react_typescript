import { useLocation, useNavigate } from 'react-router-dom';

interface State {
	name: string;
	email: string;
}

function Confirm() {
	const location = useLocation();
	const navigate = useNavigate();
	console.log(location);
	const { name, email } = location.state as State;

	const handleSubmit = () => {
		navigate('/form/completed');
	};

	const handleBack = () => {
		navigate('/form', { state: { name, email } });
	};

	return (
		<div>
			<h1>確認ページ</h1>
			<p>Name: {name}</p>
			<p>Email: {email}</p>
			<button type="button" onClick={handleBack}>
				戻る
			</button>
			<button type="button" onClick={handleSubmit}>
				送信
			</button>
		</div>
	);
}

export default Confirm;
