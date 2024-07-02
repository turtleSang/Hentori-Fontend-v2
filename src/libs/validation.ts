let rengexUsername: RegExp = /^[a-zA-Z0-9]{4,12}$/;
let regexPasswowrd: RegExp = /^[a-zA-Z0-9]{6,16}$/;
let regexPhoneNumber: RegExp;

export function checkUsername(txt: string) {
    return rengexUsername.test(txt)
}

export function checkPassword(txt: string) {
    return regexPasswowrd.test(txt)
}

export function checkConfirmPassword(txt: string, txtValue: string) {
    return txt === txtValue;
}