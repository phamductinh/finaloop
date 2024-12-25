import { useState } from "react";
import LeftSide3 from "./LeftSide3";
import "./Tab5.scss";
import LoginForm from "./LoginForm";

function Tab5({ onBack }) {
	const [isShowModal, setIsShowModal] = useState(false);

	const handleShowForm = () => {
		setIsShowModal(true);
	};

	const handleCloseForm = () => {
		setIsShowModal(false);
	};

	return (
		<>
			<div className="tab5">
				<LeftSide3 />
				<div className="right">
					<div className="top">
						<div className="number">
							<b>5/5</b>
							Complete sign-up
						</div>
					</div>
					<div className="list-content">
						<h3>
							{`We're almost finished,`}
							<p>just a few last details</p>
						</h3>
						<div className="list-items">
							{/* <form onSubmit={handleSubmit}>
								<div className="input-box">
									<label>Email *</label>
									<input
										type="text"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
									{errors.email && (
										<span className="error">
											{errors.email}
										</span>
									)}
								</div>
								<div className="input-box">
									<label>Password *</label>
									<input
										type="password"
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
									/>
									{errors.password && (
										<span className="error">
											{errors.password}
										</span>
									)}
								</div>
							</form> */}
							<button type="button" onClick={handleShowForm}>
								<i className="fa-brands fa-facebook"></i>
								Continue with Facebook
							</button>
						</div>
					</div>
					<div className="bottom">
						<button onClick={onBack} className="back">
							Back
						</button>
					</div>
				</div>
			</div>
			{isShowModal && <LoginForm onClose={handleCloseForm} />}
		</>
	);
}

export default Tab5;
