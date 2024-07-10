import { select } from "@wordpress/data";

const { tokenContext = {} } = blueprintBlocksLoaderSettings || {};

/**
 * Returns the global context available to all blocks everywhere.
 */
function getGlobalContext() {
	let globalContext = { ...tokenContext };

	if (Object.entries(globalContext).length === 0) {
		const siteData = select("core").getSite();
		const themeData = select("core").getCurrentTheme();

		globalContext.site = {};
		globalContext.site.url = siteData?.url || "";

		globalContext.theme.url =
			themeData?.screenshot?.slice(
				0,
				themeData?.screenshot?.lastIndexOf("/") || 0
			) || "";
		globalContext.theme.path = globalContext.theme.url.slice(
			globalContext.site.url.length
		);
	}

	return globalContext;
}

export default getGlobalContext;
