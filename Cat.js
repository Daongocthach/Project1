class Cat extends DvAnThit{
    _animal_type = "Cat";
    #_energy = Normal_Status.ENERGY;            //Moi con vat khi dc khoi tao deu se co nhung chi so mac dinh
    #_hungry = Normal_Status.HUNGRY;            
    #_mood = Normal_Status.MOOD;
    #_night_vision_point = Math.floor(Math.random() * 11);  //Random cac so tu 0 den 10
    constructor(name,gender,food,age){                          //Math.random() tra ve 1 so ngau nhien co gtri tu [0,1)
        super(name,gender,food,age);                            //Math.random() ket hop vs Math.floor() co the dc su dung de tra ve so nguyen
        Cat.#_number_of_cats++;
        document.writeln("<br>")
    }
    get Night_vision_point(){             //Moi con meo khi dc tao se co diem tam nhin rieng ko thay doi dc nen chi co Get
        return this.#_night_vision_point;
    }
    static #_number_of_cats = 0;            //private static field
    static get Number_of_cats(){            //static property
        return Cat.#_number_of_cats;
    }
    static Catch_Mouse(cat){
        document.writeln(cat.Name + " is catching a mouse ! <br>");      //tu khoa <br> de xuong dong tren trang html
    }
    static Compare_night_vision(cat1,cat2){         //Static method
        if(cat1.Night_vision_point < cat2.Night_vision_point){
            document.writeln(cat2.Name + " has better night vision than " + cat1.Name + " !<br>")
        }
        else if(cat1.Night_vision_point > cat2.Night_vision_point){
            document.writeln(cat1.Name + " has better night vision than " + cat2.Name + " !<br>")
        }
        else document.writeln(cat1.Name + " and " + cat2.Name + " are equal !<br>")
    }
    #Meow(){
        document.writeln(this.Name + " says Meow !<br>");
    }
    Make_Sound(){
        super.Make_Sound();
        this.#Meow();
    }
    Play(){
        if(this.#_energy > 0){
            document.writeln(this.Name + " is playing !<br>");
            this.#Meow();
            this.#_mood++;                    
            this.#_energy--;
            this.#_hungry++;
        }
        else{
            alert(this.Name + " is not enough energy !");
        }
    }
    //override lai phuong thuc Move()
    Move(){
        if(this.#_energy > 0 ){
            this.#Run();
            this.#_energy--;
            this.#_hungry++;
        }
        else alert(this.Name + " is not enough energy !");
    }
    #Run(){
        document.writeln(this.Name + " is running !<br>");
    }
    Eat(){
        super.Eat();
        this.#_hungry = 0;
        this.#Meow();
    }
    Sleep(){
        if(this.#_energy < 10){
            document.writeln(this.Name + " is sleeping ZZzzzz~~<br>");
            this.#_energy++;
            this.#_hungry++;
        }
        else alert(this.Name + " is full energy !");
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