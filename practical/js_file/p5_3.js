var arr = ["blue", "red", "green", "white",]
for (let i = 0; i < 4; i++) {
       let x = document.getElementById("tr" + i)
       x.style.backgroundColor = arr[i];
}