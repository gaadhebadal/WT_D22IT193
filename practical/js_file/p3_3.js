function createTable() {
       let r = document.getElementById('rows').value;
       let str = '';
       for (let i = 1; i <= 10; i++) {
           str = str + r + ' * ' + i +' = '+ r*i + "<br>";
       }
       document.getElementById('p').innerHTML=str;
   }