//Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
function findFirstVovel(str) {
    const vovel = "aeiouAEIOU";
    for (const char of str) {
        if (vovel.includes(char)) {
            console.log(`First vovel found:${char}`);
            break;
        }
        console.log(char);
    }
}
findFirstVovel("pakistan"); // Logs 'p', 'a', 'k', 'i', 's','t','a','n',and then 'First vowel found: a'
export {};
// Demonstrates iterating through a string and stopping at the first vowel.
