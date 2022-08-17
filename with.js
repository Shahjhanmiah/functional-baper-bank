/*
1.  add withdraw button event handler
2. get width amount by using getInputFiledValueById function
3. get Withdraw amount by using getTextElementvalueById function
4. calcuaate new withdraw  total and set the vaue 
4.5. set new withdraw total by using  setTextElementVlaueById 
5. get the previous balance total by using getTextElementValueById  function

*/
document .getElementById('btn-withdraw').addEventListener('click', function(){
    //console.log('btn-withdraw');
    const newWithdrawAmount = getInptFieldValueById('withdraw-field');
    //console.log(newWithdrawAmount);
    const previousWithdrawTotal= getTextElementValueById('withdraw-total');
     const newWithdrawTotal= previousWithdrawTotal + newWithdrawAmount;
     setTextElementVlaueById('withdraw-total', newWithdrawTotal);
     const previousBalanceTotal= getTextElementValueById('balance-total');
     const newBalanceTotal =previousBalanceTotal - newWithdrawAmount;
     setTextElementVlaueById('balance-total', newBalanceTotal);
    






})