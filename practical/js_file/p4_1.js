let srui = { name: "Badal",branch: "IT",id: "D22IT193",sem: '4th'}
let tbl = document.getElementById("t");
 function fun() {
       Object.entries(srui).forEach(([key, value]) => {
              var tr = document.createElement('tr');
              var td = document.createElement('td'); 
              td.innerHTML = key;
              tr.appendChild(td);
              tbl.appendChild(tr);
              td = document.createElement('td');
              td.innerHTML = value; 
              tr.appendChild(td);
              tbl.appendChild(tr);
       });
}
let btn = document.getElementById('show'); btn.onclick = () => {fun()}