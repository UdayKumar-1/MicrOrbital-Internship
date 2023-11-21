var getPwd=document.getElementById("getPassword");
var UpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LowerCase="abcdefghijklmnopqrstuvwxyz";
var number="1234567890";
var symbol="@#$%^&*()_+|{}[]<>-/=";
var allPass=UpperCase+LowerCase+number+symbol;
function getRandomGenerator(){
  var pass="";
  var maxx=8;
  pass+=UpperCase[Math.round(Math.random()*UpperCase.length)];
  console.log(pass)
  pass+=LowerCase[Math.round(Math.random()*LowerCase.length)];
  pass+=number[Math.round(Math.random()*number.length)];
  pass+=symbol[Math.round(Math.random()*symbol.length)];
  while(maxx>pass.length){
    pass+=allPass[Math.round(Math.random()*allPass.length)]
  }
  getPwd.value=pass;
}
function copyItems(){
  getPwd.select();//select the text in input box.
  document.execCommand("copy");//copy the text in the input box.
}
