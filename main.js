var cat = new Cat("Bob",GENDER.MALE,FOOD.BEEF,13);
var cow1 = new Cow("Suzy",GENDER.FEMALE,FOOD.GRASS,15);
var cow2 = new Cow("Tom",GENDER.MALE,FOOD.FRUIT,12);
var dolphin = new Dolphin("Yasuo",GENDER.MALE,FOOD.FISH,10);
var bird = new Bird("Rumble",GENDER.MALE,FOOD.FRUIT,6);
function showBob() {
    Animal.Print_Info(cat);
}
function showSuzy() {
    Animal.Print_Info(cow1);
}
function showTom() {
    Animal.Print_Info(cow2);
}
function showYasuo() {
    Animal.Print_Info(dolphin);
}
function showRumble() {
    Animal.Print_Info(bird);
}
cat.Make_Sound();
cat.Play();
cat.Eat();
cat.Check_Status();
document.writeln("<br>");
cow1.Sleep();
cow2.Move();
document.writeln("Tom size = " + cow2.Size + "<br>");
document.writeln("Suzy size = " + cow1.Size + "<br>");
Cow.Compare_Size(cow1,cow2);
document.writeln("<br>");
bird.Move();