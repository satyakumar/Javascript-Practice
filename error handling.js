function add(a,b) {
	try {
		if(a == 0 || b == 0) {
			throw "No Zero values accepted here";
		}
		return a+b;
	} catch(e) {
		console.log("error",e);
	} finally {
		console.log("Finally");
	}

}

try { add(1,0)} 
catch(e) { console.log("Error",e)}
finally { console.log("Finally")}