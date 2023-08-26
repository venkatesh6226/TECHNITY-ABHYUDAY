const form = document.getElementById("form")
const uname = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")
const tandc= document.getElementById("tandc")
let count = 0

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validate()
    if(count==5){
        setTimeout(() => {
            alert("Form submitted successfully!");
                window.location.reload();
        }, 0);
    }
})

function validate(){
    count = 0;
    let nameValue = uname.value
    let emailValue = email.value
    let passwordValue = password.value
    let password2Value = password2.value

    if(nameValue === '')
        setError(uname,'User name cannot be empty')
    else if(nameValue.length<6)
        setError(uname,'User name should be minimum 6 characters')
    else{
        setSuccesss(uname)
        count++
    }

    if(emailValue === '')
        setError(email,'Email cannot be empty')
    else if(!emailCheck(emailValue))
        setError(email,'Enter Valid Email Id')
    else{       
        setSuccesss(email)
        count++
    }

    if(passwordValue === '')
        setError(password,'Password cannot be empty')
    else if(!passwordCheck(passwordValue)){
        (password.parentElement).classList.add('adjust')
        setError(password,'Password must contain at least 8 characters, including a uppercase, lowercase letter, digit, and a special symbol')
    }
    else{        
        setSuccesss(password)
        count++
    }

    if(password2Value==='')
        setError(password2,'Password cannot be empty')
    else if(password2Value !==passwordValue)
        setError(password2,'Passwords not matched')
    else{       
        setSuccesss(password2)
        count++
    }

    if(!tandc.checked)
        setError(tandc,'Please agree the terms & conditions')        
    else{
        setSuccesss(tandc)
        count++
    }
    
    function setError(input,message){
        let parent = input.parentElement;
        let small = parent.querySelector('small')
        small.innerText = message
        parent.classList.add('error')
        parent.classList.remove('success')
    }
    function setSuccesss(input){
        let parent = input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
    }
    function emailCheck(input){
        let emailFormat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let valid = emailFormat.test(input)       
        return valid
    }
    function passwordCheck(input){
        let passFormat = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let valid = passFormat.test(input)
        return valid
    }
}


