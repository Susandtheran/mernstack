

class Car{
    constructor(name, year){
        this.name= name;
        this.year = year;
    }
    age(X){
        return X - this.year;
    }
}
let date = new Date();
let year = date.getFullYear();
let myCar = new Car("Ford", 2001);
document.write("My car is" + " "+ myCar.age(year)+" " + "years old.");
