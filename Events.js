
function clabel()
{
  document.getElementById('username').setAttribute("placeholder","Username");
  document.getElementById('password').setAttribute("placeholder","Password");
  document.getElementById('confirmPassword').setAttribute("placeholder","Confirm Password");
}
function req()
{
    document.getElementById('username').required=true;
    document.getElementById('password').required=true;
    document.getElementById('confirmPassword').required=true;
    document.querySelector('button').disabled=true;
}
function inpmatch()
{
    var a=document.getElementById('password').value;
    var b=document.getElementById('confirmPassword').value;
    if(a==b)
    {

        document.querySelector('button').disabled=false;
        document.getElementById('a1').innerHTML='';
     
    }
    else
    {
        document.querySelector('button').disabled=true;
        document.getElementById('a1').innerHTML='Wrong Pass';
    }
}
function rgstr()
{
    alert("User Successfully Registered");
}

req();
clabel();