const { select } = "@wordpress/data";

/**
 * Returns the global context available to all blocks everywhere.
 */
function getGlobalContext() {
	const siteData = select("core").getSite();
	const themeData = select("core").getCurrentTheme();

	const siteUrl = siteData?.url || "";
	const themeUrl =
		themeData?.screenshot?.slice(
			0,
			themeData?.screenshot?.lastIndexOf("/") || 0
		) || "";

	return {
		site: {
			url: siteUrl,
		},
		theme: {
			path: `${themeUrl.slice(siteUrl.length)}`,
			url: themeUrl,
		},
	};
}

export default getGlobalContext;
