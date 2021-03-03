var unirest = require("unirest");

var req = unirest("GET", "https://realtor-com-real-estate.p.rapidapi.com/for-sale");

req.query({
	"city": "Fremont",
	"state_code": "CA",
	"offset": "0",
	"limit": "42"
});

req.headers({
	"x-rapidapi-key": "8d0f0998b8msh009eba9dba3c8bfp1339a8jsncda359cbe794",
	"x-rapidapi-host": "realtor-com-real-estate.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});