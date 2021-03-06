class Cow extends DvAnTV{
    #_type = "Cow";
    get Type(){
        return this.#_type;
    }
    #_energy = Normal_Status.ENERGY;
    #_hungry = Normal_Status.HUNGRY;
    #_mood = Normal_Status.MOOD;
    #_size = Math.floor(Math.random() * 11);
    constructor(name,gender,food,age){
        super(name,gender,food,age);
        Cow.#_number_of_cows++;
        document.writeln("<br>")
    }
    static #_number_of_cows = 0;
    static get Number_of_cows(){
        return Cow.#_number_of_cows;
    }
    get Size(){
        return this.#_size;
    }
    static Compare_Size(cow1,cow2){
        if(cow1.Size < cow2.Size){
            document.writeln(cow2.Name + " has larger size than " + cow1.Name + " !<br>");
        }
        else if(cow1.Size > cow2.Size){
            document.writeln(cow1.Name + " has larger size than " + cow2.Name + " !<br>");
        }
        else document.writeln(cow1.Name + " and " + cow2.Name + " are equals !<br>");
    }
    Move(){
        if(this.#_energy > 0 ){
            this.#Walking();
            this.#_energy--;
            this.#_hungry++;
        }
        else alert(this.Name + " is not enough energy !");
    }
    Move_Console(){
        if(this.#_energy > 0 ){
            console.log(this.Name + " is walking !");
            this.#_energy--;
            this.#_hungry++;
        }
        else alert(this.Name + " is not enough energy !");
    }
    Play(){
        if(this.#_energy > 0){
            document.writeln(this.Name + " is playing !<br>");
            this.#Mooo();
            this.#_mood++;
            this.#_energy--;
            this.#_hungry++;
        }
        else alert(this.Name + " is not enough energy !");
    }
    Play_Console(){
        if(this.#_energy > 0){
            console.log(this.Name + " is playing !");
            console.log(this.Name + " says Mooooo.... !");
            this.#_mood++;                    
            this.#_energy--;
            this.#_hungry++;
        }
        else{
            alert(this.Name + " is not enough energy !");
        }
    }
    Eat(){
        super.Eat();
        this.#_hungry = 0;
        this.#Mooo();
    }
    Eat_Console(){
        console.log(this.Name + " is eating " + this.Food)
        this.#_hungry = 0;
        console.log(this.Name + " says Mooooo.... !");
    }
    Sleep(){
        if(this.#_energy < 10){
            document.writeln(this.Name + " is sleeping ZZzzzz~~~<br>");
            this.#_energy++;
            this.#_hungry++;
        }
        else alert(this.Name + " is full energy !");
    }
    Sleep_Console(){
        if(this.#_energy < 10){
            console.log(this.Name + " is sleeping ZZzzzz~~");
            this.#_energy++;
            this.#_hungry++;
        }
        else alert(this.Name + " is full energy !");
    }
    Make_Sound(){
        super.Make_Sound();
        this.#Mooo();
    }
    #Mooo(){
        docutment.writeln(this.Name + " says Mooooo.... !");
    }
    #Walking(){
        document.writeln(this.Name + " is walking !<br>");
    }
    Check_Status(){
        var flag = true;
        if(this.#_hungry > 8){
            this.#_mood = 0;
            document.writeln(this.Name + " is hungry !<br>");
            flag = false;
        }
        else{
            document.writeln(this.Name + " is not hungry !<br>");
        }
        if(this.#_mood === 0 ){
            document.writeln(this.Name + " is not happy !<br>");
            flag = false;
        }
        else{
            document.writeln(this.Name + " is happy !<br>");
        }
        if(this.#_energy <= 2){
            document.writeln(this.Name + " is tired !<br>");
            flag = false;
        }
        else{
            document.writeln(this.Name + " is excited !<br>");
        }
        if(flag === true){
            document.writeln(this.Name + " is healthy !<br>");
        }
        else document.writeln(this.Name + " is not healthy !<br>")
    }z
}