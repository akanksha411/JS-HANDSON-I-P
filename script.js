
console.log('Q1');
const parent1 = {
    firstname : 'Aryan',
    lastname : 'Purty',
    addres : 'jamshedpur',
    fullname(){
        return (`${this.firstname} ${this.lastname}`)
    }

}


const child1 = {
    __proto__:parent1
}
console.log(child1.fullname());

console.log('Q2');
const parent = {
    firstname : 'Aryan',
    lastname : 'Purty',
    addres : 'jamshedpur',
    fullname(){
        return (`${this.firstname} ${this.lastname}`)
    }

}

const child = {
    __proto__:parent
}
const son = {
    __proto__:child
}

console.log(son.fullname());

console.log('Q3');

arr = [1, 2, 3, 4]
arr1 = [3, 2, 5, 4]
arr2 = [4, 2, 2, 4]

const array = {
add: function (a){
    sum=0;
    for(i=0; i < a.length; i++){
        sum = sum + a[i]
    }
    console.log(sum);
}
}
Array.__proto__=array
Array.add(arr1)

console.log('Q4');

var obj = {
    name : "Aryan",
    course : "full-stack",
    college : "BIT",
    branch : "IT",
    roll : 5
}
result = Object.keys(obj)
console.log(result);