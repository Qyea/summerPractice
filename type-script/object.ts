type TypeUser = {
    name:string
    age:number
}

type TypeAddress = {
    city:string
    country:string
}

const user:TypeUser = {
    age: 24,
    name: 'Max'
}

const address:TypeAddress ={
    city: 'SPB',
    country:'Russia'
}

let common:TypeUser & TypeAddress

common ={
    ...user, 
    ...address
}