var name= prompt("당신의 이름은?", "");
var height= prompt("당신의 신장은?", "0");
var weight= prompt("당신의 체중은?", "0");

var normal_w= (height - 100)*0.9;
var result= weight >= normal_w - 5 && weight <= normal_w + 5;
result = result ? "적정 체중" : "적정 체중 아님";
document.write(name + "님은 " + result);
document.write("");
docume