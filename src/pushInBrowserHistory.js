export default function pushInBrowserHistory(pushData) {
	let str = '?';
	for (var key in pushData) {
		str += key + '=' + pushData[key] + '&';
	}
	str = str.toLowerCase().substring(0, str.length - 1);
	window.history.pushState(null, 'Интернет-магазин', str); 
}