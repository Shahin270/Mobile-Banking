document
.getElementById("btn-login")
.addEventListener('click', function(event){
    
    event.preventDefault();
    const accountNumber = document.getElementById("account-number")
    .value;
    const accountPin = document.getElementById("account-pin")
    .value;
    const convertPin = parseInt(accountPin);
    console.log(accountNumber,accountPin);
    if(accountNumber.length === 11){
        console.log('Yes')
        if(convertPin === 1234){
            window.location.href="main.html"
        }
        else{
            alert('Enter your valid PIN')
        }
    }
    else{
        alert('Need a valid account number')
    }


   
})