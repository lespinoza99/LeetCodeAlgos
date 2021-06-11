//https://leetcode.com/problems/richest-customer-wealth/


function maximumWealth(accounts){
    var max = 0;
    var sum = 0;
    for(var i = 0; i < accounts.length; i++){

        for(var x = 0; x < accounts[i].length; x++){
            sum = sum + accounts[i][x]
        }
        if(sum > max){
            max = sum;
        }
        sum = 0;
    }
    return max

}

maximumWealth([[2,8,7],[7,1,3],[1,9,5]])