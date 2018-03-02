function epost(expression){
      var postfix = expression.split(" ");
      var postfixStack = new Array();
      var result;
      var firstNum;
      var secNum;
    for (var i = 0; i < postfix.length; i++) {
        if ((postfix[i] != "^") && (postfix[i] != "+") && (postfix[i] != "-") && (postfix[i] != "*") && (postfix[i] != "/") && (postfix[i] !== "") ) {
            postfixStack.push(postfix[i]);
        }else if(postfix[i] === "^" || postfix[i] === "+" || postfix[i] === "-"|| postfix[i] === "*"|| postfix[i] === "/") {
          
          if (postfix[i] === '+') {
                firstNum = postfixStack.pop();
                secNum = postfixStack.pop();
                result = parseInt(secNum) + parseInt(firstNum);
                postfixStack .push(result);
            }
            else if (postfix[i] === '*') {
                firstNum = postfixStack.pop();
                secNum = postfixStack
                result = parseInt(secNum) * parseInt(firstNum);
                postfixStack.push(result);
            }
            else if (postfix[i] === '/') {
                firstNum = postfixStack.pop();
                secNum = postfixStack.pop();
                result =parseInt(secNum) / parseInt(firstNum);
                postfixStack .push(result);
        }

            else if (postfix[i] === '-') {
                firstNum = postfixStack.pop();
                secNum = postfixStack.pop();
                result = parseInt(secNum) - parseInt(firstNum);
                postfixStack.push(result);
            }
            else if (postfix[i] === '^') {
                firstNum = postfixStack.pop();
                secNum = postfixStack.pop();
                result = Math.pow(parseInt(secNum),parseInt(firstNum));
                postfixStack.push(result);
            }
      }
    
  }

  var finalRes = postfixStack.pop();
  return finalRes;

}
infixtopostfix =function(expression){
    var infixStack = new Array();
    var pfixString = "";
    var precedence = function(operator){
   switch(operator){
       case "^":
           return 3;
       case "+":
       case "-":
            return 1;
       case "*":
       case "/":
            return 2;
      default:
            return 0;
      }
   } 
   for (var i=0; i<expression.length; i++){
     var c = expression.charAt(i);
   if(!isNaN(parseInt(c))){
         pfixString += c;
        if (i+1 >= expression.length || isNaN(parseInt(expression.charAt(i+1)))) {
                   pfixString += " ";
              }
        } else if(c==="+"||c==="-"||c==="*"||c==="/"||c==="^"){
            while(c!= "^" && infixStack.length !== 0 && (precedence(c) <= precedence(infixStack[infixStack.length -1]))){
                   pfixString += infixStack.pop();
                   pfixString +=" ";
              }
           infixStack.push(c);
        }
     }
   while(infixStack.length !== 0){
         pfixString +=infixStack.pop();
         pfixString +=" ";
   } this. getPostfix = function(){
    return pfixString;
   }
 }
 
var in_put = "";
var flag = 0;
function addno(character){
	if(input.value == null || input.value == "0") {
		input.value = character
		in_put += character;
	}
	else{
		input.value += character;
		in_put += character;
	}
}

function deletedisplay(form){
	flag = 0;
	in_put="";
	form.display.value = 0;
	form.output.value = 0;
}
function openbra(form){
	flag +=1;
	if(form.display.value  == "0"){
		form.display.value  = "(";
	    in_put += "("; }
	else{
	form.display.value += "(";
     in_put += "(";
    }
} 

function closebra(form){
	flag -= 1;
	if(form.display.value  == "0")
		   alert("invalidentry");
    else
	form.display.value += ")";
    in_put += ")";

}
function log(){
    in_put += "Math.log(";
    document.getElementById('input').value ="log(";
}
function sqr(){
    document.getElementById('input').value ="sqr(";
}
function sqrt(){
    in_put += "Math.sqrt(";
    document.getElementById('input').value ="sqrt(";
}

function cos() {
	in_put += "Math.cos(";
    document.getElementById('input').value ="cos(";
   }

function sin() {
     in_put += "Math.sin(";
     document.getElementById('input').value ="sin(";
   	
}
function tan() {
     in_put += "Math.tan(";
     document.getElementById('input').value ="tan(";
 }

function compute(form) {
	var in1 = new infixtopostfix(in_put);
    var in2 = in1.getPostfix();
    res.value = epost(in2);
  
   if(in_put.match(/cos/)){
   	alert(in_put);
   	res.value = eval(in_put);
   } else if(in_put.match(/sin/)){
   	res.value = eval(in_put);
   } else if(in_put.match(/tan/)){
     res.value = eval(in_put);
   }else if(in_put.match(/log/)){
     res.value = eval(in_put);
   }

}
function backspace(form){
	var mar= form.display.value;
	form.display.value = mar.substring(0, mar.length-1);
	in_put = in_put.substring(0,in_put.length-1);
	
}
