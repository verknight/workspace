const MongoClient = require('mongodb').MongoClient,
      assert = require('assert');
const url = "mongodb://localhost:27017/myproject";
let insertDocument = function (db,callback) {
  let collection = db.collection('documents');
  collection.insertMany([
    {a:1},{a:2},{a:4}
  ],function (err,result) {
    assert.equal(null,err);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log(`Inserted 3 documents into the collection`);
    callback(result);
  });
}
let findDocuments = function (db,ops,callback) {
  let collection = db.collection('documents');
  switch (ops){
    case 'all':
      collection.find({}).toArray(function (err,docs) {
        assert.equal(null,err);
        console.log(`Found the following record`);
        console.log(docs);
        callback(docs);
      });
      break;
    default:
      collection.find(ops).toArray(function (err,docs) {
        assert.equal(null,err);
        console.log(`Found the following record`);
        console.log(docs);
        callback(docs);
      });
      break;
  }
}
let updateDocuments = function (db,callback) {
  let collection = db.collection('documents');
  collection.updateOne(
    {a:2}, 
    {$set: {b:1}},
    function (err, result) {
      assert.equal(null,err);
      assert.equal(1,result.result.n);
      console.log(`Updated the document with the field a equal to 2`);
      callback(result);
    });
}
let removeDocuments = function (db, val, callback) {
  let collection = db.collection('documents');
  if(typeof(val) === 'object'){
    collection.deleteOne(val,function (err, result) {
    assert.equal(null,err);
    assert.equal(1,result.result.n);
    console.log(`Removed the document with the field equal to ${val.a}`);
    callback(result);
    });
  }
}
let indexCollection = function (db,callback) {
  db.collection('documents').createIndex(
    {"a":1},
    null,
    function (err,results) {
      console.log(`${results}`);
      callback();
    }
  );

}

MongoClient.connect(url,function MongoCallback(err,db) {
  assert.equal(null,err);
  console.log(`Connect successfully`);
  // insertDocument(db,function (){
  //   // findDocuments(db, {a:3}, function () {
  //   //   db.close();  
  //   // });
  //     // updateDocuments(db,function (result) {
  //     //   console.log(`${result.result}`);
  //     // });
  //   // findDocuments(db,'all',function () {
  //   //   db.close();
  //   // });
  // });

  // removeDocuments(db, {a:4} ,function (res) {
  //   findDocuments(db,{},function (res) {
  //     db.close();  
  //   });
  // });

  insertDocument(db, function (insertResult) {
    indexCollection(db, function (indexResult) {
      db.close();
    });
  });
});
