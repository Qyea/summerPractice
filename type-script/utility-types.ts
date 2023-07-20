interface ICar{
    id:number
    name:string
    price:number
    yearBuilt:number
}

interface ICarCreate extends Omit<ICar,'id'>{}//удаляет поле
interface ICarId extends Pick<ICar,'id'>{}//выбирает поле
interface IOptionalCar extends Partial<ICar>{}//делает все поля необязательными
interface IRequiredCar extends Required<ICar>{}//делает все поля обязательными(если они были необязательными)
interface IReadOnlyCarId extends Readonly<ICar>{}//

type TypeGetName = () => string
type Return = ReturnType<TypeGetName>

type TypeCarRecord = Record<'name' | 'price', string | number> //поля name и price могут 
//быть как string, так и number

interface ICarId extends Pick<ICar,'id'>{}

type Any = Extract<'max' | 'andrey', 'andrey' | 'misha'> //возвращает одинаковые совпадения
//т.е. "andrey"

type Excl = Exclude<'max' | 'andrey', 'andrey' | 'misha'>

type NotNull = NonNullable<string | number | null | undefined>//удаляет все null и indefined

