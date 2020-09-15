import {useEffect} from "preact/hooks";

const UndefinedOnClick = () => {
	function clickHandler() {
		someUndefinedFunction();
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

export default UndefinedOnClick;
