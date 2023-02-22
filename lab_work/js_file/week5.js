// const ob1 =document.getElementById("b1");
// ob1.addEventListener("click", testEvents2());

// function testEvents2() {
//        console.log("do event");
// }
// ob1.addEventListener("click", function(){
// testEvents2();
// });

/*
inline -- html
addEventListener
.onEvent =
 */
//================================================================

// const demo=[1,'Badal',1.2,testEvent(),998];  // array 

// in compare === type also same 
//===============================================================

// function a(){ console.log("a fi]unction");}
// function basicExample(cond_para, fun){
//        if(cond_para==="12")
//               fun();
//         }
// basicExample('12',a);
// callback
//===============================================================

// setInterval(function(){document.body.style.backgroundColor="red";}, 2000);
// setInterval(function(){document.body.style.backgroundColor="green";}, 3000);
// setInterval(function(){document.body.style.backgroundColor="blue";}, 4000);

//===============================================================

// setTimeout(function() {
// document.body.style.backgroundColor="green";       
// }, 5000);

//===============================================================

// const ob1 =document.getElementById("b1");
// ob1.addEventListener("click", function(){});
// ob1.removeEventListener();
// clearInterval();
// clearTimeout();



const b1 = document.getElementById("b1");
b1.addEventListener("click",function(){

       setInterval(function(){
              const date = new Date();
              var c_t=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
              document.getElementById('h1').innerHTML=c_t; 
              var c_d=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
              document.getElementById('h2').innerHTML=c_d;
       
       });
});


