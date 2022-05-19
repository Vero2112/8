import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cardsgroups from "./cardsgroups.jsx";
//include images into your bundle
// import Navbar from "./navbar.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			{" "}
			<Navbar />
			<div className="container fluid p-4">
				<Jumbotron /> <Cardsgroups />
			</div>
		</div>
	);
};

export default Home;
