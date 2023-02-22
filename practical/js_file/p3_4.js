function ageCalculator() {  
       var date = document.getElementById("DOB").value;  
       var dob = new Date(date);  
       var month_diff = Date.now() - dob.getTime();  
       var age_dt = new Date(month_diff);   
       var year = age_dt.getUTCFullYear();    
       var age = Math.abs(year - 1970);  
       return document.getElementById("result").innerHTML ="Your are: " + age + " years old. ";   
   }  