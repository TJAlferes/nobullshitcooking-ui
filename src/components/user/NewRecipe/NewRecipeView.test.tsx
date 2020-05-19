import { shallow } from 'enzyme';
import React from 'react';
import { Link } from 'react-router-dom';

import { ExpandCollapse } from '../../ExpandCollapse/ExpandCollapse';
import { LoaderButton } from '../../LoaderButton/LoaderButton';
import { EquipmentRow } from './views/EquipmentRow/EquipmentRow';
import { IngredientRow } from './views/IngredientRow/IngredientRow';
//import { SubrecipeRow } from './views/SubrecipeRow/SubrecipeRow';
import { ImageUploads } from './views/ImageUploads';
import { NewRecipeView } from './NewRecipeView';

const beginProps = {
  id: 0,
  oneColumnATheme: "one-column-a-light",
  authname: "Person",
  feedback: "Some message.",
  loading: false,
  editing: false,
  ownership: "private",
  recipeTypeId: 1,
  cuisineId: 1,
  title: "Title",
  description: "",
  directions: "",
  methods: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false
  },
  equipmentRows: [
    {key: "XYZ1", amount: "", type: "", equipment: ""},
    {key: "XYZ2", amount: "", type: "", equipment: ""}
  ],
  ingredientRows: [
    {key: "XYZ3", amount: 1, unit: "", type: "", ingredient: ""},
    {key: "XYZ4", amount: 1, unit: "", type: "", ingredient: ""}
  ],
  subrecipeRows: [],
  prevRecipeImage: "nobsc-recipe-default",
  prevEquipmentImage: "nobsc-recipe-equipment-default",
  prevIngredientsImage: "nobsc-recipe-ingredients-default",
  prevCookingImage: "nobsc-recipe-cooking-default",
  dataRecipeTypes: [
    {recipe_type_id: 1, recipe_type_name: "Drink"},
    {recipe_type_id: 2, recipe_type_name: "Appetizer"}
  ],
  dataCuisines: [
    {cuisine_id: 1, cuisine_name: "American", cuisine_nation: "America"},
    {cuisine_id: 2, cuisine_name: "Japanese", cuisine_nation: "Japan"}
  ],
  dataMethods: [
    {method_id: 1, method_name: "Steam"},
    {method_id: 2, method_name: "Freeze"}
  ],
  dataEquipment: [
    {
      equipment_id: 1,
      equipment_name: "Cutting Board",
      equipment_type_id: 2,
      owner_id: 1,
      equipment_type_name: "Preparing",
      equipment_description: "You need one.",
      equipment_image: "nobsc-cutting-board"
    },
    {
      equipment_id: 2,
      equipment_name: "Metal Spatula",
      equipment_type_id: 3,
      owner_id: 1,
      equipment_type_name: "Cooking",
      equipment_description: "You need one.",
      equipment_image: "nobsc-metal-spatula"
    }
  ],
  dataMyPrivateEquipment: [],
  dataMeasurements: [
    {measurement_id: 1, measurement_name: "teaspoon"},
    {measurement_id: 2, measurement_name: "Tablespoon"}
  ],
  dataIngredientTypes: [
    {ingredient_type_id: 11, ingredient_type_name: "Vegetable"},
    {ingredient_type_id: 12, ingredient_type_name: "Fruit"}
  ],
  dataIngredients: [
    {
      ingredient_id: 1,
      ingredient_name: "Apple",
      ingredient_type_id: 12,
      owner_id: 1,
      ingredient_type_name: "Fruit",
      ingredient_description: "Energizing",
      ingredient_image: "nobsc-apple"
    },
    {
      ingredient_id: 2,
      ingredient_name: "Spinach",
      ingredient_type_id: 11,
      owner_id: 1,
      ingredient_type_name: "Vegetable",
      ingredient_description: "Strengthening",
      ingredient_image: "nobsc-spinach"
    }
  ],
  dataMyPrivateIngredients: [],
  dataRecipes: [],
  dataMyPrivateRecipes: [],
  dataMyPublicRecipes: [],
  dataMyFavoriteRecipes: [],
  dataMySavedRecipes: [],
  recipeImage: null,
  recipeEquipmentImage: null,
  recipeIngredientsImage: null,
  recipeCookingImage: null,
  cropOne: {aspect: 280 / 172},
  cropFullSizePreview: "",
  cropThumbSizePreview: "",
  cropTinySizePreview: "",
  cropTwo: {aspect: 280 / 172},
  equipmentCropFullSizePreview: "",
  cropThree: {aspect: 280 / 172},
  ingredientsCropFullSizePreview: "",
  cropFour: {aspect: 280 / 172},
  cookingCropFullSizePreview: "",
  handleRecipeTypeChange: jest.fn(),
  handleCuisineChange: jest.fn(),
  handleTitleChange: jest.fn(),
  handleDescriptionChange: jest.fn(),
  handleDirectionsChange: jest.fn(),
  handleMethodsChange: jest.fn(),
  handleEquipmentRowChange: jest.fn(),
  handleIngredientRowChange: jest.fn(),
  handleSubrecipeRowChange: jest.fn(),
  addEquipmentRow: jest.fn(),
  removeEquipmentRow: jest.fn(),
  addIngredientRow: jest.fn(),
  removeIngredientRow: jest.fn(),
  addSubrecipeRow: jest.fn(),
  removeSubrecipeRow: jest.fn(),
  onSelectFile: jest.fn(),
  onSelectEquipmentFile: jest.fn(),
  onSelectIngredientsFile: jest.fn(),
  onSelectCookingFile: jest.fn(),
  onImageLoaded: jest.fn(),
  onEquipmentImageLoaded: jest.fn(),
  onIngredientsImageLoaded: jest.fn(),
  onCookingImageLoaded: jest.fn(),
  onCropOneChange: jest.fn(),
  onCropTwoChange: jest.fn(),
  onCropThreeChange: jest.fn(),
  onCropFourChange: jest.fn(),
  onCropComplete: jest.fn(),
  onEquipmentCropComplete: jest.fn(),
  onIngredientsCropComplete: jest.fn(),
  onCookingCropComplete: jest.fn(),
  cancelRecipeImage: jest.fn(),
  cancelRecipeEquipmentImage: jest.fn(),
  cancelRecipeIngredientsImage: jest.fn(),
  cancelRecipeCookingImage: jest.fn(),
  handleSubmit: jest.fn()
};
/*const 
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {...originalModule, Link: () => <div></div>};
});*/

