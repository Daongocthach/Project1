class Bird extends DvAnTV{
    #_energy = Normal_Status.ENERGY;
    #_hungry = Normal_Status.HUNGRY;
    #_mood = Normal_Status.MOOD;
    #_flying_points = Math.floor(Math.random() * 11);
    constructor(name,gender,food){
        super(name,gender,food);
        Bird.#_number_of_birds++;
    }
    get Flying_points(){
        return this.#_flying_points;
    }
    static #_number_of_birds = 0;
    static get Number_of_birds(){
        return Bird.#_number_of_birds;
    }
    static Compare_flying_points(bird1,bird1_Name,bird2,bird2_Name){
        if(bird1 < bird2){
            document.writeln(bird2_Name + " has better flying skill !<br>");
        }
        else if(bird1 > bird2){
            document.writeln(bird1_Name + " has better flying skill !<br>");
        }
        else document.writeln(bird1_Name + " and " + bird2_Name + " are equals !<br>");
    }
    Move(){
        this.#Fly();
        if(this.#_energy > 0 ){
            this.#_energy--;
            this.#_hungry++;
        }
        else alert(this.Name + " not enough energy !");
    }
    Play(){
        if(this.#_energy > 0){
            document.writeln(this.Name + " is playing !<br>");
            this.Make_Sound();
            this.#_mood++;
            this.#_energy--;
            this.#_hungry++;
        }
        else alert(this.Name + " not enough energy !");
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
        document.writeln("Chip Chip !<br>");
    }
    #Fly(){
        document.writeln(this.Name + " is flying !<br>");
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