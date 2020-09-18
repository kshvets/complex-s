import {useEffect} from "preact/hooks";

const Undefined = () => {
	useEffect(() => {
		let obj = {};
		obj.someFunction();
		//someUndefinedFunction();
	});

	return (
		<div>
            Error has been happened because of undefined function call
		</div>
	);
}

export default Undefined;
