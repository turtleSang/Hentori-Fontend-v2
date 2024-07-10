let rengexUsername: RegExp = /^[a-zA-Z0-9]{4,12}$/;
let regexPasswowrd: RegExp = /^[a-zA-Z0-9]{6,16}$/;
let regexPhoneNumber: RegExp;

export function checkUsername(txt: string) {
    return { check: rengexUsername.test(txt), txtArlert: "Tên đăng nhập gồm chữ và số và không quá 12 ký tự" }
}

export function checkPassword(txt: string) {
    return { check: regexPasswowrd.test(txt), txtArlert: "Mật khẩu gồm chữ và số và không quá 16 ký tự" }
}

export function checkConfirmPassword(txt: string, txtValue: string) {
    return txt === txtValue;
}