
class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation.toLowerCase();
  }

  calculate() {
    switch (this.operation) {
      case "add":
      case "addition":
        return this.a + this.b;
      case "subtract":
      case "subtraction":
        return this.a - this.b;
      case "multiply":
      case "multiplication":
        return this.a * this.b;
      case "divide":
      case "division":
        if (this.b === 0) {
          return "Error: Division by zero";
        }
        return this.a / this.b;
      default:
        return "Error: Unknown operation";
    }
  }
}


const calc1 = new Calculator(10, 5, "add");
console.log("Result:", calc1.calculate()); 

// const calc2 = new Calculator(10.5, 0, "divide");
// console.log("Result:", calc2.calculate());  
