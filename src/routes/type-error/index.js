import {useEffect} from "preact/hooks";

const TypeError = () => {
	function clickHandler() {
		let map = {};
		map.getKeysData();
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

export default TypeError;
