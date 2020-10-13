let Addtotal = document.querySelector(".Addtotal");
let NumberOne = document.querySelector("#Firstnumber");
console.log(NumberOne)
let NumberTwo = document.querySelector("#Secondnumber");

Addtotal.addEventListener ("click", function(){
    console.log("This might work")
    let Sum = add(Number (NumberOne.value),Number (NumberTwo.value));
    console.log(Sum)
    console.log(document.getElementsByClassName("Addresult")[0].innerHTML)
    document.getElementsByClassName("Addresult")[0].innerHTML = Sum;

})

function add(FirstNumber,SecondNumber){
    console.log(FirstNumber + SecondNumber)
    return FirstNumber + SecondNumber;
}
