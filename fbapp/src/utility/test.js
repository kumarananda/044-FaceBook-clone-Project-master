
// mail validation 
const validateEmail = (mail) => {
    const mailPattrn = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*[a-z][.](\w{2,3}+)$/).test(mail)
    return mailPattrn 
}

