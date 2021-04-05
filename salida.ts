console.log("Hello World");

//types

var myString: string = "Hello world";
myString = 22 + "";

var myNumber = 22;
var myNumber: number = 22;
var myBool: boolean = false;
var myVar: any = "hello";
myVar = false;

// strings

document.write(myNumber.toString());

//arrays

var stringArray: any[] = ["", "", ""];
stringArray = [1, 2, 3];

//tuple
var strNumTuple: [string, number];
strNumTuple = ["Hello", 22];

//void, undefined,null

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;
//FUNCTIONS
/*
function getSum(num1: number, num2: number) {
  return num1 + num2;
}

function getName(firstName: string, lastName?: string) {
  return `${firstName} ${lastName}`;
  if (lastName == undefined) {
    return firstName;
  }
}


function myVoidFunction(): void {
  return;
}
*/

//Interfaces

interface ITodo {
  title: string;
  text: string;
}
function showTodo(todo: ITodo) {
  console.log(`${todo.title} -${todo.text}`);
}

let myTodo: ITodo = {
  title: "Eat Dinner",
  text: "lorem",
};

showTodo(myTodo);

//Clases

class User {
  private name: string;
  public email: string;
  protected age: number;
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  register() {
    console.log(` ${this.name} is registered`);
  }

  showMeAge() {
    return this.age;
  }

  public AgeInYears() {
    return this.age + "years";
  }

  payInvoice() {
    console.log(`${this.name}  has paid the invoice`);
  }
}

var john = new User("John", "john@gmail.com", 24);

class Member extends User {
  id: number;
  constructor(id, name, email, age) {
    super(name, email, age);
    this.id = id;
  }
  payInvoice() {
    super.payInvoice();
  }
}
document.write(john.email);
