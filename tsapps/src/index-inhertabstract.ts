//abstract classes

abstract class Animal {
    abstract eat(): string;
    //non abstract method
    public saveAnimals() {
        console.log("Save Animals from hunters and global warming")
    }
}
class Tiger extends Animal {
    eat(): string {
        return 'Tiger eats meat'
    }
}
class Lion extends Animal {
    eat(): string {
        return 'Lion eats meat'
    }
}
let tiger = new Tiger();
console.log(tiger.eat())
tiger.saveAnimals()

let lion = new Lion();
console.log(lion.eat())
lion.saveAnimals()