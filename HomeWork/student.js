function aboutStudent(sName, sAge, sRaiting) {
  let Student = {
     name: sName,
     age: sAge,
     raiting: sRaiting,
    
    getBirthyear(){
     let today = new Date();
     let birthYear = today.getFullYear() - this.age;
      console.log(`${this.name} birth year is ${birthYear}`);
      
         if (birthYear%4 == 0){
           console.log(`${this.name} birth year is leap year`);
           return 1; 
         }
        if (birthYear%4 !== 0){ 
          console.log(`${this.name} birth year is not leap year`);
          return 0;
         }
      
    }
  }
  return Student;
}

function getRaiting(obj){
  
  let maxPoint = prompt ("Enter number of all points");
  
  PredictedPoints = (obj.raiting/maxPoint)*100 + 3*obj.getBirthyear();
  console.log(`${obj.name} predicted points are ${PredictedPoints}`)
  
    if ( PredictedPoints >= 85) {
      finalGrade = 5;
    } 
    else  if ( 60 <= PredictedPoints && PredictedPoints < 85){
      finalGrade = 4;
    }
    else if ( 40 <= PredictedPoints && PredictedPoints < 60){
      finalGrade = 3;
    }
    else if ( PredictedPoints && PredictedPoints < 40){
      finalGrade = 2;
    }
  console.log(`${obj.name} final grade is ${finalGrade}`);
  console.log(   ); //это специально
}

let allStudent = [];

for (;;) { 
  
  let name = prompt("Enter students name");
  console.log(`Student name is ${name}`);
  
  let age = prompt("Enter students age");
  console.log(`${name} age is ${age}`);
  
  let raiting = prompt("Enter students raiting");
  console.log(`Current ${name} points are ${raiting}`);
  
  let newStudent = (aboutStudent(name, age, raiting));
  
  getRaiting(aboutStudent(name, age, raiting));
  allStudent.push(newStudent);
  
     if (window.confirm("Leave?")) {
    break;
   }
}