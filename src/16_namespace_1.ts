/**
 * 1. The namespace is used for logical grouping of functionalities. A namespace can include interfaces, classes, functions and variables to support a single or a group of related functionalities.
 * 2. Compile using --outFile
 */

namespace StringUtility {
	let name = "john";

	export const ToCapital = (str: string): string => {
		return str.toUpperCase();
	};

	export const ToLowerCase = (str: string): string => {
		return str.toLowerCase();
	};

	// export { ToCapital, ToLowerCase };	//	THIS EXPORT NOT SUPPORTED INSIDE NAMESPACE.
}

export { StringUtility };
