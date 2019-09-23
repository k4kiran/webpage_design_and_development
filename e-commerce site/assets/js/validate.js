  // ===========  GLOBAL ============ //

// ===========  VALIDATE FORM ============ //

function validateName()
{
  var fullname = document.getElementById("fullname").value;
  console.log("my first name is " + fullname);
  var textformat = /^[A-Za-z]+$/ ;
  if(!fullname.match(textformat))
  {
    document.getElementById("nameerror").style.display = "block";
    document.getElementById("fullname").style.borderColor = "red";
    return false;
  }
  document.getElementById("nameerror").style.display = "none";
  document.getElementById("fullname").style.borderColor = "";
  return "";
}


//validating email
function validateEmail()
{
  var email = document.getElementById("email").value;
  console.log("my email is " + email);
  var emailformat = /\S+@\S+\.\S+/ ;
  if(!email.match(emailformat))
  {
    document.getElementById("emailerror").style.display = "block";
    document.getElementById("email").style.borderColor = "red";
    return false;
  }
  document.getElementById("emailerror").style.display = "none";
  document.getElementById("email").style.borderColor = "";
  return "";
}
//validating message
function validateMessage()
{
  var message = document.getElementById("message").value;
  console.log("my message is " + message);
  message = message.trim();
  if(message.length == 0)
  {
    document.getElementById("messageerror").style.display = "block";
    document.getElementById("message").style.borderColor = "red";
    return false;
  }
  document.getElementById("messageerror").style.display = "none";
  document.getElementById("message").style.borderColor = "";
  return "";
}

function formValidate()
{
    var response = "";
  response += validateName();
  response += validateEmail();
  response += validateMessage();
if(response!="")
  {
    return false;
    
  }
  document.getElementById("successsignup").style.display = "block";
  setTimeout(function(){
    document.getElementById("successsignup").style.display = "none";
  }, 3000);

  return true;
}  

// ===========  VALIDATE NEWSLETTER ============ //
function newsSubscribe(){
  document.getElementById("subscribe").style.display = "block";
  setTimeout(function(){
    document.getElementById("subscribe").style.display = "none";
  }, 3000);
}
function newsSubscribe2(){
  document.getElementById("subscribe1").style.display = "block";
  setTimeout(function(){
    document.getElementById("subscribe1").style.display = "none";
  }, 3000);
}
// ===========  RESET FORM ============ //

function resetForm(){
   document.getElementById("fullname").value = '';
   document.getElementById("email").value = '';
   document.getElementById("message").value = '';
}