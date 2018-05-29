		var Data = [3,5,1,7,3,9,10];

		Data.sort(function(a,b) {
			return a - b;
		});

		var str = "";
		for (var it = 0; it < Data.length; it++) {
			str += Data[it] + ",";
		}

		console.log(str);