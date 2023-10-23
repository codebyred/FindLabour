function validate_email(email){

    if(email.trim() === "")

        return "Please provide email";

    return "";

}

function validate_password(password){
    
    if(password.trim() === "")

        return "Please provide password";
    
    if(password.length < 4)

        return "Password should be 4 characters long"

    return "";


}

function matchPassword(password, confpass){

    if(password !== confpass)

        return "password does not match";

    return "";
}

export default {
    validate_email,
    validate_password,
    matchPassword
}
