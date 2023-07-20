interface IUserAge {
    age:number
}

interface IUser extends IUserAge{
    name:string
    email:string
}

type TypePerson = {
    age:number
}

type TypeUser = {
    name:string
    email:string
} & TypePerson

const user:IUser = {
    email : 'kreshess@mail.ru',
    name: 'Nastya',
    age: 19
}

const users: IUser[] = [user]