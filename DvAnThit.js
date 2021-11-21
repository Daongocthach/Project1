class DvAnThit extends Animal{
    #_food;
    constructor(name,gender,food){
        super(name,gender);                        
        this.Food = food;
    }
    set Food(food){
        if(food === FOOD.BEEF || food === FOOD.FISH || food === FOOD.PORK ){
            this.#_food = food;
        }
        else{
            alert("Wrong food !");
            throw new Error("Wrong food !");            //Dung chuong trinh
        }
    }
    get Food(){
        return this.#_food;
    }
    Eat(){
        document.writeln(this.Name + " is eating " + this.Food +"<br>");
    }
    Move(){
        document.writeln(this.Name + " is moving !<br>");
    }
}