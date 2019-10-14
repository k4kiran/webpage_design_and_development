//Funstion to get json from url and parse data
function jsonFromUrl()
{
  var myurl = $("#searchInput").val();
  console.log(myurl);
  $.getJSON(myurl, function(data) {
        console.log(JSON.stringify(data));
        json_data = JSON.stringify(data, null, 4);
        json_data1 = JSON.parse(json_data);
        console.log(json_data1['Id']);
        console.log(json_data1['Text']);
        console.log(json_data1['Score']);
        console.log(json_data1['Category']);
        $(".outputh3").css("display","block");
        $(".reset").css("display","block");
        $(".displayjson").html(json_data);
    });
}

//function to reset the data printed
function resetData()
{
  $('#searchInput').val("");
  $(".displayjson").html(" ");
  $(".outputh3").css("display","none");
  $(".reset").css("display","none");

}