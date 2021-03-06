import { IPlannerData } from '../planner/types';

export const DATA_INIT = 'DATA_INIT' as const;

export const DATA_GET_INITIAL_DATA = 'DATA_GET_INITIAL_DATA' as const;
export const DATA_GET_INITIAL_DATA_SUCCEEDED = 'DATA_GET_INITIAL_DATA_SUCCEEDED' as const;
export const DATA_GET_INITIAL_DATA_FAILED = 'DATA_GET_INITIAL_DATA_FAILED' as const;
export const DATA_GET_CONTENT = 'DATA_GET_CONTENT' as const;
export const DATA_GET_CONTENT_SUCCEEDED = 'DATA_GET_CONTENT_SUCCEEDED' as const;
export const DATA_GET_CONTENT_FAILED = 'DATA_GET_CONTENT_FAILED' as const;
export const DATA_GET_CONTENT_TYPES = 'DATA_GET_CONTENT_TYPES' as const;
export const DATA_GET_CONTENT_TYPES_SUCCEEDED = 'DATA_GET_CONTENT_TYPES_SUCCEEDED' as const;
export const DATA_GET_CONTENT_TYPES_FAILED = 'DATA_GET_CONTENT_TYPES_FAILED' as const;
export const DATA_GET_CUISINES = 'DATA_GET_CUISINES' as const;
export const DATA_GET_CUISINES_SUCCEEDED = 'DATA_GET_CUISINES_SUCCEEDED' as const;
export const DATA_GET_CUISINES_FAILED = 'DATA_GET_CUISINES_FAILED' as const;
export const DATA_GET_EQUIPMENTS = 'DATA_GET_EQUIPMENTS' as const;
export const DATA_GET_EQUIPMENTS_SUCCEEDED = 'DATA_GET_EQUIPMENTS_SUCCEEDED' as const;
export const DATA_GET_EQUIPMENTS_FAILED = 'DATA_GET_EQUIPMENTS_FAILED' as const;
export const DATA_GET_EQUIPMENT_TYPES = 'DATA_GET_EQUIPMENT_TYPES' as const;
export const DATA_GET_EQUIPMENT_TYPES_SUCCEEDED = 'DATA_GET_EQUIPMENT_TYPES_SUCCEEDED' as const;
export const DATA_GET_EQUIPMENT_TYPES_FAILED = 'DATA_GET_EQUIPMENT_TYPES_FAILED' as const;
export const DATA_GET_INGREDIENTS = 'DATA_GET_INGREDIENTS' as const;
export const DATA_GET_INGREDIENTS_SUCCEEDED = 'DATA_GET_INGREDIENTS_SUCCEEDED' as const;
export const DATA_GET_INGREDIENTS_FAILED = 'DATA_GET_INGREDIENTS_FAILED' as const;
export const DATA_GET_INGREDIENT_TYPES = 'DATA_GET_INGREDIENT_TYPES' as const;
export const DATA_GET_INGREDIENT_TYPES_SUCCEEDED = 'DATA_GET_INGREDIENT_TYPES_SUCCEEDED' as const;
export const DATA_GET_INGREDIENT_TYPES_FAILED = 'DATA_GET_INGREDIENT_TYPES_FAILED' as const;
export const DATA_GET_MEASUREMENTS = 'DATA_GET_MEASUREMENTS' as const;
export const DATA_GET_MEASUREMENTS_SUCCEEDED = 'DATA_GET_MEASUREMENTS_SUCCEEDED' as const;
export const DATA_GET_MEASUREMENTS_FAILED = 'DATA_GET_MEASUREMENTS_FAILED' as const;
export const DATA_GET_METHODS = 'DATA_GET_METHODS' as const;
export const DATA_GET_METHODS_SUCCEEDED = 'DATA_GET_METHODS_SUCCEEDED' as const;
export const DATA_GET_METHODS_FAILED = 'DATA_GET_METHODS_FAILED' as const;
export const DATA_GET_PRODUCTS = 'DATA_GET_PRODUCTS' as const;
export const DATA_GET_PRODUCTS_SUCCEEDED = 'DATA_GET_PRODUCTS_SUCCEEDED' as const;
export const DATA_GET_PRODUCTS_FAILED = 'DATA_GET_PRODUCTS_FAILED' as const;
export const DATA_GET_PRODUCT_CATEGORIES = 'DATA_GET_PRODUCT_CATEGORIES' as const;
export const DATA_GET_PRODUCT_CATEGORIES_SUCCEEDED = 'DATA_GET_PRODUCT_CATEGORIES_SUCCEEDED' as const;
export const DATA_GET_PRODUCT_CATEGORIES_FAILED = 'DATA_GET_PRODUCT_CATEGORIES_FAILED' as const;
export const DATA_GET_PRODUCT_TYPES = 'DATA_GET_PRODUCT_TYPES' as const;
export const DATA_GET_PRODUCT_TYPES_SUCCEEDED = 'DATA_GET_PRODUCT_TYPES_SUCCEEDED' as const;
export const DATA_GET_PRODUCT_TYPES_FAILED = 'DATA_GET_PRODUCT_TYPES_FAILED' as const;
export const DATA_GET_RECIPES = 'DATA_GET_RECIPES' as const;
export const DATA_GET_RECIPES_SUCCEEDED = 'DATA_GET_RECIPES_SUCCEEDED' as const;
export const DATA_GET_RECIPES_FAILED = 'DATA_GET_RECIPES_FAILED' as const;
export const DATA_GET_RECIPE_TYPES = 'DATA_GET_RECIPE_TYPES' as const;
export const DATA_GET_RECIPE_TYPES_SUCCEEDED = 'DATA_GET_RECIPE_TYPES_SUCCEEDED' as const;
export const DATA_GET_RECIPE_TYPES_FAILED = 'DATA_GET_RECIPE_TYPES_FAILED' as const;

