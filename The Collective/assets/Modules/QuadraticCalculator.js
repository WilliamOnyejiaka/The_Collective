
export class QuadraticCalculator {

    constructor(a,b,c) {
        this._a = a;
        this._b = b;
        this._c = c;
        this.result = this._calculate();
    }

    _calculate() {
        let first = Math.sqrt(Math.pow(this._b,2) - (4*this._a*this._c));
        let positive = (-(this._b) + first)/(2*this._a);
        let negative = (-(this._b) - first)/(2*this._a);
        return (Number.isNaN(positive) || Number.isNaN(negative))? "Invalid" : "x = " + positive + " or " + negative;
    }

    get getResult() {return this.result;}
}
