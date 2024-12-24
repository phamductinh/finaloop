import LeftSide from "./LeftSide";
import "./Tab1.scss";
function Tab1({ onNext, goToLogin }) {
	return (
		<div className="tab1">
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
						<b>1/5</b> Tell us about your business
					</div>
				</div>
				<div className="list-content">
					<h3>
						Select your main<p>sales channel</p>
					</h3>
					<div className="list-items">
						<label className="item">
							<input type="radio" name="social" id="" />
							<img
								src="https://res.cloudinary.com/finaloop/image/upload/v1698677436/integration-logs/Amazon.png"
								alt=""
							/>
							<p>Amazone</p>
						</label>
						<label className="item">
							<input type="radio" name="social" id="" />
							<img
								src="https://res.cloudinary.com/finaloop/image/upload/v1698677459/integration-logs/Shopify2.png"
								alt=""
							/>
							<p>Shopify</p>
						</label>
						<label className="item">
							<input type="radio" name="social" id="" />
							<img
								src="https://res.cloudinary.com/finaloop/image/upload/v1726506261/integration-logs/TikTok-1.png"
								alt=""
							/>
							<p>TikTok</p>
						</label>
						<label className="item">
							<input type="radio" name="social" id="" />
							<img
								src="https://res.cloudinary.com/finaloop/image/upload/v1698844353/Wholesale2.png"
								alt=""
							/>
							<p>Wholesale / Retail</p>
						</label>
						<label className="item">
							<input type="radio" name="social" id="" />
							<img
								src="https://res.cloudinary.com/finaloop/image/upload/v1698677463/integration-logs/Walmart.png"
								alt=""
							/>
							<p>Walmart</p>
						</label>
						<label className="item">
							<input type="radio" name="social" id="" />
							<img
								src="https://res.cloudinary.com/finaloop/image/upload/v1698677532/integration-logs/Etsy.png"
								alt=""
							/>
							<p>Esty</p>
						</label>
						<label className="item">
							<input type="radio" name="social" id="" />
							<img
								src="https://res.cloudinary.com/finaloop/image/upload/v1698677466/integration-logs/Woo.png"
								alt=""
							/>
							<p>WooCommerce</p>
						</label>
						<label className="item">
							<input type="radio" name="social" id="" />
							<img
								src="https://res.cloudinary.com/finaloop/image/upload/v1698677438/integration-logs/Big_commerce.png"
								alt=""
							/>
							<p>BigCommerce</p>
						</label>
						<label className="item">
							<input type="radio" name="social" id="" />
							<img
								src="https://res.cloudinary.com/finaloop/image/upload/v1698677451/integration-logs/Meta-1.png"
								alt=""
							/>
							<p>Marketplace / Instagram</p>
						</label>
						<label className="item">
							<input type="radio" name="social" id="" />
							<img
								src="https://res.cloudinary.com/finaloop/image/upload/v1698677444/integration-logs/Faire.png"
								alt=""
							/>
							<p>Faire</p>
						</label>
						<label className="item">
							<input type="radio" name="social" id="" />
							<img
								src="https://res.cloudinary.com/finaloop/image/upload/v1698677443/integration-logs/ebay.png"
								alt=""
							/>
							<p>eBay</p>
						</label>
						<label className="item">
							<input type="radio" name="social" id="" />
							<img
								src="https://res.cloudinary.com/finaloop/image/upload/v1698674595/Other_platforms_integration.png"
								alt=""
							/>
							<p>Another platform</p>
						</label>
					</div>
				</div>
				<div className="bottom">
					<button onClick={onNext}>Next</button>
				</div>
			</div>
		</div>
	);
}

export default Tab1;
