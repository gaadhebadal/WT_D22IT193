function cal() {
       var first = new Date(document.getElementById("fd").value);
       var second = new Date(document.getElementById("sd").value);
       let r = parseInt((first - second) / (24 * 3600 * 1000));
       document.getElementById("result").value = r;
}