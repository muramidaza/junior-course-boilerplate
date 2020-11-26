export default function pushInBrowserHistory(saveData, history) {
	let strSearch = '?';
	for (let key in saveData) {
		strSearch += key + '=' + saveData[key] + '&';
	}
	strSearch = strSearch.toLowerCase().substring(0, strSearch.length - 1);

	history.push({pathname: history.location.pathname, search: strSearch});
}
