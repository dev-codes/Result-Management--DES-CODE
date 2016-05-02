/**
 * Created by Amit on 26-04-2016.
 */
var MongoDB 	= require('mongodb').Db;
var MongoClient  = require('mongodb').MongoClient;
var assert      = require('assert');
var ObjectId    = require('mongodb').ObjectID;
var url         = 'mongodb://localhost:27017/subharti_university';

var findMarksheet = function(db, callback) {
    var cursor =db.collection('student_master').find({'marksheet.session':'2015-16','marksheet.year':1},{_id:'false','marksheet.semester':'true'});
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
    findMarksheet(db, function() {
        db.close();
    });
});
