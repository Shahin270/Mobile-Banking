document
.getElementById("cashout")
.addEventListener('click',function(event){
    event.preventDefault();
    const accountPin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(accountPin)

    const cashoutAmount = document.getElementById('amount').value;
    const convertedAmount = parseInt(cashoutAmount);
    const mainBalance = document.getElementById('main-balance').innerText
    const convertedBalance = parseInt(mainBalance);
    if( convertedPin === 1234){
        const sum = convertedBalance - cashoutAmount
        document.getElementById('main-balance').innerText = sum
        

    }
    else{
        alert("Enter Valid Pin ")
    }

    

})