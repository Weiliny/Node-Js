var https =require("https");

function spider(path,callback) {
	var options = {
		hostname: 'mainsite-restapi.ele.me',
		port: 443,
		path:path,
		method: 'GET'
			// headers: {
			// 	'Content-Type': 'applincation/x-www-form-urlencoded',
			// 	'Content-Length': Buffer.byteLength(postData)
			// }
	};



	var req = https.request(options, function(res) {

		var data = "";
		res.on("data", function(huilai) {
			data += huilai;
		})



		res.on('end', function() {
			// console.log(data);
			callback(data);
		})
	})



	req.end();
}



module.exports = spider;