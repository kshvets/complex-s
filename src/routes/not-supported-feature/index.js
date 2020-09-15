import {useEffect} from "preact/hooks";

const NotSupportedFeature = () => {
	function clickHandler() {
		let map = new Map();
		map.set("someKey", "someValue");
		map.entries();
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

export default NotSupportedFeature;
