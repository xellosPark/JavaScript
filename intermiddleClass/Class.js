const Uesr = function (name, age){
    this.name = name;
    this.age  = age;
    this.showName = function() {
        console.log(this.name);
    };
};

const mike = new Uesr('Mike', 30);

class User2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    }
}

const tom = new User2("Tom",19);