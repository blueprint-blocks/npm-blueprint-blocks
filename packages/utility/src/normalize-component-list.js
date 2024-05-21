import isArray from "./is-array";
import isEmptyObject from "./is-empty-object";
import isObject from "./is-object";

function normalizeComponentList(componentList, defaultComponent = {}) {
	if (isObject(componentList) && !isEmptyObject(componentList)) {
		return [componentList];
	}

	if (isArray(componentList) && componentList.length > 0) {
		return componentList;
	}

	return [defaultComponent];
}

export default normalizeComponentList;
