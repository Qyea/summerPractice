enum EnumRoles{
    ADMIN  = 0, 
    GUEST = 1, 
    USER = 2,
}

const enum EnumColors{
    black, 
    pink, 
    green,
}

interface IUserEn{
    role: EnumRoles
    color: EnumColors
}

const userEnum: IUserEn = {
    role: EnumRoles.ADMIN,
    color: EnumColors.black
}

console.log(EnumRoles[EnumRoles.ADMIN])