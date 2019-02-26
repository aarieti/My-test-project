import React from 'react';

const RecipeList = (props) => (
 
    <div>
        <h2>Recipes</h2>
        <ul>
            {props.recipes.map(recipe => (

                <li key={recipe.id} onClick={() => props.onClick(recipe.id)} >
                    <span>{recipe.name}</span>
                    <span>{recipe.category}</span>
                </li>

            ))}
        

        </ul>
    
    </div>
)



export default RecipeList; 
amiel arieti
