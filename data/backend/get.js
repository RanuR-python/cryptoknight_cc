const request = require('request');
var fs = require('fs');

function BTC() {

	request('https://blockchain.info/de/ticker', (error, response, body) => {

		if(error) console.log(error);
		if(error) return;

		const data = JSON.parse(body);
		value = data.USD.last;


		if(value)
		{
			var json = {"ticker":{"price":value.toFixed(2)}};

			fs.writeFile("../../api/BTC-USD.xml", JSON.stringify(json), function(err) {}); 
		}
	});
}

function BBS() {

	request('https://tradeogre.com/api/v1/ticker/LTC-BBS', (error, response, body) => {
		
		if(error) console.log(error);
		if(error) return;

		const data = JSON.parse(body);
		value = parseFloat(data.price);


		if(value)
		{
			var json = {"ticker":{"price":value.toFixed(8)}};

			fs.writeFile("../../api/LTC-BBS.xml", JSON.stringify(json), function(err) {}); 
		}
	});
}
function SOLACE() {

	request('https://tradeogre.com/api/v1/ticker/LTC-SOLACE', (error, response, body) => {

		if(error) console.log(error);
		if(error) return;
		
		const data = JSON.parse(body);
		value = parseFloat(data.price);


		if(value)
		{
			var json = {"ticker":{"price":value.toFixed(8)}};

			fs.writeFile("../../api/LTC-SOLACE.xml", JSON.stringify(json), function(err) {}); 
		}
	});
}
function RYO() {

	request('https://tradeogre.com/api/v1/ticker/BTC-RYO', (error, response, body) => {

		if(error) console.log(error);
		if(error) return;
		
		const data = JSON.parse(body);
		value = parseFloat(data.price);


		if(value)
		{
			var json = {"ticker":{"price":value.toFixed(8)}};

			fs.writeFile("../../api/BTC-RYO.xml", JSON.stringify(json), function(err) {}); 
		}
	});
}
function LTC() {

	request('https://tradeogre.com/api/v1/ticker/BTC-LTC', (error, response, body) => {

		if(error) console.log(error);
		if(error) return;
		
		
		const data = JSON.parse(body);
		value = parseFloat(data.price);


		if(value)
		{
			var json = {"ticker":{"price":value.toFixed(8)}};

			fs.writeFile("../../api/BTC-LTC.xml", JSON.stringify(json), function(err) {}); 
		}
	});
}
function XMV() {

	request('https://tradeogre.com/api/v1/ticker/BTC-XMV', (error, response, body) => {

		if(error) console.log(error);
		if(error) return;
		
		const data = JSON.parse(body);
		value = parseFloat(data.price);


		if(value)
		{
			var json = {"ticker":{"price":value.toFixed(8)}};

			fs.writeFile("../../api/BTC-XMV.xml", JSON.stringify(json), function(err) {}); 
		}
	});
}
function LTHN() {

	request('https://tradeogre.com/api/v1/ticker/BTC-LTHN', (error, response, body) => {

		if(error) console.log(error);
		if(error) return;
		
		const data = JSON.parse(body);
		value = parseFloat(data.price);


		if(value)
		{
			var json = {"ticker":{"price":value.toFixed(8)}};

			fs.writeFile("../../api/BTC-LTHN.xml", JSON.stringify(json), function(err) {}); 
		}
	});
}
function IRD() {

	request('https://tradeogre.com/api/v1/ticker/BTC-IRD', (error, response, body) => {

		if(error) console.log(error);
		if(error) return;
		
		console.log(body);
		
		const data = JSON.parse(body);
		value = parseFloat(data.price);


		if(value)
		{
			var json = {"ticker":{"price":value.toFixed(8)}};

			fs.writeFile("../../api/BTC-IRD.xml", JSON.stringify(json), function(err) {}); 
		}
	});
}
function B2B() {
/*
	request('https://maplechange.com:443//api/v2/tickers/b2bbtc.json', (error, response, body) => {

		const data = JSON.parse(body);
		value = parseFloat(data.ticker.last);


		if(value)
		{
			var json = {"ticker":{"price":value.toFixed(8)}};

			fs.writeFile("../../api/BTC-B2B.xml", JSON.stringify(json), function(err) {}); 
		}
	});*/
}
function BTCN() {

	request('https://app.stocks.exchange/api2/ticker', (error, response, body) => {

		if(error) console.log(error);
		if(error) return;
		
		const data = JSON.parse(body);

		for (var i in data) {

			var item = data[i];

			if(item.market_name !== "BTCN_BTC") continue;

			

			value = parseFloat(item.last);


			if(value)
			{
				var json = {"ticker":{"price":value.toFixed(8)}};
	
				fs.writeFile("../../api/BTC-BTCN.xml", JSON.stringify(json), function(err) {}); 
			}
		}
	});
}

function update(){
	LTHN();
//	B2B();
	BTCN();
	IRD();
	BBS();
	SOLACE();
	LTC();
	RYO();
	XMV();
	BTC();
}

setInterval(()=>{
	update();
}, 120*1000);
update();

