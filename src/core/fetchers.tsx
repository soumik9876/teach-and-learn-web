export const base_headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};
const GetHeader = (server_token: string | null) => {
	return {
		...base_headers,
		Authorization: `token ${server_token}`,
	};
};
export const getRequest = async (url: string, server_token?: string | null) => {
	const head = GetHeader(server_token);
	const response = await fetch(url, {
		headers: head,
	});
	if (response.status >= 400) {
		return { statusCode: response.status };
	}
	let data = await response.json();
	data.statusCode = response.status;
	return data;
};
export const postRequest = async (url: string, body: Object, server_token: string | null) => {
	const head = GetHeader(server_token);
	const response = await fetch(url, {
		method: "POST",
		headers: head,
		body: JSON.stringify(body),
	});
	if (response.status >= 400) {
		return { statusCode: response.status };
	}
	let data = await response.json();
	data.statusCode = response.status;
	return data;
};
