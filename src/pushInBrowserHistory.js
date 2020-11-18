import {push} from 'connected-react-router';

export default function pushInBrowserHistory(pushData) {
	
	const category = window.location.pathname.split('/')[1] ? window.location.pathname.split('/')[1] : 'all';
	const currentPage = window.location.pathname.split('/')[2] ? window.location.pathname.split('/')[2] : 0;
	const searchParams = new URLSearchParams(window.location.search);
	
	if(currentPage > 0 || pushData === null) {
		push('/' + category);
		return;
	}
	
	let saveData = {};
	let performPushData = {};

	for(let key in pushData) {
		performPushData[key.toLowerCase()] = pushData[key];
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
