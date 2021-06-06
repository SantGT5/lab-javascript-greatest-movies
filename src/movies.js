// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  let result = [];

  for (let i = 0; i < movies.length ; i++){
    result.push(movies[i].director)
    return result;
  }

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  let arr = []
  
    for(let i = 0; i < movies.length; i++){
      if(movies[i].director === 'Steven Spielberg'){
          if(movies[i].genre.includes('Drama')){
            
            arr.push(movies[i].genre.includes('Drama'))
            
        }
      }
    }
    return arr.length
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {


  let newArr = [];
  let myFloat = 0;

  for(let i = 0; i < movies.length ; i++){
    
    newArr.push(movies[i].score);
    myFloat += movies[i].score;
    let total = Math.round(myFloat.toFixed(1));
    return total/movies.length;
  }




}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  let sortedYear = [];
  
    for (let i = 0; i < movies.length; i++) {
      sortedYear.push(movies[i].year);
    }
  
    sortedYear.sort((a, b) => {
      return a - b;
    });
  
    return sortedYear;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

let arr = []

  for(let i = 0; i < movies.length; i++){
    if(i < 20 ){
      
      arr.push(movies[i].title)
      arr.sort()
      
    }
    
  }
  return arr.sort();
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