export const DATA_GET_INITIAL_USER_DATA = 'DATA_GET_INITIAL_USER_DATA' as const;
export const DATA_GET_INITIAL_USER_DATA_SUCCEEDED = 'DATA_GET_INITIAL_USER_DATA_SUCCEEDED' as const;
export const DATA_GET_INITIAL_USER_DATA_FAILED = 'DATA_GET_INITIAL_USER_DATA_FAILED' as const;
export const DATA_GET_MY_CONTENT = 'DATA_GET_MY_CONTENT' as const;
export const DATA_GET_MY_CONTENT_SUCCEEDED = 'DATA_GET_MY_CONTENT_SUCCEEDED' as const;
export const DATA_GET_MY_CONTENT_FAILED = 'DATA_GET_MY_CONTENT_FAILED' as const;
export const DATA_GET_MY_FAVORITE_RECIPES = 'DATA_GET_MY_FAVORITE_RECIPES' as const;
export const DATA_GET_MY_FAVORITE_RECIPES_SUCCEEDED = 'DATA_GET_MY_FAVORITE_RECIPES_SUCCEEDED' as const;
export const DATA_GET_MY_FAVORITE_RECIPES_FAILED = 'DATA_GET_MY_FAVORITE_RECIPES_FAILED' as const;
export const DATA_GET_MY_FRIENDSHIPS = 'DATA_GET_MY_FRIENDSHIPS' as const;
export const DATA_GET_MY_FRIENDSHIPS_SUCCEEDED = 'DATA_GET_MY_FRIENDSHIPS_SUCCEEDED' as const;
export const DATA_GET_MY_FRIENDSHIPS_FAILED = 'DATA_GET_MY_FRIENDSHIPS_FAILED' as const;
export const DATA_GET_MY_PLANS = 'DATA_GET_MY_PLANS' as const;
export const DATA_GET_MY_PLANS_SUCCEEDED = 'DATA_GET_MY_PLANS_SUCCEEDED' as const;
export const DATA_GET_MY_PLANS_FAILED = 'DATA_GET_MY_PLANS_FAILED' as const;
export const DATA_GET_MY_PRIVATE_EQUIPMENTS = 'DATA_GET_MY_PRIVATE_EQUIPMENTS' as const;
export const DATA_GET_MY_PRIVATE_EQUIPMENTS_SUCCEEDED = 'DATA_GET_MY_PRIVATE_EQUIPMENTS_SUCCEEDED' as const;
export const DATA_GET_MY_PRIVATE_EQUIPMENTS_FAILED = 'DATA_GET_MY_PRIVATE_EQUIPMENTS_FAILED' as const;
export const DATA_GET_MY_PRIVATE_INGREDIENTS = 'DATA_GET_MY_PRIVATE_INGREDIENTS' as const;
export const DATA_GET_MY_PRIVATE_INGREDIENTS_SUCCEEDED = 'DATA_GET_MY_PRIVATE_INGREDIENTS_SUCCEEDED' as const;
export const DATA_GET_MY_PRIVATE_INGREDIENTS_FAILED = 'DATA_GET_MY_PRIVATE_INGREDIENTS_FAILED' as const;
export const DATA_GET_MY_PRIVATE_RECIPES = 'DATA_GET_MY_PRIVATE_RECIPES' as const;
export const DATA_GET_MY_PRIVATE_RECIPES_SUCCEEDED = 'DATA_GET_MY_PRIVATE_RECIPES_SUCCEEDED' as const;
export const DATA_GET_MY_PRIVATE_RECIPES_FAILED = 'DATA_GET_MY_PRIVATE_RECIPES_FAILED' as const;
export const DATA_GET_MY_PUBLIC_RECIPES = 'DATA_GET_MY_PUBLIC_RECIPES' as const;
export const DATA_GET_MY_PUBLIC_RECIPES_SUCCEEDED = 'DATA_GET_MY_PUBLIC_RECIPES_SUCCEEDED' as const;
export const DATA_GET_MY_PUBLIC_RECIPES_FAILED = 'DATA_GET_MY_PUBLIC_RECIPES_FAILED' as const;
export const DATA_GET_MY_SAVED_RECIPES = 'DATA_GET_MY_SAVED_RECIPES' as const;
export const DATA_GET_MY_SAVED_RECIPES_SUCCEEDED = 'DATA_GET_MY_SAVED_RECIPES_SUCCEEDED' as const;
export const DATA_GET_MY_SAVED_RECIPES_FAILED = 'DATA_GET_MY_SAVED_RECIPES_FAILED' as const;

