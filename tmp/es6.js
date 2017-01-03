/*String interpolation*/
let x = 10, y = 5;
//console.log(`${x} , ${y}`)
  /*Multi-line strings*/
let es5Template = '\
   <!doctype html>\n\
   <html>\n\
    <head>\n\
    </head>\n\
    <body>\n\
    </body>\n\
   </html>';
let es6Template = `
   <!doctype html>
   <html>
    <head></head>
    <body></body>
   </html>`;
/*Arrow function*/
let array = [1,2,3]
let square = array.map( (x) =>  x*x )
/*Multiple return values via array*/
  //ES5
let pattern = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2222-33-11');
let val0 = pattern[0] //return whole match string
let val1 = pattern[1]
let val2 = pattern[2]
let val3 = pattern[3]
//ES6
let [, r1,r2,r3] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2222-33-11');
//console.log(`${r1} ${r2} ${r3}`)
  /*Multiple return values via object*/
let sampleObject = {foo : 123}
let {writable,configurable} = Object.getOwnPropertyDescriptor(sampleObject,'foo')
//console.log(`${writable} , ${configurable}`);
  /*for-of loop*/
let sampleArray = ['a','b','c']
for(let [index,item] of sampleArray.entries()) {
    //console.log(`${index} - ${item}`)
  }
/*named parameters*/
let objectOptions = {start:1,end:10,step:1}
//ES5
let es5SampleFunc = function selectEntries(options){
    option = options || {} //prevent missing parameter
    var start = option.start || 2
    var end = option.end || 12
    var step = option.step || 2
    //console.log(`${start} - ${end} - ${step}`);
  }
//es5SampleFunc(objectOptions
  //es5SampleFunc();
  //ES6
let es6SampleFunc = function selectEntries({start=2,end=12,step=2} = {}){
    //console.log(`${start} - ${end} - ${step}`);
  }
//es6SampleFunc({start:1,end:10,step:1})
  //es6SampleFunc()
  /*Rest parameter*/
  //ES5
function sampleMultiParamFunc(){
    for(let count = 0; count < arguments.length; count++){
      //console.log(`Argument value: ${arguments[count]}`)
    }
  }
//sampleMultiParamFunc(1,2,3,4,5)
  //ES6
function sampleES6MultiParamFunc(pattern,...optionals){
    for(let count of optionals){
      //console.log(`${count}`)
    }
  }
//sampleES6MultiParamFunc(1,2,3,4,5)
  /*The spread operator*/
let sampleArr1 = ['a','b']
let sampleArr2 = ['c']
let sampleArr3 = ['d','e']
//console.log([...sampleArr1, ...sampleArr2, ...sampleArr3])
  /*Class and OOP in ES6*/
  //ES5
function es5Person(name){
    this.name = name
  }
es5Person.prototype.describe = function(){
    return 'Hello ' + this.name
  }
function es5Employee(name,title){
    es5Person.call(this,name)
    this.title = title
  }
es5Employee.prototype = Object.create(es5Person.prototype)
es5Employee.prototype.constructor = es5Employee
es5Employee.prototype.describe = function(){
    return Person.prototype.describe.call(this)+' '+this.title
  }
var Hawl = new es5Employee('Hawl King','CEO')
//console.log(Hawl.describe())
  //ES6
class Person{
    constructor(name){
      this.name = name
    }
    describe(){
      return "My name is " + this.name
    }
  }
class Employee extends Person{
  constructor(name,title){
      super(name)
      this.title = title
    }
  describe(){
      return super.describe()+' '+this.title
    }
}
var Tommy = new Person('Tommy Time')
//console.log(Tommy.describe())
console.log('H'.charCodeAt(0))
