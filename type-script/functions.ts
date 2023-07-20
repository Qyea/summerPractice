type TypeChannelReturn = {
    name:string
}

function getChannel(name:string):TypeChannelReturn{
    return { name }
}

//Нельзя написать такую же функцию для нестрелочных функций. Упрощает запись
type TypeChannelFunction = (name:string) => TypeChannelReturn

const getChannelName:TypeChannelFunction = (name) => {
    return { name }
}

//rest операторы
const getNumbers = (...numbers:number[]) => {
    return numbers
}

//функциональные перегрузки
function getCar(name:string):string
function getCar(name:string, price:number):string

function getCar(name:string, price?:number):string{ //Знак '?' значит undefiend
    return price ? `Название ${name}, Цена ${price}`:`Название ${name}`
}

const car1 = getCar('bmw')
const car2 = getCar('bmw', 100000)
//const car3 = getCar('bmw', 100000, 'fwewf') не работает