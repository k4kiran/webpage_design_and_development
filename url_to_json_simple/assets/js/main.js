function jsonFromUrl()
{
  var myurl = $("#searchInput").val();
  console.log(myurl);
  $.getJSON(myurl, function(data) {
        console.log(JSON.stringify(data));
        json_data = JSON.stringify(data, null, 4);
        $(".outputh3").css("display","block");
        $(".reset").css("display","block");
        $(".displayjson").html(json_data);
    });
}

function resetData()
{
  $('#searchInput').val("");
  $(".displayjson").html(" ");
  $(".outputh3").css("display","none");
  $(".reset").css("display","none");

}