afterEach(() => {
  jest.clearAllMocks();
});

describe('NewRecipeView', () => {

  describe('when creating', () => {

    describe('when ownership is private', () => {
      const wrapper = shallow(<NewRecipeView {...beginProps} />);

      it('displays a h1 element with text Submit New Private Recipe', () => {
        expect(wrapper.find('h1').text()).toEqual("Submit New Private Recipe");
      });

      it('displays an input element with the following properties', () => {
        const props = wrapper.find('input[name="private"]').props();
        expect(props.type).toEqual("radio");
        expect(props.checked).toEqual(true);
        expect(props.value).toEqual("private");
        expect(props.disabled).toEqual(true);
      });
  
      it('displays another input element with the following properties', () => {
        const props = wrapper.find('input[name="public"]').props();
        expect(props.type).toEqual("radio");
        expect(props.checked).toEqual(false);
        expect(props.value).toEqual("public");
        expect(props.disabled).toEqual(true);
      });
    });

    describe('when ownership is public', () => {
      const beginPropsCopy = {...beginProps};
      beginPropsCopy.ownership = "public";
      const wrapper = shallow(<NewRecipeView {...beginPropsCopy} />);

      it('displays a h1 element with text Submit New Public Recipe', () => {
        expect(wrapper.find('h1').text()).toEqual("Submit New Public Recipe");
      });

      it('displays an input element with the following properties', () => {
        const props = wrapper.find('input[name="private"]').props();
        expect(props.type).toEqual("radio");
        expect(props.checked).toEqual(false);
        expect(props.value).toEqual("private");
        expect(props.disabled).toEqual(true);
      });
  
      it('displays another input element with the following properties', () => {
        const props = wrapper.find('input[name="public"]').props();
        expect(props.type).toEqual("radio");
        expect(props.checked).toEqual(true);
        expect(props.value).toEqual("public");
        expect(props.disabled).toEqual(true);
      });
    });
  });

  describe('when editing', () => {

    describe('when ownership is private', () => {
      it('displays a h1 element with text Edit Private Recipe', () => {
        const props = {...beginProps};
        props.editing = true;
        const wrapper = shallow(<NewRecipeView {...props} />);
        expect(wrapper.find('h1').text()).toEqual("Edit Private Recipe");
      });
    });

    describe('when ownership is public', () => {
      it('displays a h1 element with text Edit Public Recipe', () => {
        const props = {...beginProps};
        props.editing = true;
        props.ownership = "public";
        const wrapper = shallow(<NewRecipeView {...props} />);
        expect(wrapper.find('h1').text()).toEqual("Edit Public Recipe");
      });
    });

  });

  describe('content', () => {
    const wrapper = shallow(<NewRecipeView {...beginProps} />);

    it('displays feedback', () => {
      expect(wrapper.find('p.new-recipe-feedback').text())
      .toEqual("Some message.");
    });

    it('displays an ExpandCollapse component', () => {
      expect(wrapper.find(ExpandCollapse)).toHaveLength(1);
    });

    it('displays a h2 element with text Ownership', () => {
      expect(wrapper.find('[data-test="ownership-heading"]').text())
      .toEqual("Ownership");
    });

    it('displays a h2 element with text Type Of Recipe', () => {
      expect(wrapper.find('[data-test="recipe-type-heading"]').text())
      .toEqual("Type of Recipe");
    });

    it('displays a h2 element with text Cuisine', () => {
      expect(wrapper.find('[data-test="cuisine-heading"]').text())
      .toEqual("Cuisine");
    });

    it('displays a h2 element with text Title', () => {
      expect(wrapper.find('[data-test="title-heading"]').text())
      .toEqual("Title");
    });

    it('displays a h2 element with text Description / Author Note', () => {
      expect(wrapper.find('[data-test="description-heading"]').text())
      .toEqual("Description / Author Note");
    });

    it('displays a h2 element with text Methods', () => {
      expect(wrapper.find('[data-test="methods-heading"]').text())
      .toEqual("Methods");
    });

    it('displays a h2 element with text Equipment', () => {
      expect(wrapper.find('[data-test="equipment-heading"]').text())
      .toEqual("Equipment");
    });

    it('displays a h2 element with text Ingredients', () => {
      expect(wrapper.find('[data-test="ingredients-heading"]').text())
      .toEqual("Ingredients");
    });

    it('displays a h2 element with text Subrecipes', () => {
      expect(wrapper.find('[data-test="subrecipes-heading"]').text())
      .toEqual("Subrecipes");
    });

    it('displays a h2 element with text Directions', () => {
      expect(wrapper.find('[data-test="directions-heading"]').text())
      .toEqual("Directions");
    });

    it('displays a recipe type select element', () => {
      expect(wrapper.find('select[name="recipeType"]')).toHaveLength(1);
    });

    it('displays a cuisine select element', () => {
      expect(wrapper.find('select[name="cuisine"]')).toHaveLength(1);
    });

    it('displays a title input element', () => {
      expect(wrapper.find('input[name="title"]')).toHaveLength(1);
    });

    it('displays a description input element', () => {
      expect(wrapper.find('input[name="description"]')).toHaveLength(1);
    });

    it('displays a directions textarea element', () => {
      expect(wrapper.find('textarea[name="directions"]')).toHaveLength(1);
    });

    it('displays a button element with text Add Equipment', () => {
      expect(wrapper.find('button[data-test="add-equipment"]').text())
      .toEqual("Add Equipment");
    });

    it('displays a button element with text Add Ingredient', () => {
      expect(wrapper.find('button[data-test="add-ingredient"]').text())
      .toEqual("Add Ingredient");
    });

    it('displays a button element with text Add Subrecipe', () => {
      expect(wrapper.find('button[data-test="add-subrecipe"]').text())
      .toEqual("Add Subrecipe");
    });

    it('displays an ImageUploads component', () => {
      expect(wrapper.find(ImageUploads)).toHaveLength(1);
    });

    // dynamic elements

    it('displays recipe type options', () => {
      expect(wrapper.find('[data-test="Drink"]').props().children)
      .toEqual("Drink");

      expect(wrapper.find('[data-test="Appetizer"]').props().children)
      .toEqual("Appetizer");
    });

    it('displays cuisine options', () => {
      expect(wrapper.find('[data-test="American"]').props().children)
      .toEqual("American");

      expect(wrapper.find('[data-test="Japanese"]').props().children)
      .toEqual("Japanese");
    });

    it('displays method inputs and labels', () => {
      expect(wrapper.find('[data-test="1-Steam"]').props().id)
      .toEqual("1");

      expect(wrapper.find('[data-test="2-Freeze"]').props().id)
      .toEqual("2");

      expect(wrapper.find('[data-test="Steam"]').props().children)
      .toEqual("Steam");

      expect(wrapper.find('[data-test="Freeze"]').props().children)
      .toEqual("Freeze");
    });

    it('displays EquipmentRows', () => {
      expect(wrapper.find(EquipmentRow).at(0).props().rowKey).toEqual("XYZ1");
      expect(wrapper.find(EquipmentRow).at(1).props().rowKey).toEqual("XYZ2");
    });

    it('displays IngredientRows', () => {
      expect(wrapper.find(IngredientRow).at(0).props().rowKey).toEqual("XYZ3");
      expect(wrapper.find(IngredientRow).at(1).props().rowKey).toEqual("XYZ4");
    });
    
    /*it('displays ', () => {
      expect(wrapper.find('')).toHaveLength(1);
    });*/
  });

  describe('finish area', () => {
    const wrapper = shallow(<NewRecipeView {...beginProps} />);

    it('displays a Link to /dashboard with text Cancel', () => {
      expect(wrapper.find('[data-test="cancel-link"]').props().to)
      .toEqual("/dashboard");
      expect(wrapper.find('[data-test="cancel-link"]').props().children)
      .toEqual("Cancel");
    });

    it('displays a LoaderButton with text Submit Recipe', () => {
      expect(wrapper.find(LoaderButton).props().text).toEqual("Submit Recipe");
    });
  });
});