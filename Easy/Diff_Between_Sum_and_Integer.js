

function subtractProductAndSum(num){
    
    var toString = num + ''
    var digits = [];
    var sum = 0;
    var product = 1;
    var result;


    for(var i = 0; i < toString.length; i++){
        digits.push(toString.charAt(i))
    }

    for(var k = 0; k < digits.length; k++){
        var temp = parseInt(digits[k])

        sum = sum + temp;
        product = product*temp

    }
    result = product - sum;
    return result;

}

subtractProductAndSum(4421)
