//https://leetcode.com/problems/create-target-array-in-the-given-order/

function orderedArr(numArr, index){

    
    var targetArr = [];

    for(var i = 0; i < index.length; i++){
        targetArr.splice(index[i], 0 , numArr[i])
        
    }
   return targetArr;
}

orderedArr([0,1,2,3,4], [0,1,2,2,1])