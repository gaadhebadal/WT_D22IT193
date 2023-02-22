function validateForm() {
       try {
         var name = document.getElementById("name").value;
         var email = document.getElementById("email").value;
         var age = document.getElementById("age").value;
         var sport = document.getElementById("sport").value;
     
         if (name == "" || email == "" || age == "" || sport == "") {
           throw new Error("Please fill out all fields.");
         }
         alert("Registration successful!");
         return true;
       } catch (err) {
         var error = document.getElementById("error");
         error.innerHTML = err.message;
         return false;
       }
     }