class Dolphin extends DvAnThit
{
    #_energy = Normal_Status.ENERGY;
    #_hungry = Normal_Status.HUNGRY;
    #_mood = Normal_Status.MOOD;
    #_Swimming_speed = Math.floor(Math.random() * 11);
    constructor(name,gender,food,age)
    {
        super(name,gender,food,age);
        Dolphin.#_number_of_dolphins++;
    }
    static #_number_of_dolphins = 0;
    static Compare_swimming_speed(d1,d2)
    {
        if(d1.Swimming_speed < d2.Swimming_speed)
        {
            document.writeln(d2.Name + " has better swimming skill than " + d1.Name + " !<br>");
        }
        else if(d1.Swimming_speed > d2.Swimming_speed)
        {
            document.writeln(d1.Name + " has better swimming skill than " + d2.Name + " !<br>");
        }
        else document.writeln(d1.Name + " and " + d2.Name + " are equal !<br>");
    }
    get Number_of_dolphins()
    {
        return Dolphin.#_number_of_dolphins;
    }
    get Swimming_speed()
    {
        return this.#_Swimming_speed;
    }
    Play()
    {
        if(this.#_energy > 0)
        {
            document.writeln(this.Name + " is playing !<br>");
            this.Make_Sound();
            this.#_mood++;
            this.#_energy--;
            this.#_hungry++;
        }
        else
        {
            alert(this.Name + " is not enough energy !");
        }
    }
    Move()
    {
        if(this.#_energy > 0 )
        {
            this.#Swim();
            this.#_energy--;
            this.#_hungry++;
        }
        else alert(this.Name + " is not enough energy !");
    }
    #Swim()
    {
        document.writeln(this.Name + " is swimming !<br>");
    }
    Eat()
    {
        super.Eat();
        this.#_hungry = 0;
        this.Make_Sound();
    }
    Make_Sound()
    {
        document.writeln("Ririri !<br>");
    }
    Sleep()
    {
        if(this.#_energy < 10)
        {
            document.writeln(this.Name + " is sleeping ZZzzzz~~<br>");
            this.#_energy++;
            this.#_hungry++;
        }
        else alert(this.Name + " is full energy !");
    }
    Check_Status()
    {
        var flag = true;
        if(this.#_hungry > 8)
        {
            this.#_mood = 0;
            document.writeln(this.Name + " is hungry !<br>");
            flag = false;
        }
        else
        {
            document.writeln(this.Name + " is not hungry !<br>");
        }
        if(this.#_mood === 0 )
        {
            document.writeln(this.Name + " is not happy !<br>");
            flag = false;
        }
        else
        {
            document.writeln(this.Name + " is happy !<br>");
        }
        if(this.#_energy <= 2)
        {
            document.writeln(this.Name + " is tired !<br>");
            flag = false;
        }
        else
        {
            document.writeln(this.Name + " is excited !<br>");
        }
        if(flag === true)
        {
            document.writeln(this.Name + " is healthy !<br>");
        }
        else document.writeln(this.Name + " is not healthy !<br>")
    }
}
