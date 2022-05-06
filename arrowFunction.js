//1 - arrow is a short hand for creating a unction
//2 - doesn't bind arguments global built in var
//3 - doesn't bing this like last exmple
const students = [
  {age:10, name: 'jack'},
  {age:15, name: 'sara'},
  {age:20, name: 'mo'}
];

const filterSmallerThan20= (students)=> students.filter(student=>student.age<20);
console.log(filterSmallerThan20(students));

const car = {
  name: 'ferari',
  distance: 10,
  time: 2,
  getSpeed: ()=>{
    console.log(this);
    return this.distance/this.time;
  }
}
console.log('speed = ' + car.getSpeed())