class Bird extends DvAnTV{
    _animal_type = "Bird";
    #_energy = Normal_Status.ENERGY;
    #_hungry = Normal_Status.HUNGRY;
    #_mood = Normal_Status.MOOD;
    #_flying_points = Math.floor(Math.random() * 11);
    constructor(name,gender,food,age){
        super(name,gender,food,age);
        Bird.#_number_of_birds++;
    }
    get Flying_points(){
        return this.#_flying_points;
    }
    static #_number_of_birds = 0;
    static get Number_of_birds(){
        return Bird.#_number_of_birds;
    }
    static Compare_flying_points(bird1,bird2){
        if(bird1.Flying_points < bird2.Flying_points){
            document.writeln(bird2.Name + " has better flying points than " + bird1.Name + " !<br>");
        }
        else if(bird1.Flying_points > bird2.Flying_points){
            document.writeln(bird1.Name + " has better flying points than " + bird2.Name + " !<br>");
        }
        else document.writeln(bird1.Name + " and " + bird2.Name + " are equal !<br>");
    }
    Move(){
        if(this.#_energy > 0 ){
            this.#Fly();
            this.#_energy--;
            this.#_hungry++;
        }
        else alert(this.Name + " not enough energy !");
    }
    Play(){
        if(this.#_energy > 0){
            document.writeln(this.Name + " is playing !<br>");
            this.#Chip_Chip();
            this.#_mood++;
            this.#_energy--;
            this.#_hungry++;
        }
        else alert(this.Name + " not enough energy !");
    }
    Eat(){
        super.Eat();
        this.#_hungry = 0;
        this.#Chip_Chip();
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
        super.Make_Sound();
        this.#Chip_Chip();
    }
    #Chip_Chip(){
        document.writeln(this.Name + " says Chip Chip !<br>");
    }
    #Fly(){
        document.writeln(this.Name + " is flying !<br>");
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
    }
}