/*

State

*/

export interface IDataState extends IInitialData, IInitialUserData {};

export interface IInitialData {
  officialContent: IWorkContent[];
  contentTypes: IContentType[];
  cuisines: ICuisine[];
  officialEquipment: IEquipment[];
  equipmentTypes: IEquipmentType[];
  officialIngredients: IIngredient[];
  measurements: IMeasurement[];
  methods: IMethod[];
  ingredientTypes: IIngredientType[];
  officialRecipes: IWorkRecipe[];
  recipeTypes: IRecipeType[];
  products: IWorkProduct[];
  productCategories: IProductCategory[];
  productTypes: IProductType[];
}

export interface IInitialUserData {
  myContent: IWorkContent[];
  myFavoriteRecipes: IWorkRecipe[];
  myFriendships: IFriendship[];
  myPlans: IPlan[];
  myPrivateEquipment: IEquipment[];
  myPrivateIngredients: IIngredient[];
  myPrivateRecipes: IWorkRecipe[];
  myPublicRecipes: IWorkRecipe[];
  mySavedRecipes: IWorkRecipe[];
}

export interface IWorkContent {
  id: number;
  title: string;
  author: string;
  image: string;
  //snippet: string;
}

export interface IContentType {
  id: number;
  parent_id: number;
  name: string;
  path: string;
}

export interface ICuisine {
  id: number
  name: string
  nation: string
}

export interface IEquipment {
  id: number;
  equipment_type_id: number;
  owner_id: number;
  equipment_type_name: string;
  name: string;
  description: string;
  image: string;
}

export interface IEquipmentType {
  id: number;
  name: string;
}

export interface IFriendship {
  user_id: number;
  username: string;
  avatar: string;
  status: string;
}

export interface IIngredient {
  id: number;
  ingredient_type_id: number;
  owner_id: number;
  ingredient_type_name: string;
  brand: string | null;
  variety: string | null;
  name: string;
  description: string;
  image: string;
}

export interface IIngredientType {
  id: number;
  name: string;
}

export interface IMeasurement {
  id: number;
  name: string;
}

export interface IMethod {
  id: number;
  name: string;
}

export interface IPlan {
  id: number;
  name: string;
  data: IPlannerData;
}

export interface IWorkRecipe {
  id: number;
  owner_id: number;
  recipe_type_id: number;
  cuisine_id: number;
  title: string;
  recipe_image: string;
}

export interface IRecipeType {
  id: number;
  name: string;
}

export interface IWorkProduct {
  id: number;
  product_category_id: number;
  product_type_id: number;
  brand: string | null;
  variety: string | null;
  name: string;
  fullname: string;
}

export interface IProductCategory {
  id: number;
  name: string;
}

export interface IProductType {
  id: number;
  name: string;
}

/*

Actions

*/

