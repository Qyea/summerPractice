type TypeIsNumber<T> = T extends number ? 'yes' : 'no'

type Type1 = TypeIsNumber<number>
type Type2 = TypeIsNumber<string>

type TypeBrand = 'bmw' | 'mclaren' | 'mercedes'
type TypePrice = '$100000' | '$20000' | '$300000'

type TypeCar =`${TypeBrand} ${TypePrice}`

const car1:TypeCar = 'bmw $20000'