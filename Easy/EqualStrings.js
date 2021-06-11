//https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

function equalStrings(word1, word2){

    if(word1.join('') == word2.join('')){
        return true
    }else{
        return false
    }

}

console.log(equalStrings(["a", "bc"], ["ab", "c"]))

