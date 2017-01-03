//Always follow: RECEIVING [INPUT] AND RETURN [OUTPUT]
//Keep your function pure
const name = 'fish';
//NOT PURE:
function greeting(){
  return "Hello, "+name;
}
//PURE:
function greeting(someone_name){
  return "Hello, "+someone_name;
}
//Keep value immutable
//Instead of changing the value of the variable
//create a copy of it and working on the modified one.

//Don't iterate over lists.
//use map(); reduce(); or filter(); instead
let customerList = [
  {'id': '01', 'name': 'Henry'},
  {'id': '02', 'name': 'Mahattan'},
  {'id': '03', 'name': 'Jones'},
  {'id': '04', 'name': 'Mary Jone'},
  {'id': '05', 'name': 'Tokayaki'},
  {'id': '06', 'name': 'Jones'},
  {'id': '07', 'name': 'Jones'}
];
// customerList.map(function(customer){
//   return customer.name.toUpperCase();
// });
let listObj = {
  jones: {'id':'01','name':'jones'},
  kim: {'id':'02','name':'kim'},
  mahattan: {'id':'03','name':'mahattan'},
  henry: {'id':'04','name':'henry'}
};
function GetCustomerByName(value,index,arr) {
  if(value.name === 'mahattan'){
    return arr[index];
  }
}
let result = customerList.filter(GetCustomerByName);
result.forEach(function(item){console.log(`ID: ${item.id} with ${item.name}`);});


