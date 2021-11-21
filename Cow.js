class Cow extends DvAnTV{
    #_energy = Normal_Status.ENERGY;
    #_hungry = Normal_Status.HUNGRY;
    #_mood = Normal_Status.MOOD;
    #_size = Math.floor(Math.random() * 11);
    constructor(name,gender,food){
        super(name,gender,food);
        Cow.#_number_of_cows++;
    }
    get Size(){
        return this.#_size;
    }
    static Compare_Size(cow1,cow1_name,cow2,cow2_name){
        if(cow1 < cow2){
            document.writeln(cow2_name + " has better flying skill !<br>");
        }
        else if(cow1 > cow2){
            document.writeln(cow1_name + " has better flying skill !<br>");
        }
        else document.writeln(cow1_name + " and " + cow2_name + " are equals !<br>");
    }
    static #_number_of_cows = 0;
    static get Number_of_cows(){
        return Cow.#_number_of_cows;
    }
    Move(){
        this.#Walking();
        if(this.#_energy > 0 ){
            this.#_energy--;
            this.#_hungry++;
        }
        else alert(this.Name + " is not enough energy !");
    }
    Play(){
        if(this.#_energy > 0){
            document.writeln(this.Name + " is playing !<br>");
            this.Make_Sound();
            this.#_mood++;
            this.#_energy--;
            this.#_hungry++;
        }
        else alert(this.Name + " is not enough energy !");
    }
    Eat(){
        super.Eat();
        this.#_hungry = 0;
        this.Make_Sound();
    }
    Sleep(){
        if(this.#_energy < 10){
            document.writeln(this.Name + " is sleeping ZZzzzz~~~<br>");
            this.#_energy++;
            this.#_hungry++;
        }
        else alert(this.Name + " is full energy !");
    }
    Make_Sound(){
        document.writeln("Mooooo.... !<br>");
    }
    #Walking(){
        document.writeln(this.Name + " is walking !<br>");
    }
    Check_Status(){
        if(this.#_hungry > 8){
            this.#_mood = 0;
            document.writeln(this.Name + " is hungry !<br>");
        }
        else{
            document.writeln(this.Name + " is not hungry !<br>");
        }
        if(this.#_mood === 0 ){
            document.writeln(this.Name + " is not happy !<br>");
        }
        else{
            document.writeln(this.Name + " is happy !<br>");
        }
        if(this.#_energy <= 2){
            document.writeln(this.Name + " is tired !<br>");
        }
        else{
            document.writeln(this.Name + " is excited !<br>");
        }
    }
}