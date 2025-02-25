document
 .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountPin = document.getElementById("account-pin").value;
    const convertedPin = parseInt(accountPin)

    const amount = document.getElementById("Amount").value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").innerText
    const convertMainBalance = parseFloat(mainBalance);


    if(amount && accountPin){
      if(convertedPin === 1234){
        const sum = convertedAmount + convertMainBalance;
        document.getElementById("main-balance").innerText = sum;
      }
      else{
        alert('enter a valid pin')
      }

    }
    else{
      alert('Please Enter Your Amount')
    }





  })
