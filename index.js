class Polygon {

    constructor(sidesArray){
        this.sides = sidesArray
        this.count = this.countSides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.sides.reduce(reducer)
    }
}


class Triangle extends Polygon {

    get isValid(){
          
            if (this.count !== 3) return false;
            if (Array.isArray(this.sides) == false) return false;
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            return (side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)  
    }

}

class Square extends Polygon {

    get isValid(){
        if(this.sides.count == 4) return true;
        if(Array.isArray(this.sides) == false) return false;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        return (side1 == side2) && (side1 == side3 ) && (side1 == side4)
    }

    get area(){
        return this.sides[0] * this.sides[1]
    }

}