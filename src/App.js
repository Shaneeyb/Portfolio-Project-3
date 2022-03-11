import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainComponent';
//import HomeComponent from "./components/homeComponent.js"


function App() {
return (
	<div style={{
		backgroundColor: "#FFFAF3",
		color: "#2D2D2D",
        height: '100%',
  		minHeight : '100vh'
	}}>
		<Main />
	</div>
);
}

export default App;
