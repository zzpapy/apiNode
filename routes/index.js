var express = require('express');
var router = express.Router();
var unirest = require("unirest");

/* GET home page. */
router.get('/', function(req, resp, next) {
	var request = unirest("GET", "https://deezerdevs-deezer.p.rapidapi.com/search");
	
	search = req.query.title
	console.log(search)
request.query({
	"q": search
});
request.headers({
	"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
	"x-rapidapi-key": "8288723595mshec4156b29169e6bp18ca66jsn410a73bc7b25",
	"useQueryString": true
});


request.end(function (res) {
	if (res.error) throw new Error(res.error);
	tab = []
	for (const key in res.body.data) {
		if (res.body.data.hasOwnProperty(key)) {
			const element = res.body.data[key];
			tab.push(element)			
		}
	}
	resp.render('index', { 
	  title: 'Express',
	  res : tab
	 });
});
});

module.exports = router;
