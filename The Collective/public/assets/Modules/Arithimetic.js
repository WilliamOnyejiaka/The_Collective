
import {compareSign} from './Helper.js'

export default function work(signs,numbers){
    let temp = numbers[0];
    for(let i = 0;i < signs.length;i++) {
        let sign = compareSign(signs[i]);
         if(sign === "+") {
            temp += numbers[i+1];
         }else if(sign === "-") {
            temp -= numbers[i+1];
         }else if(sign === "/") {
            temp /= numbers[i+1];
         }else if(sign === "x") {
            temp *= numbers[i+1];
         }else if(sign === "^") {
            temp = temp**numbers[i+1];
         }     
    }
    return temp;
}