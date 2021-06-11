//Link to question https://leetcode.com/problems/shuffle-the-array/

function shuffleArray(array, x){

    var shuffledArr = [];

    for(var i = 0; i < x; i++){
        shuffledArr.push(array[i], array[i+x]);

    }
    console.log(shuffledArr)
    return shuffledArr;

}

shuffleArray([1,2,3,4,4,3,2,1], 4)