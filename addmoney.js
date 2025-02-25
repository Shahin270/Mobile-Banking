document
.getElementById("add-money")
.addEventListener('click', function(event){
    event.preventDefault();
    const amount =document. getElementById("Amount")
    .value;
    const convertAmount = parseInt(amount);
    const pin = document.getElementById("account-pin").value;
    const convertedPin = parseInt(pin)
    const mainBalance = document. getElementById("main-balance").innerText
    const convertMainBalance = parseInt(mainBalance)

    if(convertedPin === 1234){
        sum = convertMainBalance + convertAmount;
        // console.log(sum)
        document. getElementById("main-balance").innerText = sum;
        console.log(sum)
        
    }
    
    else{
        console.log('Nothing will add')

    }


})