const MongoClient = require('mongodb').MongoClient,
      assert = require('assert');
const url = "mongodb://localhost:27017/myproject"    

let insertDocument = function (db,callback) {
  let collection = db.collection('documents');
  collection.insertMany([
    {a:1},{a:2},{a:3}
  ],function (err,result) {
    assert.equal(null,err);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log(`Inserted 3 documents into the collection`);
    callback(result);
  });
}

MongoClient.connect(url,function MongoCallback(err,db) {
  assert.equal(null,err);
  console.log(`Connect successfully`);
  insertDocument(db,function (result){
    console.log(`${result.ops[0].toString()}`);
    db.close();
  });
});
