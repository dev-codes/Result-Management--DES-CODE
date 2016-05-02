var http= require('http');
var express= require('express');
var app = express();
var path = require('path');
app.set('port', process.env.PORT || 7080);
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var resu = {
    "marksheet": [{
        "semester": [{
            "sem": 1,
            "carry_over_paper": ["ECS-101", "ECS-102"],
            "total_mark": 670,
            "subjects": [{
                "subject_code": "ECS-101",
                "subject_name": "Computer Programming in C",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 60,
                "int_mark_obt": 38,
                "total_mark_obt": 98,
                "sub_passed": "yes"
            }, {
                "subject_code": "ECS-102",
                "subject_name": "Engineering Physics",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 40,
                "int_mark_obt": 48,
                "total_mark_obt": 88,
                "sub_passed": "yes"
            }, {
                "subject_code": "ECS-103",
                "subject_name": "Engineering Chemestry",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 50,
                "int_mark_obt": 48,
                "total_mark_obt": 98,
                "sub_passed": "yes"
            }, {
                "subject_code": "ECS-104",
                "subject_name": "Engineering Mathematics",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 60,
                "int_mark_obt": 46,
                "total_mark_obt": 106,
                "sub_passed": "yes"
            }, {
                "subject_code": "Ehu-105",
                "subject_name": "Environment Science",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 70,
                "int_mark_obt": 43,
                "total_mark_obt": 113,
                "sub_passed": "yes"
            }, {
                "subject_code": "EEE-106",
                "subject_name": "Electrical Engineering",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 76,
                "int_mark_obt": 47,
                "total_mark_obt": 123,
                "sub_passed": "yes"
            }, {
                "subject_code": "EPR-011",
                "subject_name": "Electrical Engineering LAB",
                "subject_type": "Practical",
                "max_ext_mark": 50,
                "max_int_mark": 50,
                "max_total_mark": 100,
                "ext_mark_obt": 40,
                "int_mark_obt": 40,
                "total_mark_obt": 80,
                "sub_passed": "yes"
            }, {
                "subject_code": "EPR-012",
                "subject_name": "C programming LAB",
                "subject_type": "practical",
                "max_ext_mark": 50,
                "max_int_mark": 50,
                "max_total_mark": 100,
                "ext_mark_obt": 35,
                "int_mark_obt": 35,
                "total_mark_obt": 70,
                "sub_passed": "yes"
            }, {
                "subject_code": "EPR-013",
                "subject_name": "Engineering Physics LAB",
                "subject_type": "practical",
                "max_ext_mark": 50,
                "max_int_mark": 50,
                "max_total_mark": 100,
                "ext_mark_obt": 45,
                "int_mark_obt": 45,
                "total_mark_obt": 90,
                "sub_passed": "yes"
            }, {
                "subject_code": "EPR-014",
                "subject_name": "Engineering Chemistry LAB",
                "subject_type": "practical",
                "max_ext_mark": 50,
                "max_int_mark": 50,
                "max_total_mark": 100,
                "ext_mark_obt": 40,
                "int_mark_obt": 40,
                "total_mark_obt": 80,
                "sub_passed": "yes"
            }]
        }, {
            "sem": 2,
            "carry_over_paper": ["ECS-101", "ECS-102"],
            "total_mark": 670,
            "subjects": [{
                "subject_code": "ECS-201",
                "subject_name": "Computer Programming in java",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 40,
                "int_mark_obt": 38,
                "total_mark_obt": 78,
                "sub_passed": "yes"
            }, {
                "subject_code": "ECS-202",
                "subject_name": "Engineering Physics 2nd ",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 10,
                "int_mark_obt": 48,
                "total_mark_obt": 88,
                "sub_passed": "yes"
            }, {
                "subject_code": "ECS-203",
                "subject_name": "Engineering Chemestry 2nd ",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 56,
                "int_mark_obt": 35,
                "total_mark_obt": 61,
                "sub_passed": "yes"
            }, {
                "subject_code": "ECS-204",
                "subject_name": "Engineering Mathematics 2nd",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 65,
                "int_mark_obt": 46,
                "total_mark_obt": 111,
                "sub_passed": "yes"
            }, {
                "subject_code": "Ehu-205",
                "subject_name": "Industrial Management",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 75,
                "int_mark_obt": 40,
                "total_mark_obt": 115,
                "sub_passed": "yes"
            }, {
                "subject_code": "EEE-206",
                "subject_name": "Mechanical Engineering",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 66,
                "int_mark_obt": 47,
                "total_mark_obt": 113,
                "sub_passed": "yes"
            }, {
                "subject_code": "EPR-021",
                "subject_name": "Mechanical Engineering LAB",
                "subject_type": "Practical",
                "max_ext_mark": 50,
                "max_int_mark": 50,
                "max_total_mark": 100,
                "ext_mark_obt": 35,
                "int_mark_obt": 40,
                "total_mark_obt": 75,
                "sub_passed": "yes"
            }, {
                "subject_code": "EPR-022",
                "subject_name": "java programming LAB",
                "subject_type": "practical",
                "max_ext_mark": 50,
                "max_int_mark": 50,
                "max_total_mark": 100,
                "ext_mark_obt": 40,
                "int_mark_obt": 35,
                "total_mark_obt": 75,
                "sub_passed": "yes"
            }, {
                "subject_code": "EPR-023",
                "subject_name": "Engineering Physics 2nd  LAB",
                "subject_type": "practical",
                "max_ext_mark": 50,
                "max_int_mark": 50,
                "max_total_mark": 100,
                "ext_mark_obt": 40,
                "int_mark_obt": 45,
                "total_mark_obt": 80,
                "sub_passed": "yes"
            }, {
                "subject_code": "EPR-024",
                "subject_name": "Engineering Chemistry LAB 2nd",
                "subject_type": "practical",
                "max_ext_mark": 50,
                "max_int_mark": 50,
                "max_total_mark": 100,
                "ext_mark_obt": 35,
                "int_mark_obt": 35,
                "total_mark_obt": 65,
                "sub_passed": "yes"
            }]
        }]
    }, {
        "semester": [{
            "sem": 3,
            "carry_over_paper": ["ECS-301", "ECS-302"],
            "total_mark": 670,
            "subjects": [{
                "subject_code": "ECS-301",
                "subject_name": "web Technology",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 50,
                "int_mark_obt": 38,
                "total_mark_obt": 88,
                "sub_passed": "yes"
            }, {
                "subject_code": "ECS-102",
                "subject_name": "Engineering Physics",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 40,
                "int_mark_obt": 48,
                "total_mark_obt": 88,
                "sub_passed": "yes"
            }, {
                "subject_code": "ECS-103",
                "subject_name": "Engineering Chemestry",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 50,
                "int_mark_obt": 48,
                "total_mark_obt": 98,
                "sub_passed": "yes"
            }, {
                "subject_code": "ECS-104",
                "subject_name": "Engineering Mathematics",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 60,
                "int_mark_obt": 46,
                "total_mark_obt": 106,
                "sub_passed": "yes"
            }, {
                "subject_code": "Ehu-105",
                "subject_name": "Environment Science",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 70,
                "int_mark_obt": 43,
                "total_mark_obt": 113,
                "sub_passed": "yes"
            }, {
                "subject_code": "EEE-106",
                "subject_name": "Electrical Engineering",
                "subject_type": "theory",
                "max_ext_mark": 100,
                "max_int_mark": 50,
                "max_total_mark": 150,
                "ext_mark_obt": 76,
                "int_mark_obt": 47,
                "total_mark_obt": 123,
                "sub_passed": "yes"
            }, {
                "subject_code": "EPR-011",
                "subject_name": "Electrical Engineering LAB",
                "subject_type": "Practical",
                "max_ext_mark": 50,
                "max_int_mark": 50,
                "max_total_mark": 100,
                "ext_mark_obt": 40,
                "int_mark_obt": 40,
                "total_mark_obt": 80,
                "sub_passed": "yes"
            }, {
                "subject_code": "EPR-012",
                "subject_name": "C programming LAB",
                "subject_type": "practical",
                "max_ext_mark": 50,
                "max_int_mark": 50,
                "max_total_mark": 100,
                "ext_mark_obt": 35,
                "int_mark_obt": 35,
                "total_mark_obt": 70,
                "sub_passed": "yes"
            }, {
                "subject_code": "EPR-013",
                "subject_name": "Engineering Physics LAB",
                "subject_type": "practical",
                "max_ext_mark": 50,
                "max_int_mark": 50,
                "max_total_mark": 100,
                "ext_mark_obt": 45,
                "int_mark_obt": 45,
                "total_mark_obt": 90,
                "sub_passed": "yes"
            }, {
                "subject_code": "EPR-014",
                "subject_name": "Engineering Chemistry LAB",
                "subject_type": "practical",
                "max_ext_mark": 50,
                "max_int_mark": 50,
                "max_total_mark": 100,
                "ext_mark_obt": 40,
                "int_mark_obt": 40,
                "total_mark_obt": 80,
                "sub_passed": "yes"
            }]
        }]
    }]
}


//var resultMarksheet = require("modules/marksheetDAO.js");
//var resultOption = require("/res.js");

// setting jade as rendrer
var jade = require('jade');
app.set('view engine', 'jade');

// setting default directory to public
app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views'));
//app.set('views', path.join(__dirname, 'public'));


app.get('/', function (req, res) {
    res.render('index');
});

app.get('/api', function(req, res) {
    res.json({ result_option:['1st year 2014-15','2nd year 2015-16', '5th sem 2016-17'] });
});
app.get('/result', function(req, res) {
    res.json({ result_option:resu });
});
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

