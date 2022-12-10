// Number One :
function PetitCitron(num){
  let result = num;
    if(num % 14 == 0)
      result = "PetitCitron";
    else if(num % 7 == 0)
      result = "Citron";
    else if(num % 2 == 0)
      result = "petit";
    return result
}
// PetitCitron();
console.log(PetitCitron(18));

//Number Two : 

const recette = {
  name: "Poulet au curry",
  ingredients: ['Poulet', 'Curry'],
  instruction: ['Faire cuire le poulet', 'Ajouter le curry'],
  macros : {fat: 50, carbohydrate: 100, pretien: 5000}
}

function x(recette) {
  const caloriesArr = Object.entries(recette.macros).map(([key, value])=> value)
const caloriesSum = caloriesArr.reduce((acc, curr) => acc + curr, 0) 

  console.log(caloriesArr, caloriesSum )
  
  return caloriesSum > 1000
}

console.log(x(recette))
