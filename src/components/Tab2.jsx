import LeftSide from "./LeftSide";
import "./Tab2.scss";
function Tab2({ onNext, onBack, goToLogin }) {
	return (
		<div className="tab2">
			<LeftSide />
			<div className="right">
				<div className="top">
					<p>
						Already have an account?
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								goToLogin();
							}}
						>
							Log In
						</a>
					</p>
					<div className="number">
						<b>2/5</b>Your growth stage
					</div>
				</div>
				<div className="list-content">
					<h3>
						Select your<p>projected revenue</p>for 2024
					</h3>
					<div className="list-items">
						<label className="item">
							<input type="radio" name="money" id="" />
							<p>$0 - $200K</p>
						</label>
						<label className="item">
							<input type="radio" name="money" id="" />
							<p>$200K - $500K</p>
						</label>
						<label className="item">
							<input type="radio" name="money" id="" />
							<p>$500K - $3M</p>
						</label>
						<label className="item">
							<input type="radio" name="money" id="" />
							<p>$3M - $10M</p>
						</label>
						<label className="item">
							<input type="radio" name="money" id="" />
							<p>$10M+</p>
						</label>
					</div>
				</div>
				<div className="bottom">
					<button className="back" onClick={onBack}>
						Back
					</button>
					<button className="next" onClick={onNext}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}

export default Tab2;
