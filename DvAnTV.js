class DvAnTV extends Animal{
    #_food;
    constructor(name,gender,food,age){
        super(name,gender,age);                        
        this.Food = food;
    }
    set Food(food){
        if(food === FOOD.FRUIT || FOOD.GRASS){
            this.#_food = food;
        }
        else{
            alert("Wrong food !");
            throw new Error("Wrong food !");
        }
    }
    get Food(){
        return this.#_food;
    }
    Eat(){
        document.writeln(this.Name + " is eating " + this.Food + "<br>");
    }
    Move(){
        document.writeln(this.Name + " is moving !<br>");
    }
}
