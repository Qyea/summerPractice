const inputElement = document.querySelector('input')
const value1 = (inputElement as HTMLInputElement).value
const value2 = (<HTMLInputElement>inputElement).value

const getLength = (text:string | null) =>{
    return text!.length // При компиляции выдаст ошибку, а с ?  не выдает
    //нужен, если хочется избежать значений null и undefind
}

getLength(null)
getLength('JDjdj')