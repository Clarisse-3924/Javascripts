function result(){
  var d= document.getElementById("day").value;
  var m = document.getElementById("month").value;
  var y = document.getElementById("year").value;
  var gender=document.querySelector('input["name="gender"]:checked').value;

  var days = ["monday","tuesday","wesday","thursday","friday","surtday","sunday"];
var gender=




  if(d <= 0 && d>31){
    alert("days must be not be less than or equal to zero and it doesn't to be greater than 31");
  }
  if(m<=0 && m>12){
    alert("months have to start from one upto 12");
  }
  if(y>2020){
    alert("You can't born in future")
  }
}