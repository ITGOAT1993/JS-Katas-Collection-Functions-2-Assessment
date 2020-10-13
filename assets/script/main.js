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
let factor = document.querySelector("#factor");
let factortotal = document.querySelector(".factortotal");

Addtotal.addEventListener ("click", function(){
    console.log("This might work")
    let Sum = add(Number (NumberOne.value),Number (NumberTwo.value));
    console.log(Sum)
    console.log(document.getElementsByClassName("Addresult")[0].innerHTML)
    document.getElementsByClassName("Addresult")[0].innerHTML = Sum;

})

function add(FirstNumber,SecondNumber){
    return FirstNumber + SecondNumber;
}


Producttotal.addEventListener ("click", function(){
    let Product = multiply(Number (numberOne.value),Number (numberTwo.value));
    
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

factortotal.addEventListener ("click", function(){
    if (factor.value < 1 ) {alert ("Please Choose A Number Greater Than 0 ")}
    
    else { 
    let factorresult = factorial(Number (factor.value));
    
    document.getElementsByClassName("factorresult")[0].innerHTML = factorresult;
}
})

function factorial(FirstNumber){ 
    let counter = 1
    let factorresult = (FirstNumber) 
   
    while (counter <  (FirstNumber)){
        

        factorresult = multiply( (counter), factorresult)
        counter++
    }
   
    
    return factorresult;
}