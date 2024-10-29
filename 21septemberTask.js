var a="Vamshi"
 console.log(a.length);
 console.log(a.charAt(3));
 console.log(a.charCodeAt(5));
 console.log(a.toUpperCase(6));

// task 1
var a="    Vamshi"
var b="reddy    "
console.log(a.trimStart());
console.log(b.trimEnd());
var resultstr= a.concat(" " ,b);
console.log(resultstr);
console.log(resultstr.toUpperCase());


// task2
 var c="SRINU"
//  var d="PATIL"
 console.log(c.charAt(3));
 console.log(c.charAt(4));
 console.log(c.toLowerCase());

//  task3
var c="A"
var d="B"
var result= c.concat(d)
console.log(result);
console.log(result.toUpperCase());
console.log(result.charAt(1)); 

// task4
var h="srinivasreddy"
var g="vamshi"
var p1=h.slice(0,3);
var p2=g.slice(7,11);
var result3=p1.concat(p2)
console.log(result3);
var abc=result3.toUpperCase(0,7)
console.log(result3);


//5
var st="      VAMSHI   ";
var st1="smi"
var r5=(st.trim().charAt(0).toUpperCase()+st.trim().slice(1,6)).concat(" ",st1.slice(0,2)+st1.charAt(2).toUpperCase());
console.log(r5);



//6
var k="Hello hi , how are you"
console.log(k.indexOf());