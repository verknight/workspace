var makeCounter = function(){
  let privateCounter = 0;
  function changeBy(val){
    privateCounter += val;
  }
  return {
    increment: function(val){
      changeBy(val);
    },
    decrement: function(val){
      changeBy(val);
    },
    value: function(){
      return privateCounter;
    }
  }
}
let counter1 = makeCounter();
let counter2 = makeCounter();