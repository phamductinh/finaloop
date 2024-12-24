import LeftSide from "./LeftSide";
import "./Tab3.scss";
function Tab3({ onNext, onBack, goToLogin }) {
	return (
		<div className="tab3">
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
						<b>3/5</b>Your accounting preferences
					</div>
				</div>
				<div className="list-content">
					<h3>
						What kind of help does your<p>e-commerce store</p>need?
					</h3>
					<div className="list-items">
						<label className="item">
							<input type="radio" name="abc" id="" />
							<p>Just browsing, no online store yet!</p>
						</label>
						<label className="item">
							<input type="radio" name="abc" id="" />
							<p>
								Automated bookkeeping with Finaloop expert
								support
							</p>
						</label>
						<label className="item">
							<input type="radio" name="abc" id="" />
							<p>
								{`Fully managed bookkeeping by Finaloop's
								accounting team`}
							</p>
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

export default Tab3;
