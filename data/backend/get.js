const request = require('request');
var fs = require('fs');

function BTC() {

	request('https://blockchain.info/de/ticker', (error, response, body) => {

		const data = JSON.parse(body);
		value = parseFloat(data.USD.last);


		if(value)
		{
			var json = {"ticker":{"price":value.toFixed(2)}};

			fs.writeFile("BTC-USD.xml", JSON.stringify(json), function(err) {}); 
		}
	});
}

function TRL() {

	request('https://tradeogre.com/api/v1/ticker/LTC-TRTL', (error, response, body) => {

		const data = JSON.parse(body);
		value = parseFloat(data.price);


		if(value)
		{
			var json = {"ticker":{"price":value.toFixed(8)}};

			fs.writeFile("LTC-TRTL.xml", JSON.stringify(json), function(err) {}); 
		}
	});
}
function SOLACE() {

	request('https://tradeogre.com/api/v1/ticker/LTC-SOLACE', (error, response, body) => {

		const data = JSON.parse(body);
		value = parseFloat(data.price);


		if(value)
		{
			var json = {"ticker":{"price":value.toFixed(8)}};

			fs.writeFile("LTC-SOLACE.xml", JSON.stringify(json), function(err) {}); 
		}
	});
}
function RYO() {

	request('https://tradeogre.com/api/v1/ticker/BTC-RYO', (error, response, body) => {

		const data = JSON.parse(body);
		value = parseFloat(data.price);


		if(value)
		{
			var json = {"ticker":{"price":value.toFixed(8)}};

			fs.writeFile("BTC-RYO.xml", JSON.stringify(json), function(err) {}); 
		}
	});
}
function LTC() {

	request('https://tradeogre.com/api/v1/ticker/BTC-LTC', (error, response, body) => {

		const data = JSON.parse(body);
		value = parseFloat(data.price);


		if(value)
		{
			var json = {"ticker":{"price":value.toFixed(8)}};

			fs.writeFile("BTC-LTC.xml", JSON.stringify(json), function(err) {}); 
		}
	});
}



setInterval(()=>{

	BTC();
	TRL();
	SOLACE();
	LTC();
	RYO();

}, 60*1000);

