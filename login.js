console.log("Run")
const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    validate()
})

const isEmail = (emailVal) =>
{
    let regex = /^[a-zA-Z0-9._-]+[@]+[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let last = emailVal.slice(-3)
    
    if (regex.test(emailVal) && last==="com")
    {
        console.log("Ban2")
        return true;
    }
    else false;
}

const sendData = (sRate,count) => {
    if (sRate === count)
    {
        console.log("DONE")
        alert("Registration Successful")
        swal("Welcome !","Registration Successfull","success")
    }
    console.log("OOPS")
}
    
// for final data validation
const successMSG = () => {
    
    let formCon = document.getElementsByClassName('form-control')
    var count = formCon.length-1
    var sRate=0
    for (var i = 0; i < formCon.length; i++)
    {
        if (formCon[i].className === "form-control success")
        {
            sRate = i
            console.log(sRate)
            sendData(sRate,count)  
        }
        else
            return false
              
    }
}
const validate = () => {
   
const usernameVal =  username.value.trim()
const emailVal = email.value.trim()
const phoneVal = phone.value.trim()
const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()
  
    if (usernameVal === " ")
    {
        setErrorMsg(username,'username cannot be blank')
    }
    else if (usernameVal.length <= 2)
        setErrorMsg(username, 'username min 3 char')
    else
        setSuccessMsg(username)
    
        if (emailVal === " ")
        {
            setErrorMsg(email,'email cannot be blank')
        }
        else if (!isEmail(emailVal))
            setErrorMsg(email, 'Not a valid email')
        else
        setSuccessMsg(email)
    
    // validate phone
    if (phoneVal === " ")
        {
            setErrorMsg(phone,'mobile number cannot be blank')
        }
     else if (phoneVal.length != 10)
        setErrorMsg(phone, 'Not a valid mobile number')
     else
        setSuccessMsg(phone)
    
    // validate password
    if (passwordVal === " ")
        {
            setErrorMsg(password,'password is required')
        }
        else if (passwordVal.length <= 5)
            setErrorMsg(password, 'Minimum 6 char required')
        else
        setSuccessMsg(password)
    
    // check password
    if (cpasswordVal === " ")
        {
            setErrorMsg(cpassword,'enter password')
        }
    else if (cpasswordVal === passwordVal)
        setSuccessMsg(cpassword)
    else
    {
        setErrorMsg(cpassword, 'password mismatched')
        setErrorMsg(password, 'password mismatched')
    }
    successMSG()
}

function setSuccessMsg(input)
{
    const formControl = input.parentElement
    formControl.className = "form-control success"
    
}

function setErrorMsg(input, errormsg)
{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.className="form-control error"
    small.innerText=errormsg
}