/**
 * Created by Amit on 26-04-2016.
 */

var MongoDB 	= require('mongodb').Db;
var MongoClient  = require('mongodb').MongoClient;
//var Server 		= require('mongodb').Server;
var assert      = require('assert');
/*var dbPort 		= 27017;
var dbHost 		= 'localhost';
var dbName 		= 'subharti_result_management';*/
var ObjectId    = require('mongodb').ObjectID;
var url         = 'mongodb://localhost:27017/subharti_university';






var findResultOption = function(db, callback) {
    var cursor =db.collection('student_master').find( { 'roll_no': '1202910048' }, {_id: 'false', result_option: 'true'} );
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};



MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findResultOption(db, function() {
        db.close();
    });
});