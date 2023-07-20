var EnumRoles;
(function (EnumRoles) {
    EnumRoles[EnumRoles["ADMIN"] = 0] = "ADMIN";
    EnumRoles[EnumRoles["GUEST"] = 1] = "GUEST";
    EnumRoles[EnumRoles["USER"] = 2] = "USER";
})(EnumRoles || (EnumRoles = {}));
var userEnum = {
    role: EnumRoles.ADMIN,
    color: 0 /* EnumColors.black */
};
console.log(EnumRoles[EnumRoles.ADMIN]);
