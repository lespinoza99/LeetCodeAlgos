// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

function greatestNumOfCandies(candies, extraCandies){

    var max = 0;

    for(var i = 0; i < candies.length; i++){
        if(candies[i] >= max ){
            max = candies[i]
        }
    }
    for(var x = 0; x < candies.length; x++){
        if(candies[x] + extraCandies >= max){
            candies[x] = true
        }else{
            candies[x] = false
        }
    }
        console.log("max", max)
    console.log(candies)
    return candies;
}

greatestNumOfCandies([2,8,7], 1)