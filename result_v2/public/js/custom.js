/**
 * Created by Amit on 26-04-2016.
 */
$( document ).ready(function() {
    console.log( "ready!" );
    $('#inputRollNo').blur(function () {
        var roll_no=$('#inputRollNo').val();
        var reg = new RegExp("/[0-9]{10}/");
        console.log(roll_no);
        if( !reg.test(roll_no)){
            console.log('validated');
            $('#value').html(roll_no);
        } else{
            console.log("incorrect roll no");
            $('#value').html("enter correct roll no");

        };


        // ajax call to send roll_no
        var data={'roll_no':'roll_no'};
        var req = $.get( "http://localhost:7080/api", data, function() {
                console.log( " send success"+data );
            })
            .done(function() {
                console.log( "second success" );
            })
            .fail(function() {
                console.log( "error" );
            })
            .always(function() {
                console.log( "finished" );
            });





    });




});


