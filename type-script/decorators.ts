function LogClass(constructor: Function){
    console.log(constructor.name) 
}

function LogMethod(target: Object, key: string, descriptor: PropertyDecorator){
    console.log(key)
}

//@LogClass
class Plane {
    private id: number

    constructor(id: number){
        this.id = id
    }

    //@LogMethod//дополнительный функционал 
    getId(){
        return this.id
    }
}