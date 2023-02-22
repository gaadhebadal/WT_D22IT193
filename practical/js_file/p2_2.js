function fun(option){
       var a=document.getElementById('a').value;
       var b=document.getElementById('b').value; 
       console.log(a);
       console.log(b);
       var p=document.getElementById('ans'); 
       a=parseInt(a);
       b=parseInt(b);
       if(option=='+'){ p.innerHTML=`Addition = ${a+b}`}
       else if(option=='-'){ p.innerHTML=`Subtraction = ${a-b}`}
       else if(option=='*'){  p.innerHTML=`Multiplication = ${a*b}`}
       else if(option=='/'){ p.innerHTML=`Division = ${a/b}` } 
}