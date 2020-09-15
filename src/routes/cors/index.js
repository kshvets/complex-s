import {useEffect} from "preact/hooks";

const CORS = () => {
	function clickHandler() {
		fetch('http://payment.betsson.com/api/customerInformation')
  			.then(response => response.json())
  			.then(data => console.log(data));
	}

	return (
		<div>
			<div>
				<button onClick={() => clickHandler()}>Click me!</button>			
			</div>
            Error will be happened after click on "Click me" button!
		</div>
	);
}

export default CORS;
