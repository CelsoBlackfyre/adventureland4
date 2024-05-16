const request: RequestInfo = new Request("/users", {
	method: "PUT",
	headers: headers,
	body: JSON.stringify(user),
});
