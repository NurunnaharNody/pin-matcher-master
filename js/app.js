function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length==4){
        return pin;
    }
    else{
        // console.log('got 3 digit so call again',pin);
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number =event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value='';
        }
    }
    else{

   const previusNumber = calcInput.value;
   const newNumber = previusNumber + number;
   calcInput.value = newNumber;
    }
});

function verifyPin(){
   const pin = document.getElementById('display-pin').value;
   const typedNumbers = document.getElementById('typed-numbers').value;
   const seccessMesage = document.getElementById('notify-success');
   const failMessage = document.getElementById('notify-fail');

   if(pin == typedNumbers){
         seccessMesage.style.display='block';
         failMessage.style.display='none';
   }
   else{
       failMessage.style.display='block';
       seccessMesage.style.display='none';
   }
}
