/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function(sentence, suffixCallbacks){
    let words = [];
    let currentWord = "";

    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] === ' ' || i === sentence.length -1){
            words.push(currentWord);
            currentWord = "";
        }else{
            currentWord += sentence[i];
        }
    }
    let modifiedSentence = "";
    // Percorre cada palavra e aplica o callback apropriado
    words.forEach(word => {
        let modifiedWord = applyCallback(word, suffixCallbacks);
        modifiedSentence += modifiedWord + " ";
    });

    return modifiedSentence.trim();
}

function applyCallback(word, suffixCallbacks) {
    // Percorre manualmente os sufixos e verifica se a palavra termina com algum deles
    for (let suffix in suffixCallbacks) {
        if (word.endsWith(suffix)) {
            return suffixCallbacks[suffix](word);
        }
    }
    return word;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
