document.getElementById('btn-submit').addEventListener('click', function() {
   const email = document.getElementById('user-email').value;
   const password =  document.getElementById('user-password').value;
   console.log(email, password);

   if(email === 'abcd@gmail.com' && password === 'hidden1234') {
    window.location.href = 'bank.html';
   }
   else {
    alert('invald user!!!')
   }
})