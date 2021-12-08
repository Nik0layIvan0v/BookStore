export const requester = (url, token) => {
	return fetch(url, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		Authorization: 'Bearer' + token,
	}).then(responseHandler);
};

async function responseHandler(res) {
	let jsonData = await res.Json();

	if (res.ok) {
		return jsonData;
	}

	throw jsonData;
}
