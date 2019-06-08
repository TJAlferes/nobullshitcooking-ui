import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { IngredientBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';
import './ingredient.css';

let endpoint;
if (process.env.NODE_ENV === "production") {
  endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com';
} else {
  endpoint = 'http://localhost:3003';
}

const Ingredient = props => {
  const [ ingredient, setIngredient ] = useState({});

  // TODO: Redirect them to Ingredients if they only navigate to /ingredient (if there is no /:id)

  const getIngredient = async (id) => {
    try {
      const res = await axios.get(`${endpoint}/ingredient/${id}`);
      const row = res.data;
      setIngredient(row);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    const { id } = props.match.params;
    getIngredient(id);
  }, []);

  return (
    <div>
      <div>
        {
          (Object.keys(ingredient).length > 1) &&
          <IngredientBreadcrumbs ingredient={ingredient} />
        }
      </div>
      <div id="page">
        <div className="view-ingredient">
          <div className="ingredient-name">{ingredient.ingredient_name}</div>
          <div className="ingredient-image">
            <img src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${ingredient.ingredient_image}.jpg`} />
          </div>
          <div className="ingredient-type-name">
            Ingredient Type: {ingredient.ingredient_type_name}
          </div>
          <p>Nutrition: Coming soon.</p>
        </div>
      </div>
    </div>
  );
}

export default Ingredient;