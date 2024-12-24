import LeftSide2 from "./LeftSide2";
import "./Tab4.scss";
function Tab4({ onNext, onBack, goToLogin }) {
	return (
		<div className="tab4">
			<LeftSide2 />
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
						<b>4/5</b>
						{`Let's chat`}
					</div>
				</div>
				<div className="list-content">
					<h3>
						Book a call with your<p>Finaloop accounting expert</p>
					</h3>
					<div className="list-items">
						<img src="/public/calendar.png" alt="" />
					</div>
				</div>
				<div className="bottom">
					<button className="back" onClick={onBack}>
						Back
					</button>
					<button className="next" onClick={onNext}>
						Skip{" "}
						<svg
							viewBox="0 0 24 24"
							focusable="false"
							className="chakra-icon css-onkibi"
						>
							<g
								fill="currentColor"
								stroke="currentColor"
								strokeLinecap="square"
								strokeWidth="2"
							>
								<circle
									cx="12"
									cy="12"
									fill="none"
									r="11"
									stroke="currentColor"
								></circle>
								<line
									fill="none"
									x1="11.959"
									x2="11.959"
									y1="11"
									y2="17"
								></line>
								<circle
									cx="11.959"
									cy="7"
									r="1"
									stroke="none"
								></circle>
							</g>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Tab4;
