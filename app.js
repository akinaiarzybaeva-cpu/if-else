// let age = prompt("Жашыңызды киргизиңиз:");

// if (age >= 18) {
//     console.log("Уруксат берилди");
// } else {
//     console.log("Уруксат берилген жок");
// }

let san1 = parseInt(prompt("Биринчи санды жаз"));

let oper = prompt("Танда (+,-,*,/)");

let san2 = parseInt(prompt("Экинчи санды жаз"));

let result;

if (oper === "+") {
  result = alert(san1 + san2);
} else if (oper === "-") {
  result = alert(san1 - san2);
} else if (oper === "*") {
  result = alert(san1 * san2);
} else if (oper === "/") {
  result = alert(san1 / san2);
} else {
  alert("Сан жок");
}
