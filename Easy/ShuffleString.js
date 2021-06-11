// https://leetcode.com/problems/shuffle-string/

function ShuffleString(string, array){

    var shuffledStringArr = [];

    for(var i = 0; i < array.length; i++){
        shuffledStringArr[array[i]] = string[i];
 
    }
    console.log(shuffledStringArr.join(''))
 
   return shuffledStringArr.join('')
}

ShuffleString("codeleet", [4,5,6,7,0,2,1,3])
