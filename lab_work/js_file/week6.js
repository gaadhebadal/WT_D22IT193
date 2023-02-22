class Man {
  constructor(name) {
    this.name = name;
  }
  dis(){return this.name;}
}
class Student extends Man{
  constructor (name,no){
    super(name);
    this.no = no;
  }
  show(){
      return "name : "+super.dis()+" no. :"+this.no;;
  }

}
let m = new Student("Badal","193");
// let m1 = new Man("Badal  Gaadhe ");
//let s=new Student();
//document.getElementById("demo").innerHTML="my name is "+m.dis();
document.getElementById("demo1").innerHTML=m.show();