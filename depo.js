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


/*1. get the element by id
2. get the value from the element
3. convert String value to a nuuber
*/

document.getElementById('btn-deposit').addEventListener('click', function(){
    
    
    //console.log('btn-deposit  click me')


    const newDepositAmount = getInptFieldValueById('deposit-field');
    const previousDepositTotal =  getTextElementValueById('deposit-total');
    
    //console.log(newDepositAmount);

    // calculate new deposit total
     const  newDepositTotal= previousDepositTotal + newDepositAmount;
     // set deposit tatal value
     setTextElementVlaueById('deposit-total', newDepositTotal);
    // get previos balanc by usig the function
     const previousBalanceTotal = getTextElementValueById('balance-total');
     const newBalanceTotal = previousBalanceTotal + newDepositAmount;
     setTextElementVlaueById('balance-total', newBalanceTotal);


   
})