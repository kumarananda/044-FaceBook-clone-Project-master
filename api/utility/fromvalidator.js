

// regestration form validation
const regFormvalidator = (data) => {
    const error = {};

    // empty fild validation
    if(!data.phoneORemail){
        error.phoneORemail = "Phone no or Email is required"
    }
    if(!data.first_name){
        error.first_name = "First name is not empty!"
    }
    if(!data.surname){
        error.surname = "Surename is not empty!"
    }
    if(!data.password){
        error.password = "Password is not empty!"
    }
    if(!data.birth_date || !data.birth_month || !data.birth_year){
        error.password = "Date of birth is required!"
    }
    if(!data.password){
        error.password = "Password is not empty!"
    }
    

    return {
        error,
        isValid : Object.keys(error).length === 0
    }


}
module.exports =  regFormvalidator;
// phoneORemail, first_name, surname,  password, birth_date, birth_month, birth_year, gender