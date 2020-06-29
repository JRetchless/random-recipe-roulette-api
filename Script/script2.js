//we want to read the file and make an sql file that will insert data into database

const fs = require('fs');
const pg_escape = require('pg-escape');
// const recipes = require('./recipes');
let recipes=JSON.parse(fs.readFileSync('recipes.json'))

let sql=`insert into random_recipes(name, source, preptime, waittime, cooktime, servings, comments, calories, fat, satfat, carbs, fiber, sugar, protein, instructions, ingredients, tags)
values`
// console.log(recipes)
function my_escape(sql){
    return pg_escape.literal(sql+'')
}

let keys = Object.keys(recipes)
console.log(keys)
for(let i =0; i<keys.length; i++){
    // if(recipes[keys[i]].ingredients && recipes[keys[i]].ingredients['length']){
    //     for(let j=0;j<recipes[keys[i]].ingredients['length'];j++){
    //       recipes[keys[i]].ingredients[j].trim()
    //     }
    // }
    console.log(`(,${my_escape(recipes[keys[i]].ingredients.join())}),`);
//     sql+=`(${my_escape(recipes[keys[i]].name)},${my_escape(recipes[keys[i]].source)},${recipes[keys[i]].preptime},
//     ${recipes[keys[i]].waittime}, ${recipes[keys[i]].cooktime},${recipes[keys[i]].servings},
//     ${my_escape(recipes[keys[i]].comments)},${recipes[keys[i]].calories},${recipes[keys[i]].fat},
//     ${recipes[keys[i]].satfat},${recipes[keys[i]].carbs},${recipes[keys[i]].fiber},${recipes[keys[i]].sugar},
//     ${recipes[keys[i]].protein},${my_escape(recipes[keys[i]].instructions)},
//     ${my_escape(recipes[keys[i]].ingredients.join())},${my_escape(recipes[keys[i]].tags.join('\r'))}),`
}
// fs.writeFileSync('seed.recipes.sql', sql, {encoding:"utf8"})