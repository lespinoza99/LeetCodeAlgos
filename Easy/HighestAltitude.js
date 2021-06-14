//https://leetcode.com/problems/find-the-highest-altitude/

// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.


function GoalParser(gain) {
    var netAltitude = [0]
    var max = netAltitude[0];

    for(var i = 0; i <= gain.length; i++){
        netAltitude.push(netAltitude[i] + gain[i])
        if( netAltitude[i] > max){
            max = netAltitude[i]
        }
    }
    console.log(netAltitude)
    console.log(max)
    return max;

}

GoalParser([44,32,-9,52,23,-50,50,33,-84,47,-14,84,36,-62,37,81,-36,-85,-39,67,-63,64,-47,95,91,-40,65,67,92,-28,97,100,81])