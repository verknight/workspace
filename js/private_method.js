//Private members are made by the constructor
//Private methods are inner functions of the constructor
function Container(param) {
  this.member = param;
  let secret = 3;
  let that = this;
  function dec() {
    if(secret > 0){
      secret -= 1;
      return true;
    }else{
      return false;
    }
  }
  //Privileged methods are able to access
  //the private variables and methods and 
  //accessible to the public methods and the outside
  this.service = function(){
    return dec() ? that.member : null;
  }
}
