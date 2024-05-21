import isObject from "./is-object";

function isEmptyObject(value) {
	return isObject(value) && Object.entries(value)?.length === 0;
}

export default isEmptyObject;
