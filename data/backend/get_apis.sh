
while true
do
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" https://tradeogre.com/api/v1/ticker/BTC-ITA -O /usr/local/nginx/html/api/BTC-ITA.xml
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" https://tradeogre.com/api/v1/ticker/BTC-XRN -O /usr/local/nginx/html/api/BTC-XRN.xml
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" https://tradeogre.com/api/v1/ticker/BTC-MSR -O /usr/local/nginx/html/api/BTC-MSR.xml
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" https://tradeogre.com/api/v1/ticker/BTC-XHV -O /usr/local/nginx/html/api/BTC-XHV.xml
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" https://tradeogre.com/api/v1/ticker/BTC-TRTL -O /usr/local/nginx/html/api/BTC-TRTL.xml
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" https://tradeogre.com/api/v1/ticker/BTC-XAO -O /usr/local/nginx/html/api/BTC-XAO.xml
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" https://tradeogre.com/api/v1/ticker/BTC-GRFT -O /usr/local/nginx/html/api/BTC-GRFT.xml
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" https://tradeogre.com/api/v1/ticker/BTC-LNS -O /usr/local/nginx/html/api/BTC-LNS.xml
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" https://tradeogre.com/api/v1/ticker/BTC-RTO -O /usr/local/nginx/html/api/BTC-RTO.xml
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" https://tradeogre.com/api/v1/ticker/BTC-LOKI -O /usr/local/nginx/html/api/BTC-LOKI.xml
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" https://tradeogre.com/api/v1/ticker/BTC-TRIT -O /usr/local/nginx/html/api/BTC-TRIT.xml
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" https://tradeogre.com/api/v1/ticker/BTC-NBR -O /usr/local/nginx/html/api/BTC-NBR.xml
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" https://tradeogre.com/api/v1/ticker/BTC-OMB -O /usr/local/nginx/html/api/BTC-OMB.xml
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" https://tradeogre.com/api/v1/ticker/BTC-XUN -O /usr/local/nginx/html/api/BTC-XUN.xml
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" https://tradeogre.com/api/v1/ticker/BTC-ETN -O /usr/local/nginx/html/api/BTC-ETN.xml
	
	wget --header="Accept: text/html" --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0" 'https://bittrex.com/api/v1.1/public/getticker?market=BTC-AEON' -O /usr/local/nginx/html/api/BTC-AEON.xml
	sleep 100
done

