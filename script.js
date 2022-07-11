const inputs = document.querySelectorAll('.input');

const handleFocus =({target})=> {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}
const handleFocusOut =({target})=> {
    if (target.value = ''){
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
}
}
    const handleChange = () => {
        const[username,password] = inputs;//primeiro elemento de array de input e segundo array
   if(username.value && password.value.lenght >= 8){
    button.removeAtribute('disabled');
   }else{
    button.setAtribute('disabled','');
   } 

}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusout));
inputs.forEach((input) => input.addEventListener('input', handleChange));