  class Animal{                                         //Abstract class
  #_name;     //Private fields
  #_gender;
  constructor(name,gender){
    if(this.constructor === Animal){
      throw new Error("Can't create abstract class !");
    }
  this.Name = name;
  this.Gender = gender;
  }
  set Name(name){
    if(name.length <=10 && name.length >0 ){
      this.#_name = name; 
    }
    else{
      alert("Invalid name !");
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
  Move(){                                                   //Abstract method
    throw new Error("Abstract method is not implemented !");
  }
  Eat(){
    throw new Error("Abstract method is not implemented !");
  }
}
const Normal_Status = {     //Hang so, ko the thay doi gtri
  MOOD: 5,
  HUNGRY: 5,
  ENERGY: 5
}
const GENDER ={     
  MALE: "male",
  FEMALE: 'female'
}
oject.freeze(GENDER);
