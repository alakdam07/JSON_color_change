function whenClicked(){

  var xmlhttp = new XMLHttpRequest();

var myArr;

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     myArr = JSON.parse(this.responseText);
    myFunction(myArr);

 
  }
};
xmlhttp.open("GET", "color.json", true);
xmlhttp.send();

function myFunction(arr) {
  
  let i = Math.floor(Math.random() * 133);
  document.getElementById("demo").innerHTML = " This Color is " + arr[i].name;
  document.body.style.background = arr[i].hex;
 
 
 }

}


 


