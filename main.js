var Bob = new Cat("Bob",GENDER.MALE,FOOD.BEEF,13);
var Suzy = new Cow("Suzy",GENDER.FEMALE,FOOD.GRASS,15);
var Tom = new Cow("Tom",GENDER.MALE,FOOD.FRUIT,12);
var Yasuo = new Dolphin("Yasuo",GENDER.MALE,FOOD.FISH,10);
var Rumble = new Bird("Rumble",GENDER.MALE,FOOD.FRUIT,6);
function showBob() {
    Animal.Print_Info(Bob);
}
function showSuzy() {
    Animal.Print_Info(Suzy);
}
function showTom() {
    Animal.Print_Info(Tom);
}
function showYasuo() {
    Animal.Print_Info(Yasuo);
}
function showRumble() {
    Animal.Print_Info(Rumble);
}
function Bob_Play() {
    Bob.Play_Console();
}
function Bob_Sleep() {
    Bob.Sleep_Console();
}
function Bob_Eat(){
    Bob.Eat_Console();
}
function Bob_Move(){
    Bob.Move_Console();
}
function Suzy_Play(){
    Suzy.Play_Console();
}
function Suzy_Sleep(){
    Suzy.Sleep_Console();
}
function Suzy_Eat(){
    Suzy.Eat_Console();
}
function Suzy_Move(){
    Suzy.Move_Console();
}
Bob.Make_Sound();
Bob.Play();
Bob.Eat();
Bob.Check_Status();
document.writeln("<br>");
Suzy.Sleep();
Suzy.Move();
document.writeln("Tom size = " + Tom.Size + "<br>");
document.writeln("Suzy size = " + Suzy.Size + "<br>");
Cow.Compare_Size(Suzy,Tom);
document.writeln("<br>");
Rumble.Move();
document.writeln("The number of cows = " + Cow.Number_of_cows);