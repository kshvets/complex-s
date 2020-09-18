import {useEffect} from "preact/hooks";

const HandledError = () => {
	function clickHandler() {	
		try{
			let v = {};
			v.clickUndefined();
		}
		catch(ex) {

		}
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

export default HandledError;
