//console.log('utlise');

function getInptFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString =inputField.value;
    const inputFieldValue= parseFloat(inputFieldValueString);
    inputField.value='';
    return inputFieldValue;
}

   // return inputField;

 function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementString = textElement.innerText;
    const textElementValue = parseFloat(textElementString);
    return textElementValue;
 }
 function setTextElementVlaueById(elementId,newValue){
    const textElement =document.getElementById(elementId);
    textElement.innerText=newValue;
    
 }