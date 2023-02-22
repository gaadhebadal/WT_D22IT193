class Person {
       constructor(name, id) {
              this.name = name;
              this.id = id;
       }
       set() {
              return "Heyy ! my NAME is " + this.name + " and my ID " + this.id + ".";
       }
}
let person1 = new Person("Badal", 193);
document.getElementById("p1").innerHTML = person1.set();