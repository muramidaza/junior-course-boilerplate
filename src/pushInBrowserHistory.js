export default function pushInBrowserHistory(pushData) {
	var searchParams = new URLSearchParams(window.location.search);
	let saveData = {};
	let performPushData = {};

	for(let key in pushData) {
		performPushData[key.toLowerCase()] = pushData[key]
	}

	for(let pair of searchParams.entries()) {
		saveData[pair[0]] = +pair[1];
	}
	
	saveData = {...saveData, ...performPushData};
	
	let str = '?';
	for (let key in saveData) {
		str += key + '=' + saveData[key] + '&';
	}
	str = str.toLowerCase().substring(0, str.length - 1);
	window.history.pushState('changeData', 'Интернет-магазин', str); 
}