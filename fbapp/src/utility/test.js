

// six digite  validation 
 const passwordValid = (data) => {
    let passtest = (/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/).test(data)
    return passtest    
}
// (?=.*[0-9]) - Assert a string has at least one number;
// (?=.*[!@#$%^&*]) - Assert a string has at least one special character.
// (?=.*[a-zA-Z]) - Assert a string has at least one letter.
// minium six max 16
// Password must be at least one special character (!@#$%^&*), one number, one (a-z or A-Z) and (?=.*) are not allword
console.log(passwordValid('*@66Aa'));
