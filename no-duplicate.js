/**
 * array has some duplicate
 * []
 */ 

const biriyaniKhor = ['abul', 'kabul', 'babul', 'chabul', 'babul']
const numbers = [1, 2, 45, 65, 45, 2, 1,];

function noDuplicate(array){
    const unique = []
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biriyaniKhor);
console.log(uniqueArray);

