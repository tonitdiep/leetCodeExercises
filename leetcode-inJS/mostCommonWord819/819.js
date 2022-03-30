

var mostCommonWord = function(paragraph, banned) {

//hash set of the bannned words
    let bannedSet = new Set(banned);
    // console.log(bannedSet)
//hashmap counting side word and count of the word (words that are not banned)

    let map = {};
    let wordArray = paragraph.toLowerCase().match(/[a-z]+/g)
        // console.log(wordArray)
    for(let i = 0; i < wordArray.length; i++){
        if(!bannedSet.has(wordArray[i])){
            map[wordArray[i]] = (map[wordArray[i]] | 0) + 1;
        }
    }

    let maxCount = 0;
    let maxWord = " ";
    
    for(let key in map){
        if (map[key] > maxCount){
            maxWord = key;
            maxCount = map[key];
        }
      
    }

    return maxWord;
}
console.log(mostCommonWord(paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]))

/*
Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"

Question:
Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.

Thinking out loud:
banned a list of a string array of banned words
paragraph is a string

return most frequently used word that is not banned
--> ans is unique as we are guaranteed that @ least one word isn't banned
        "paragraph" (a string) of banned words in "banned"
--> words in "paragraph" are case-insensitive 
        so returned ans in lowercase
*about string manipulation
JS implementation string data type
*/