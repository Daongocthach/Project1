let cat = new Cat("Bob",GENDER.MALE,FOOD.FISH,13);
cat.Sleep();
cat.Move();
Animal.Print_Info(cat);
let cow1 = new Cow("Suzy",GENDER.FEMALE,FOOD.GRASS,15);
cow1.Check_Status();
let cow2 = new Cow("Tom",GENDER.MALE,FOOD.GRASS,13);
Cow.Compare_Size(cow1,cow2); 