


function giveMeARandomNumber(min, max) {
  let num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

export default function giveMeAPsw(key) {
  //use lowercase, uppercase, numbers and symbols
  //16 digits long
  let seed = 0;
  let keyCharArray = key.split('');
  keyCharArray.forEach((item) => {
    seed += item.charCodeAt(0);
  });

  let psw="";
  while(psw.length < 16){
    seed += Date.now();
    const lastDigit = seed % 10;

    if(lastDigit === 2 || lastDigit === 3){
      //lowercase
      psw += String.fromCharCode(giveMeARandomNumber(97,122));
    }else if(lastDigit === 4 || lastDigit === 5){
      //uppercase
      psw += String.fromCharCode(giveMeARandomNumber(65,90));
    }else if(lastDigit === 6 || lastDigit === 7){
      //number
      psw += String.fromCharCode(giveMeARandomNumber(48,57));
    }else if(lastDigit === 8 || lastDigit === 9){
      //symbol
      psw += String.fromCharCode(giveMeARandomNumber(33,47));
    }
  }

  return (psw);
}
