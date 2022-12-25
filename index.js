// import "./styles.css";

var obj={

}
var display=document.getElementById("app-display-screen");

let operand1=null;//98
let operator=null;//+
let operand2=null;//99


var button=document.getElementsByClassName("button");

for(var i=0;i<button.length;i++){
    button[i].addEventListener("click",function calculation(){
        // to get to know which container press we get to know by data-value attribute
           var value = this.getAttribute("data-value");
           //this denote ==> to fetch elememnt that we store in object
        
    
      // display.innerText+="";
      switch(value){ // ===
         case "AC":
            display.innerText="";
            break;
         case "%":
           
            operand1=display.textContent;// empty string return,when there is nothing on screen

            // console.log(previous,operand1);
            var display_context_end_character=operand1[operand1.length-1];
            if(  operand1!=="" && display_context_end_character !== "%" &&  display_context_end_character !== "*" && 
            display_context_end_character !== "-" && display_context_end_character !== "+" && display_context_end_character !== "/" && display_context_end_character !== "."){
            display.innerText += value;
           }
            break;

         case "*":
            operand1=display.textContent;
            var display_context_end_character=operand1[operand1.length-1];
            if(  operand1!=="" && display_context_end_character !== "%" &&  display_context_end_character !== "*" && 
            display_context_end_character !== "-" && display_context_end_character !== "+" && display_context_end_character !== "/" && display_context_end_character !== "."){
           display.innerText += value;
            }
            break;
   
         case "-":
            
            operand1=display.textContent;
            var display_context_end_character=operand1[operand1.length-1];
            if(  operand1!=="" && display_context_end_character !== "%" &&  display_context_end_character !== "*" && 
            display_context_end_character !== "-" && display_context_end_character !== "+" && display_context_end_character !== "/" && display_context_end_character !== "."){
            display.innerText += value;
            }
            break;

         case "+":
            operand1=display.textContent;
            var display_context_end_character=operand1[operand1.length-1];
            
            if(  operand1!=="" && display_context_end_character !== "%" &&  display_context_end_character !== "*" && 
            display_context_end_character !== "-" && display_context_end_character !== "+" && display_context_end_character !== "/" && display_context_end_character !== "."){
            display.innerText += value;
            }

            break;
   
         case "/":
            operand1=display.textContent;
            var display_context_end_character=operand1[operand1.length-1];
            if(  operand1!=="" && display_context_end_character !== "%" &&  display_context_end_character !== "*" && 
            display_context_end_character !== "-" && display_context_end_character !== "+" && display_context_end_character !== "/" && display_context_end_character !== "."){
             display.innerText += value;
            }
            break;
   
                     
         case "+/-": 
         operand1=display.textContent;
         var display_context_end_character=operand1[operand1.length-1];
         var display_context_start_character=operand1[0];
         if(operand1 === ""){
         display.innerText = "-";
         
         }else if( display_context_start_character!="-" && display_context_end_character !== "%" &&  display_context_end_character !== "*" && 
         display_context_end_character !== "-" && display_context_end_character !== "+" && display_context_end_character !== "/" && display_context_end_character !== "."){
            display.innerText = "-"+display.innerText;
         }
      
            break;
   
            
            case "=":  
            operand1=display.textContent;
            var display_context_end_character=operand1[operand1.length-1];
            //if(previous !== "%" || display_context_end_character !== "*" ||previous !== "-" ||
            // display_context_end_character !== "+" ||previous !== "/" ||previous !== "+/-" ){
           if(  operand1!==""){
               var result=eval(display.textContent);
               display.innerText=result; 

            }
            break;

            case "<=": 
            operand1=display.textContent;
            if(  operand1!==""){
            // display.innerText += value;
            // var t=parseInt(display.textContent);
           var remain="";
           for(var i=0;i<=operand1.length-2;i++){
              remain +=operand1[i];
           }
            
            // operand1.pop();
            // operand1.push("");
            // console.log(operand1, operand1[operand1.length-1]);
            display.innerText = remain;
            
            }
              break;
              
         default:
            display.innerText += value;//value =string
      

      }
        });
}








// else if( display_context_end_character === "%" ||  display_context_end_character === "*" || 
//             display_context_end_character === "-" || display_context_end_character === "+" || display_context_end_character === "/" || display_context_end_character === "."){
//                // operand1[operand1.length-1]="+";
//                operand1.pop();
//                operand1.push("+");
//                display.innerText = operand1;
//             }
    
      //    if(value === "="){
      //       // operand2=parseFloat();
      //       var result=eval(display.textContent);
      //       display.innerText=result;
            

      //      }else if(value === 'AC'){
      //       display.innerText="";
      //   }
      //   else if(value === '<='){
      //      var t=parseInt(display.textContent);
      //      display.innerText = parseInt(t/10);
      //   }
      //    else{
      //       display.innerText += value;//value =string
      //      }
// // if(value == "+"){
// //     // operand1= display.textContent;// .innerText// in form
// //     //of string this value convert to no.

// //     operand1=parseFloat(display.textContent);
// //     operator=value;
// //     display.innerText="";

// //    }else



// var display=document.getElementById("app-display-screen");

// var button=document.getElementById("nine");//not s

// button.addEventListener("click",function(){
   
//    display.innerText ="9"//value
// });       




// console.log("jiinadjf");