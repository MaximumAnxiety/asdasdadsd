import {DrinkType, DrinksList, Ingreadient, Ingreadients, BetterDrinkType, BetterDrinkTypeList } from '../types';



const convertToBetterDrinksList = (drinksList: DrinksList): BetterDrinkTypeList => {
    return {
        drinks: drinksList.drinks.map(drink => {
            // Collect all ingredients and measures into an array of { name, measure }
            const ingredients: Ingreadient[] = [];
            
            for (let i = 1; i <= 15; i++) {
                const ingredient = drink[`strIngredient${i}` as keyof DrinkType] as string | null;
                const measure = drink[`strMeasure${i}` as keyof DrinkType] as string | null;

                if (ingredient) {
                    ingredients.push({
                        name: ingredient,
                        measure: measure || "",  // Use an empty string if measure is null
                    });
                }
            }

            // Return the BetterDrinkType object
            return {
                idDrink: drink.idDrink,
                strDrink: drink.strDrink,
                strDrinkAlternate: drink.strDrinkAlternate,
                strTags: drink.strTags,
                strVideo: drink.strVideo,
                strCategory: drink.strCategory,
                strIBA: drink.strIBA,
                strAlcoholic: drink.strAlcoholic,
                strGlass: drink.strGlass,
                strInstructions: drink.strInstructions,
                strInstructionsES: drink.strInstructionsES,
                strInstructionsDE: drink.strInstructionsDE,
                strInstructionsFR: drink.strInstructionsFR,
                strInstructionsIT: drink.strInstructionsIT,
                strInstructionsZH_HANS: drink.strInstructionsZH_HANS,
                strInstructionsZH_HANT: drink.strInstructionsZH_HANT,
                strDrinkThumb: drink.strDrinkThumb,
                ingreadients: ingredients, // Set the collected ingredients here
                strImageSource: drink.strImageSource,
                strImageAttribution: drink.strImageAttribution,
                strCreativeCommonsConfirmed: drink.strCreativeCommonsConfirmed,
                dateModified: drink.dateModified
            };
        })
    };
};
export default convertToBetterDrinksList;