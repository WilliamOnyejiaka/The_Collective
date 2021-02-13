
export default class PeriodicTable {

    constructor(value) {
        this._table = PeriodicTable.populate();
        this._value = value.toLowerCase().trim();
        this._found = this._find();
    }

    static populate() {
        let keys = ["h","he","li","be","b","c","n","o","f","ne","na","mg","al","si","p","s","cl","ar","k","ca"];
        let elements = ["Hydrogen","Helium","Lithum","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnisum","Aluminium","Silicon","Phosphorus","Sulphur","Chlorine","Argon","Kryton","Calcium"];
        let table = new Map();
        for(let i = 0;i < keys.length;i++){table.set(keys[i],elements[i]);}
        return table;
    }

    _find() {return (this._table.has(this._value));}
    get getElement() {return this._found? this._table.get(this._value) : "This table only holds the first twenty(20) elements."}
}