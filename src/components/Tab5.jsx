import LeftSide3 from "./LeftSide3";
import "./Tab5.scss";
function Tab5({ onBack }) {
	return (
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
						<div className="input-box">
							<label htmlFor="#">Email *</label>
							<input type="text" />
						</div>
						<div className="input-box">
							<label htmlFor="#">Password *</label>
							<input type="password" />
						</div>
						<button>
							<i className="fa-brands fa-facebook"></i>Login with
							Facebook
						</button>
					</div>
				</div>
				<div className="bottom" onClick={onBack}>
					<button className="back">Back</button>
				</div>
			</div>
		</div>
	);
}

export default Tab5;
