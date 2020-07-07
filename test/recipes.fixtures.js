function makeRecipesArray() {
    return [
        {
            id: 1,
            name: "cool name",
            source: "https://www.coolsite.com",
            preptime: 1800,
            waittime: 1800,
            cooktime: 1800,
            servings: 6,
            comments: "this is a cool recipe",
            calories: 1200,
            fat: 50,
            satfat: 50,
            carbs: 50,
            fiber: 50,
            sugar: 50,
            protein: 50,
            instructions: "Be cool",
            ingredients: "coolness",
            tags: "cool",
        },
        {   
            id: 2,
            name: "cooler name",
            source: "https://www.coolersite.com",
            preptime: 1900,
            waittime: 1900,
            cooktime: 1900,
            servings: 8,
            comments: "this is a cooler recipe",
            calories: 12000,
            fat: 500,
            satfat: 500,
            carbs: 500,
            fiber: 500,
            sugar: 500,
            protein: 500,
            instructions: "Be cooler",
            ingredients: "coolerness",
            tags: "cooler",
        },
    ];
}

module.exports = {
    makeRecipesArray,
};
