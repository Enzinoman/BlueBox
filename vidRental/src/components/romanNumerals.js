var romanToInt = function(s) {
    let previousNum;
    let currentNum = 0;
    let tally = 0;
  
    for(let i = s.length-1; i > 0; i--){
  
      if(s[i] === "M"){
        currentNum = 1000;
        previousNum = s[i+1];
  
      }
      if(s[i] === "D"){
        currentNum = 500;
        previousNum = s[i+1];
      }
      if(s[i] === "C"){
        currentNum = 100;
        previousNum = s[i+1];
      }
      if(s[i] === "L"){
        currentNum = 50;
  
      }
      if(s[i] === "X"){
        currentNum = 10;
        previousNum = s[i+1];
      }
      if(s[i] === "V"){
        currentNum = 5;
  
      }
      if(s[i] === "I"){
        currentNum = 1;
        previousNum = s[i+1];
      }
    }
      
      if(previousNum !=NaN && previousNum != null && previousNum !=undefined){
  
        if(currentNum < previousNum){
            tally = tally - currentNum;
        }else{
            if(currentNum > previousNum){
            tally = tally + currentNum;
        }
        else{
            tally = currentNum;
        }
  
      }
      
      
  
    }
      return tally;
  }
  
      console.log(romanToInt('MCMXCIV'));