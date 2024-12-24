import { useState } from "react";
import "./App.scss";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import Tab4 from "./components/Tab4";
import Tab5 from "./components/Tab5";

function App() {
	const [activeTab, setActiveTab] = useState(1);

	const nextTab = () => {
		if (activeTab < 5) setActiveTab((prev) => prev + 1);
	};

	const backTab = () => {
		if (activeTab > 1) setActiveTab((prev) => prev - 1);
	};

	const goToLogin = () => {
		setActiveTab(5);
	};

	const renderContent = () => {
		switch (activeTab) {
			case 1:
				return <Tab1 onNext={nextTab} goToLogin={goToLogin}/>;
			case 2:
				return <Tab2 onNext={nextTab} onBack={backTab} goToLogin={goToLogin}/>;
			case 3:
				return <Tab3 onNext={nextTab} onBack={backTab} goToLogin={goToLogin}/>;
			case 4:
				return <Tab4 onNext={nextTab} onBack={backTab} goToLogin={goToLogin}/>;
			case 5:
				return <Tab5 onBack={backTab} />;
			default:
				return <Tab1 onNext={nextTab} />;
		}
	};
	return (
		<div className="container">
			<>{renderContent()}</>
		</div>
	);
}

export default App;