export type DataActions =
IDataInit |
IDataGetInitialData |
IDataGetContent |
IDataGetContentTypes |
IDataGetCuisines |
IDataGetEquipments |
IDataGetEquipmentTypes |
IDataGetIngredients |
IDataGetIngredientTypes |
IDataGetMeasurements |
IDataGetMethods |
IDataGetRecipes |
IDataGetRecipeTypes |
IDataGetProducts |
IDataGetProductCategories |
IDataGetProductTypes |
IDataGetInitialUserData |
IDataGetMyContent |
IDataGetMyFavoriteRecipes |
IDataGetMyFriendships |
IDataGetMyPlans |
IDataGetMyPrivateEquipments |
IDataGetMyPrivateIngredients |
IDataGetMyPrivateRecipes |
IDataGetMyPublicRecipes |
IDataGetMySavedRecipes;

export interface IDataInit {
  type: typeof DATA_INIT;
}



export interface IDataGetInitialData {
  type: typeof DATA_GET_INITIAL_DATA;
  initialData: IInitialData;
}

export interface IDataGetContent {
  type: typeof DATA_GET_CONTENT;
  officialContent: IWorkContent[];
}

export interface IDataGetContentTypes {
  type: typeof DATA_GET_CONTENT_TYPES;
  contentTypes: IContentType[];
}

export interface IDataGetCuisines {
  type: typeof DATA_GET_CUISINES;
  cuisines: ICuisine[];
}

export interface IDataGetEquipments {
  type: typeof DATA_GET_EQUIPMENTS;
  officialEquipment: IEquipment[];
}

export interface IDataGetEquipmentTypes {
  type: typeof DATA_GET_EQUIPMENT_TYPES;
  equipmentTypes: IEquipmentType[];
}

export interface IDataGetIngredients {
  type: typeof DATA_GET_INGREDIENTS;
  officialIngredients: IIngredient[];
}

export interface IDataGetIngredientTypes {
  type: typeof DATA_GET_INGREDIENT_TYPES;
  ingredientTypes: IIngredientType[];
}

export interface IDataGetMeasurements {
  type: typeof DATA_GET_MEASUREMENTS;
  measurements: IMeasurement[];
}

export interface IDataGetMethods {
  type: typeof DATA_GET_METHODS;
  methods: IMethod[];
}

export interface IDataGetRecipes {
  type: typeof DATA_GET_RECIPES;
  officialRecipes: IWorkRecipe[];
}

export interface IDataGetRecipeTypes {
  type: typeof DATA_GET_RECIPE_TYPES;
  recipeTypes: IRecipeType[];
}

export interface IDataGetProducts {
  type: typeof DATA_GET_PRODUCTS;
  products: IWorkProduct[];
}

export interface IDataGetProductCategories {
  type: typeof DATA_GET_PRODUCT_CATEGORIES;
  productCategories: IProductCategory[];
}

export interface IDataGetProductTypes {
  type: typeof DATA_GET_PRODUCT_TYPES;
  productTypes: IProductType[];
}



export interface IDataGetInitialUserData {
  type: typeof DATA_GET_INITIAL_USER_DATA;
  initialUserData: IInitialUserData;
}

export interface IDataGetMyContent {
  type: typeof DATA_GET_MY_CONTENT;
  myContent: IWorkContent[];
}

export interface IDataGetMyFavoriteRecipes {
  type: typeof DATA_GET_MY_FAVORITE_RECIPES;
  myFavoriteRecipes: IWorkRecipe[];
}

export interface IDataGetMyFriendships {
  type: typeof DATA_GET_MY_FRIENDSHIPS;
  myFriendships: IFriendship[];
}

export interface IDataGetMyPlans {
  type: typeof DATA_GET_MY_PLANS;
  myPlans: IPlan[];
}

export interface IDataGetMyPrivateEquipments {
  type: typeof DATA_GET_MY_PRIVATE_EQUIPMENTS;
  myPrivateEquipment: IEquipment[];
}

export interface IDataGetMyPrivateIngredients {
  type: typeof DATA_GET_MY_PRIVATE_INGREDIENTS;
  myPrivateIngredients: IIngredient[];
}

export interface IDataGetMyPrivateRecipes {
  type: typeof DATA_GET_MY_PRIVATE_RECIPES;
  myPrivateRecipes: IWorkRecipe[];
}

export interface IDataGetMyPublicRecipes {
  type: typeof DATA_GET_MY_PUBLIC_RECIPES;
  myPublicRecipes: IWorkRecipe[];
}

export interface IDataGetMySavedRecipes {
  type: typeof DATA_GET_MY_SAVED_RECIPES;
  mySavedRecipes: IWorkRecipe[];
}