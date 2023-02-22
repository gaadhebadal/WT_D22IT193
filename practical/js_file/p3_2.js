function string_rev(){
       var str=document.getElementById("str").value;
       var rev= str.split("").reverse().join("");
       document.getElementById("reverse").innerHTML = rev;
}
