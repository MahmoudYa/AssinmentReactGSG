//Task_2

const nums = [10, 20, 30, 40, 50];
const result = Cal_Sum_Average(numbers);
console.log(`Sum: ${result.totalSum}`);
console.log(`Average: ${result.average}`);

function Cal_Sum_Average(numbers) {
    const totalSum = numbers.reduce((sum, num) => sum + num, 0);
    const average = totalSum / numbers.length;
    return totalSum, average ;
}

//Task_3

const strings = ["apples", "bananas", "apples", "oranges", "bananas", "grapes"];
const uniqueStrings = removeAllDuplicates(strings);
console.log(`Unique Values ${uniqueStrings}`);

function removeAllDuplicates(array) {
    const uniqueValues = [...new Set(array)];
    return uniqueValues;
}

