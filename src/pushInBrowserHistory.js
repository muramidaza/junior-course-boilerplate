export default function pushInBrowserHistory(data, history) {
	const searchParams = new URLSearchParams(history.location.search);

	let pushData = {...data};
	
	let performPushData = {};
	for(let key in pushData) {
		performPushData[key.toLowerCase()] = pushData[key];
	}

	let saveData = {};
	for(let pair of searchParams.entries()) {
		saveData[pair[0]] = +pair[1];
	}
	
	saveData = {...saveData, ...performPushData};
	
	let strSearch = '?';
	for (let key in saveData) {
		strSearch += key + '=' + saveData[key] + '&';
	}
	strSearch = strSearch.toLowerCase().substring(0, strSearch.length - 1);

	history.push({pathname: history.location.pathname, search: strSearch});
}
