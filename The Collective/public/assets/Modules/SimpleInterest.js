
export default class SimpleInterest {
    
    static simpleInterest(principal,rate,time) {return (principal*rate*time)/100;}
    static amountFunc(principal,interest){return principal+interest;}
    static principalFunc(interest,rate,time) {return (100*interest)/(time*rate);}
}