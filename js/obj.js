
const person ={
    firstName : "john",
    lastName : "DuraiRaj",
    Id : 5566,
    fullName: function(){
        return this.firstName + " " + this.lastName+ " "+ this.Id;
    }
};
person.name = function(){
    return this.firstName+ " " + this.lastName;
};
document.write(person.fullName()+ "<br/>");
document.write("my father is" +" "+ person.name());