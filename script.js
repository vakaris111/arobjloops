//1
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);


//2
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));


//3
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    genres: ["Sci-Fi", "Thriller"],
    year: 2010,
    getAge: function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
};

console.log(`${movie.title} is ${movie.getAge()} years old.`);
