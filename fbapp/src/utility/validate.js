// mail validation 
export const validateEmail = (mail) => {
    const mailPattrn = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/).test(mail)
    return mailPattrn 
}

// Phone validation 
export const validatePhoneBD = (phone) => {
    let phonetest = (/^(01|\+8801|8801)[0-9]{9}$/).test(phone)
    return phonetest    
}


// check string validation 
export const checkString = (data) => {
    let stringTest = (/^[a-z0-9@.-]{1,}$/).test(data)
    return stringTest    
}
// check string validation 
export const checkNumber = (data) => {
    
    let numberTest = (/^[+]?[0-9]{1,}$/).test(data)
    return numberTest    
}

// six digite  validation 
export const checkCode6 = (data) => {
    let numberTest = (/^[0-9]{6}$/).test(data)
    return numberTest    
}


// six digite  validation 
export const passwordValid = (data) => {
    let passtest = (/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/).test(data)
    return passtest    
}

// (?=.*[0-9]) - Assert a string has at least one number;
// (?=.*[!@#$%^&*]) - Assert a string has at least one special character.
// (?=.*[a-zA-Z]) - Assert a string has at least a-z or A-Z one letter.
// minium six max 16
// Password must be at least one special character (!@#$%^&*), one number, one (a-z or A-Z) and (?=.*) are not allword
