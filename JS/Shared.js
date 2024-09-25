function getTextValueById(id){
    const text_value=document.getElementById(id).innerText;
    const textNumber=parseFloat(text_value);
    return textNumber;
}
function getInputValueById(id){
    const inputDonate=document.getElementById(id).value;
    const donateNumber=parseFloat(inputDonate);
    return donateNumber;
}

function getTextById(id) {
    const text_values=document.getElementById(id).innerText;
    return text_values;
}
