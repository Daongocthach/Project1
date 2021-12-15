class Animal{                                         //Abstract class
  #_name;     //Private fields
  #_gender;
  #_age;
  constructor(name,gender,age){
    if(this.constructor === Animal){
      throw new Error("Can't create abstract class !");
    }
  this.Name = name;
  this.Gender = gender;
  this.Age = age;
  }
  set Age(age){
    if(typeof(age) === 'number'){
      this.#_age = age;
    }
    else{
      alert("Invalid Age !");
      throw new Error("Invalid Age !");
    }
  }
  get Age(){
    return this.#_age;
  }
  set Name(name){
    if(name.length >0 && name.length <=10){
      this.#_name = name; 
    }
    else{
      alert("Invalid name !");                //Từ khóa alert sẽ làm xuất hiện hộp thoại thông báo trên trang html 
      throw new Error("Invalid name !");
    }
  }
  get Name(){         //Property
    return this.#_name;
  }
  set Gender(gender){
    if(gender === GENDER.MALE || gender === GENDER.FEMALE){           //Toan tu === so sanh luon ca kieu du lieu 
      this.#_gender = gender;
    }
    else{
      alert("Invalid gender !");
      throw new Error("Invalid gender !");
    }
  }
  get Gender(){
    return this.#_gender;
  }
  static Print_Info(animal)
  {
    document.writeln(animal.Name + " information:<br>");
    document.writeln("Animal type: " + animal._animal_type + "<br>");
    document.writeln("Name: " + animal.Name + "<br>");
    document.writeln("Sex: " + animal.Gender + "<br>");
    document.writeln("Age: " + animal.Age + "<br>");
  }
  Move(){                                                   //Abstract method
    throw new Error("Abstract method is not implemented !");
  }
  Eat(){
    throw new Error("Abstract method is not implemented !");
  }
  Make_Sound(){
    throw new Error("Abstract method is not implemented !");
  }
}
const Normal_Status = {     //Hang so, ko the thay doi gtri
  MOOD: 5,
  HUNGRY: 5,
  ENERGY: 5
}
const GENDER ={           //Kieu enum GENDER   
  MALE: "male",
  FEMALE: 'female'
}
Object.freeze(GENDER);    //Ko the them truc tiep cac thanh phan khac vao GENDER