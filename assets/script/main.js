let Addtotal = document.querySelector(".Addtotal");
let NumberOne = document.querySelector("#Firstnumber");
console.log(NumberOne)
let NumberTwo = document.querySelector("#Secondnumber");
let numberOne = document.querySelector("#firstNumber");
let numberTwo = document.querySelector("#secondNumber");
let Producttotal = document.querySelector(".Producttotal");
let number = document.querySelector("#number");
let Exponent = document.querySelector("#exponent");
let Powertotal = document.querySelector(".Powertotal");

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


Producttotal.addEventListener ("click", function(){
    console.log("This might work")
    let Product = multiply(Number (numberOne.value),Number (numberTwo.value));
    console.log(Product)
    console.log(document.getElementsByClassName("Productresult")[0].innerHTML)
    document.getElementsByClassName("Productresult")[0].innerHTML = Product;

})

function multiply(FirstNumber,SecondNumber){ 
    let counter = 1
    let Product = Math.abs (FirstNumber) 
    if ( (FirstNumber === 0) || (SecondNumber === 0)){
        Product = 0
    }
    else { 
    while (counter < Math.abs (SecondNumber)){
        

        Product = add(Math.abs (FirstNumber) , Product)
        counter++
    }
    if ( (FirstNumber < 0) || (SecondNumber < 0) ){
        if (!((FirstNumber < 0) && (SecondNumber < 0))){ 
            Product = - Product
        }
        
    }
    }
    return Product;
}

Powertotal.addEventListener ("click", function(){
    console.log("This might work")
    let Powerresult = power(Number (number.value),Number (Exponent.value));
    console.log(Powerresult)
    console.log(document.getElementsByClassName("Exponentresult")[0].innerHTML)
    document.getElementsByClassName("Exponentresult")[0].innerHTML = Powerresult;

})

function power(FirstNumber,SecondNumber){ 
    let counter = 1
    let Powerresult = (FirstNumber) 
    if ( (SecondNumber === 0)){
        Powerresult = 1
    }
    else { 
    while (counter < Math.abs (SecondNumber)){
        

        Powerresult = multiply( (FirstNumber) , Powerresult)
        counter++
    }
    if ( (SecondNumber < 0) ){
        
        Powerresult = 1 / Powerresult
        
        
    }
    }
    return Powerresult;
}