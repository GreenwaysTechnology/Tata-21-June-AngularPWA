//interfaces

interface Fly {
    fly(): string;
}
interface Eat {
    eat():string;
}

class Bird implements Fly ,Eat {
    eat(): string {
        return 'Bird is eating'
    }

    public fly(): string {
        return 'Bird is Flying'
    }

}
class AeroPlan implements Fly {
    public fly(): string {
        return 'AeroPlan is Flying'
    }
}
let flyingThing = null;
flyingThing = new Bird() as Fly
console.log(flyingThing.fly())
console.log(flyingThing.eat())

flyingThing = new AeroPlan() as Fly
console.log(flyingThing.fly())