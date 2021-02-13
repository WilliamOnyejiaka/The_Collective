
export function findNumber(result) { 
    let str = result.value;
    let strArr = str.split("");
    let number = 0;
    let found = false;
    for(let i = (strArr.length-1);i >= 0;i--) {
        let sign = compareSign(strArr[i]); 
        if(sign === "+") {
            number = Number(str.substr(i+1));
            found = true;
            break;
        }else if(sign === "-") {
            number = Number(str.substr(i+1));
            found = true;
            break;
        }else if(sign === "/") {
            number = Number(str.substr(i+1));
            found = true;
            break;
        }else if(sign === "x") {
            number = Number(str.substr(i+1));
            found = true;
            break;
        }else if(sign === "^") {
            number = Number(str.substr(i+1));
            found = true;
            break;
        }
    }
    return (found)?number : Number(str);
}

export function compareSign(sign) {
    switch(sign) {
        case "+":
            return "+";
        case "-":
            return "-";
        case "/":
            return "/";
        case "x":
            return "x";
        case "^":
            return "^";
        default:
            return "not a sign";                
    }
}