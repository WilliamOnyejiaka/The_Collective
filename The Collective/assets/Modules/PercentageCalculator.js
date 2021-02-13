
export default class PercentageCalculator {
    constructor(value,percent) {
        this._value = value;
        this._percent = percent;
        this._result = this._calculate(); 
    }

    _calculate() {
        return this._value * (this._percent /100);
    }

    get getResult(){return this._result;}
}