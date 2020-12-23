export default function pushInBrowserHistory(saveData, history) {
	const strSearch = new URLSearchParams(saveData).toString().toLowerCase();
	history.push({ pathname: history.location.pathname, search: strSearch });
}
