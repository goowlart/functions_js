var srt = "Alex";
var toExchange = 'x';
var exchange = 'z'


function toExchangeFor (toExchange, exchange, srt) {
	var result="";

		for(var i = 0; i < srt.length; i++) {
		    //c = str.charAt(i)// pour garder la lettre 
		if (toExchange == srt.charAt(i)) {
			result = result + exchange
		} else {
			result = result + srt.charAt(i)
		} 
	    }
	
	return result
	}
 						
var toCall = toExchangeFor (toExchange, exchange, srt);		
console.log(toCall);


							
							
		
							