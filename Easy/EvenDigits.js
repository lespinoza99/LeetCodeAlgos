//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

function findNumbers(nums){

    var amount = 0;
    for(var i = 0; i < nums.length; i++){
        if(nums[i].toString().length % 2 == 0){
            amount++
        }
    }
    return amount;
};

findNumbers([555,901,482,1771] )