//we can throw any type string, number , Error , Exception
//after that we can catch error to return a value or display the error message
const calcDiv = (number) => {
  if(typeof number !== 'number')
    throw TypeError('retry entering the input !')
  25/number
}

try{
  console.log(calcDiv('m'));
}catch(e){
  console.log(e.message)
}
