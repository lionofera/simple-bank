document.getElementById('btn-withdraw').addEventListener('click', function() {
  let withdrawField = document.getElementById('withdraw-field');
  let newWithdrawAmountString = withdrawField.value;
  let newWithdrawAmount = parseFloat(newWithdrawAmountString);

  
  withdrawField.value = '';

  if (isNaN(newWithdrawAmount)) {
    alert('please enter number only!')
    return;
  }


  let withdrawTotalElement = document.getElementById('withdraw-total');
  let pastWithdrawTotalString = withdrawTotalElement.innerText;
  let pastWithdrawTotal = parseFloat(pastWithdrawTotalString);



  const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);


   if (newWithdrawAmount > previousBalanceTotal) {
    alert('not enough balance');
    return;
   }

   const currentWithdrawTotal = pastWithdrawTotal + newWithdrawAmount;
   withdrawTotalElement.innerText = currentWithdrawTotal;

   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
   balanceTotalElement.innerText = newBalanceTotal;

  withdrawField.value = '';

})