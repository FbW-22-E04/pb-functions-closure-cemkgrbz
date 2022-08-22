//1

/**
 * Closure means that a function remembers its lexical scope even if it is called by another lexical scope.
 */

//2

//a

/**
 * In the scope of "personalDice" function there s another function running and it calculates the roll of a dice. After the inner function there re two variables which re using this inner function. And at the end new variables behave like functions. The closure is there.
 */

 function personalDice(name){
    return function(){
        // generate random number between 1 and 6
      const newRoll = Math.floor(Math.random() * 6) + 1;
      console.log(`${name} rolled a ${newRoll}`)
    }
  }
  
  const dansRoll = personalDice("Dan");
  
  const zoesRoll = personalDice("Zoe");
  
  
  dansRoll();
  dansRoll();
//   zoesRoll();

//b

/**
 * The name is always same but the dice changes since it defined in the inner function.
 */

//c

/**
 * Inner function
 */

//3

function createBase(n){
   return function addSix(x){
    console.log(n + x)
   }
}

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27