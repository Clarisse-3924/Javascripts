function result(){
  var d= document.getElementById("day").value;
  var m = document.getElementById("month").value;
  var y = document.getElementById("year").value;
  var c=document.getElementById("century").value;

  if(d <= 0 && d>31){
    alert("days must be not be less than or equal to zero and it doesn't to be greater than 31");
  }
  if(m<=0 && m>12){
    alert("months have to start from one upto 12");
  }
  if(y>2020){
    alert("You can't born in future")
  }
  var gender=document.querySelector('input["name="gender"]:checked').value;
  var days= parseInt( ( (c/4) -2*c-1) + ((5*y/4) ) + ((26*(m+1)/10)) + d)%7;
  var maleNames=[" Kwasi","Kwadwo","Kwabena","Kwaku","Yaw"," Kofi","Kwame"];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

  if(gender==="male"){
    if(days=== days[0]){
      console.log("Your Akan name is" +maleNames[0]);
    }
    else if(days=== days[1]){
      console.log("Your Akan name is" +maleNames[1]);
    }
    else if(days=== days[2]){
      console.log("Your Akan name is " +maleNames[2]);
    }
    else if(days===days[3]){
      console.log("Your Akan name is " +maleNames[3]);
    }
    else if(days===days[4]){
      console.log("Your Akan name is" +maleNames[4]);
    }
    else if(days===days[5]){
      console.log("Your Akan name is " +maleNames[5]);
    }
    else if(days===days[6]){
      console.log("Your Akan name is" +maleNames[6]);
    }


  }

  else{
    if(days===days[0]){
      console.log("Your Akan name is " +" "+femaleNames[0]);
    }
    else if(days===days[1]){
      console.log("Your Akan name is " +" "+femaleNames[1]);

    }
    else if(days===days[2]){
      console.log("Your Akan name is " +" "+femaleNames[2]);

    }
    else if(days===days[3]){
      console.log("Your Akan name is " +" "+femaleNames[3]);

    }
    else if(days===days[4]){
      console.log("Your Akan name is " +" "+femaleNames[4]);

    }
    else if(days===days[5]){
      console.log("Your Akan name is " +" "+femaleNames[5]);

    }
    else if(days===days[6]){
      console.log("Your Akan name is " +" "+femaleNames[6]);

    }

  }
}