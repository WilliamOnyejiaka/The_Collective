import {findNumber} from './Modules/Helper.js';
import work from './Modules/Arithimetic.js'

let result = document.getElementById("result");
let btns = document.querySelectorAll(".btn");
let numbers = Array();
let signs = Array();

btns.forEach(function(btn) {
    btn.addEventListener("click",function(e) {
        new CheckInput(e.currentTarget.classList).setResult();        
    });
});

function CheckInput(current) {
    let number = 0;
 
    this.setNumbersAndDot = function() {
        if(current.contains("one")) {
            result.value += "1";
        }else if(current.contains("two")) {
            result.value += "2";
        }else if(current.contains("three")) {
            result.value += "3";
        }else if(current.contains("four")) {
            result.value += "4";
        }else if(current.contains("five")) {
            result.value += "5";
        }else if(current.contains("six")) {
            result.value += "6";
        }else if(current.contains("seven")) {
            result.value += "7";
        }else if(current.contains("eight")) {
            result.value += "8";
        }else if(current.contains("nine")) {
            result.value += "9";
        }else if(current.contains("zero")) {
            result.value += "0";
        }else if(current.contains("dot")) {
            result.value += ".";
        }
    }

    this.setDel = function() {
        if(current.contains("del")) {
            let arr = result.value.split("");
            if(arr.length >= 1) {
                arr.length = arr.length - 1;
                result.value = arr.join("");            
            }
        }
    }

    this.setSigns = function() {
        if(current.contains("plus")) {
            number = findNumber(result);
            numbers.push(number);
            signs.push("+");
            result.value += "+";
        }else if(current.contains("minus")) {
            number = findNumber(result);
            numbers.push(number);
            signs.push("-");
            result.value += "-";
        }else if(current.contains("divide")) {
            number = findNumber(result);
            numbers.push(number);
            signs.push("/");
            result.value += "/";
        }else if(current.contains("multiply")) {
            number = findNumber(result);
            numbers.push(number);
            signs.push("x");
            result.value += "x";
        }else if(current.contains("pow")) {
            number = findNumber(result);
            numbers.push(number);
            signs.push("^");
            result.value += "^";
        }
    }

    this.setEqualTo = function() {
        if(current.contains("equal")) {
            number = findNumber(result);
            numbers.push(number);
            if(Number.isNaN(work(signs,numbers))) {
                result.value = "Error";
            }else {
                result.value = work(signs,numbers);
            }
            numbers = Array();
            signs = Array(); 
        }
    }

    this.setResult = function() {
        this.setNumbersAndDot();
        this.setDel();
        this.setSigns();
        this.setEqualTo();    
    }
}