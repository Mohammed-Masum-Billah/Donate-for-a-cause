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