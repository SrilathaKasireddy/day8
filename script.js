//Write a “person” class to hold all the details.

class Person{
constructor(firstName,lastName,age,address,email,qualification,occupation,phoneno){
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
this.address = address;
this.email = email;
this.qualification = qualification;
this.occupation = occupation;
this.phoneno = phoneno;


}}
var object1= new Person("srilatha","kasireddy",16,"hyderabad","srilatha@gmail.com","btech","student",91111111);

console.log(object1.phoneno);

//write a class to calculate uber price.


class Uberprice{
constructor(km,price){
this.km = km;
this.price=price;
}
calprice(){
return (this.price*this.km)
}
}
var object1 = new Uberprice(1,6);

console.log(` Uber price per ${object1.km}km  is ${object1.price}rupees`);

console.log(object1.km*object1.price);



//Convert the UML diagram to Typescript class. - use number for double

class Circle {
 constructor(radius,color) {
     this.radius = 1.0;
     this.color = "Red";
     if (typeof (radius) !== "undefined") {
      this.radius = radius;
  }
  if (typeof (color) !== "undefined") {
      this.color = color;
  }
 }
 getRadius() {
     return this.radius;
 };
 setRadius(radius) {
     this.radius = radius;
 };
getColor() {
     return this.color;
 };
 setColor(color) {
     this.color = color;
 };
 toString(){
     return "Radius: " + this.radius + " Color: " + this.color;
 };
 getArea() {
     return (2 * (Math.PI) * this.radius);
 };
 getCircumference() {
     return (2 * this.radius);
 }}


var c1 = new Circle();
console.log(c1.toString());
var c2 = new Circle(4.5,"blue");
console.log(c2.toString());
var c3 = new Circle(2.2, 'Yellow');
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());


//Class - Movie

class Movie{

constructor(title,studio,rating){

this.title = title;
this.studio =studio;
this.rating = "PG";

if (typeof (rating) !== "undefined") {
 this.rating = rating;
}
}
settitle(){
this.title = title
 
}
setstudio(){
this.studio = studio
 
}
toString(){
 return "title: " + this.title + " studio: " + this.studio + " rating: " +  this.rating;
}

setrating(){
this.rating = rating;
 
}
getPG(){

if(this.rating==="PG"){
return this.title
}}};
var m1=new Movie("Casino Royale", "Eon Productions","PG13");
console.log(m1.rating)
var m2=new Movie("Royale", "Productions");
console.log(m2.rating)
var m3 =new Movie(["casino","dreams","royal"],"Eon Productions","PG")
console.log(m3.getPG())
var m4=new Movie("Casino Royale", "Eon Productions","PG13")
console.log(m4.toString())
