function result(){
  var d= document.getElementById("day").value;
  var m = document.getElementById("month").value;
  var y = document.getElementById("year").value;
  var c=document.getElementById("century").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var maleNames=[" Kwasi","Kwadwo","Kwabena","Kwaku","Yaw"," Kofi","Kwame"];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var dayw=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sartuday"];

  if(d <=0 || m<=0 ){
    alert("days must be not be less than or equal to zero ");
  }
  else if(d>31 || m>12){
    alert(" it doesn't to be greater than 31");
  }
  else if(y>2020){
    alert("You can't born in future");}
    else if(d==2 || gender==male){
alert("you was born on" +dayw[2])
alert("your akan name is " +maleNames[2])
    }
    else if(d==1 || gender==male){
      alert("you was born" +dayw[0])
      alert("your akan name is" +maleNames[0])
    }

  else if(d==1,8 ,15,22,29 || gender==female){
 alert("Your name is" +femaleNames[0]);
  }
  
  else{
    return;
  }
}
