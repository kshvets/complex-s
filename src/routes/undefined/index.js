import {useEffect} from "preact/hooks";

const Undefined = () => {
	useEffect(() => {
		someUndefinedFunction();
	});

	return (
		<div>
            Error has been happened because of undefined function call
		</div>
	);
}

export default Undefined;
