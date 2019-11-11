//Funstion to get json from url and parse data


$( document ).ready(function() {
    console.log( "ready!" );
    $(".secondform").css("display","none");
    $(".getcompbutton").css("display","none");
    $(".thirdform").css("display","none");
    $(".resultbutton").css("display","none");

});


function jsonFromUrl()
{
  var filename = $("#searchInput").val();
   var myurl = 'https://qyduaksemh.execute-api.us-east-1.amazonaws.com/testupload/textract_retrieve_jobid?val1=' + filename;
  console.log(myurl);
  $.getJSON(myurl, function(data) {
        console.log(JSON.stringify(data));
        json_data = JSON.stringify(data, null, 4);
        json_data1 = JSON.parse(json_data);
        var newsqs =  json_data1['QueueUrl'];
        var newjobid = json_data1['JobId']
        $(".outputh3").css("display","block");
        $(".reset").css("display","block");
        $(".displayjson").html(json_data);
        $(".secondform").css("display","block");
        var newurl = 'https://qyduaksemh.execute-api.us-east-1.amazonaws.com/testupload/textract-status-check?val1=' + newjobid + '&val2=' + newsqs;        
        $("#searchInput2").val(newurl);
        $(".getcompbutton").css("display","none");
        $(".thirdform").css("display","none");
        $(".resultbutton").css("display","none");
    });
}


function jsonFromUrl2()
{
  var myurl2 = $("#searchInput2").val();
  console.log(myurl2);
  $.getJSON(myurl2, function(data2) {
        console.log(JSON.stringify(data2));
        json_data2 = JSON.stringify(data2, null, 4);
        json_data3 = JSON.parse(json_data2);
        $(".displayjson2").html(json_data3);
         $(".getcompbutton").css("display","block");
        
    });
}

function jsonFromUrl3()
{
  var myurl3 = 'https://qyduaksemh.execute-api.us-east-1.amazonaws.com/testupload/medical-comprehend-job-id-return';
  /*var myurl3 = 'https://api.myjson.com/bins/bkt9a'*/
  console.log(myurl3);
  $.getJSON(myurl3, function(data3) {
        console.log(JSON.stringify(data3));
        json_data4 = JSON.stringify(data3, null, 4);
        json_data5 = JSON.parse(json_data4);
        console.log(json_data5["JobId"]);
        newjobid = json_data5["JobId"];
        $(".displayjson3").html(json_data4);
        $("#searchInput3").val(newjobid);
        $(".thirdform").css("display","block");
    });
}


function jsonFromUrl4()
{
  var job_id_comprehend = $("#searchInput3").val();
  var myurl4 = 'https://qyduaksemh.execute-api.us-east-1.amazonaws.com/testupload/job-id-check-status?val1=' + job_id_comprehend;
  /*var myurl3 = 'https://api.myjson.com/bins/bkt9a'*/
  console.log(myurl4);
  $.getJSON(myurl4, function(data6) {
        console.log(JSON.stringify(data6));
        json_data5 = JSON.stringify(data6, null, 4);
        json_data6 = JSON.parse(json_data5);
        console.log(json_data6["JobId"]);
        $(".displayjson4").html(json_data5);
        $(".resultbutton").css("display","block");

    });
}

function jsonFromUrl5()
{
  var job_id_comprehend = $("#searchInput3").val();
  var myurl5 = 'https://qyduaksemh.execute-api.us-east-1.amazonaws.com/testupload/file-exists-medical?val1=' + job_id_comprehend;
  /*var myurl3 = 'https://api.myjson.com/bins/bkt9a'*/
  console.log(myurl5);
  $.getJSON(myurl5, function(data7) {
        console.log(JSON.stringify(data7));
        json_data7 = JSON.stringify(data7, null, 4);
        json_data8 = JSON.parse(json_data7);
        console.log(json_data8["JobId"]);
        $(".displayjson5").html(json_data7);

    });
}

//function to reset the data printed
function resetData()
{
  $('#searchInput').val("");
  $(".displayjson").html(" ");
  $(".outputh3").css("display","none");
  $(".reset").css("display","none");
  $(".secondform").css("display","none");  
}