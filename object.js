class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
       
    } 

    talk() {
        console.log(`${this.name} speaks`);
    }

  
} 






class Man extends Human {

}


const Imma = new Man("Imma", 20)
Imma.talk()
