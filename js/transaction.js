

document.getElementById('btn-deposit').addEventListener('click', function() {
  let depositField = document.getElementById('deposit-field');
  let newDepositAmountString = depositField.value;
  let newDepositAmount = parseFloat(newDepositAmountString);

  depositField.value = '';


  if (isNaN(newDepositAmount)) {
    alert('please enter number only!')
    return;
  }

  let depositTotalElement = document.getElementById('deposit-total');
  let pastDepositTotalString = depositTotalElement.innerText;
  let pastDepositTotal = parseFloat(pastDepositTotalString);


   const currentDepositTotal = newDepositAmount + pastDepositTotal;
   depositTotalElement.innerText = currentDepositTotal;

   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
   balanceTotalElement.innerText = currentBalanceTotal;


})