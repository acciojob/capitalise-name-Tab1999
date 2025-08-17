//your JS code here. If required.
const inputField = documen.getElementById('fname');

inputField.addEventListener("blur", function(){
     inputField.value =inputField.value.toUpperCase();
})