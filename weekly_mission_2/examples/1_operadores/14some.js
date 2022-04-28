const bools = [true, true, false, true]
const areSomeTrue = bools.some((b) => b===false)
if(areSomeTrue==true){
    result = 'verdadero'
}
else{
    result = 'falso'
}
console.log(result)