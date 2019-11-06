import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';



/*

---------- helpers ----------

*/
import AppliedRoute from './AppliedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

import LoaderSpinner from '../components/LoaderSpinner/LoaderSpinner';



/*

---------- routes ----------

*/
const Register = lazy(() => import('../components/user/Register/Register'));
const Login = lazy(() => import('../components/user/Login/Login'));

const StaffLogin = lazy(() => import('../components/staff/StaffLogin/StaffLogin'));  // eventually break out into separate React app



const UserProfile = lazy(() => import('../components/user/UserProfile/UserProfile'));

const UserDashboard = lazy(() => import('../components/user/UserDashboard/UserDashboard'));

const UserFriends = lazy(() => import('../components/user/UserFriends/UserFriends'));

const UserMessengerPage = lazy(() => import('../components/user/UserMessenger/UserMessengerPage'));

//const PlanPage = lazy(() => import('../components/Plan/PlanPage'));  // for public, url-based
const UserPlanPage = lazy(() => import('../components/user/UserPlan/UserPlanPage'));
const UserNewPlanPage = lazy(() => import('../components/user/UserNewPlan/UserNewPlanPage'));

const UserSubmitRecipe = lazy(() => import('../components/user/UserSubmitRecipe/UserSubmitRecipe'));

const UserNewEquipment = lazy(() => import('../components/user/UserNewEquipment/UserNewEquipment'));

const UserNewIngredient = lazy(() => import('../components/user/UserNewIngredient/UserNewIngredient'));



const StaffDashboard = lazy(() => import('../components/staff/StaffDashboard/StaffDashboard'));
const StaffSubmitRecipe = lazy(() => import('../components/staff/StaffSubmitRecipe/StaffSubmitRecipe'));

const StaffSubmitEquipment = lazy(() => import('../components/staff/StaffSubmitEquipment/StaffSubmitEquipment'));

const StaffSubmitIngredient = lazy(() => import('../components/staff/StaffSubmitIngredient/StaffSubmitIngredient'));



//const SearchResultsAll = lazy(() => import('../components/pages/main/SearchResults/SearchResultsAll'));
const SearchResultsRecipes = lazy(() => import('../components/pages/main/SearchResultsRecipes/SearchResultsRecipes'));
const SearchResultsIngredients = lazy(() => import('../components/pages/main/SearchResultsIngredients/SearchResultsIngredients'));
const SearchResultsEquipment = lazy(() => import('../components/pages/main/SearchResultsEquipment/SearchResultsEquipment'));

const Recipe = lazy(() => import('../components/pages/main/Recipe/Recipe'));
const Ingredient = lazy(() => import('../components/pages/main/Ingredient/Ingredient'));
const Equipment = lazy(() => import('../components/pages/main/Equipment/Equipment'));




import Food from '../components/pages/Food/Food';

import SiteNavRecipes from '../components/pages/Food/SiteNavRecipes/SiteNavRecipes';
import Drinks from '../components/pages/Food/SiteNavRecipes/Drinks/Drinks';
import Appetizers from '../components/pages/Food/SiteNavRecipes/Appetizers/Appetizers';
import Mains from '../components/pages/Food/SiteNavRecipes/Mains/Mains';
import Sides from '../components/pages/Food/SiteNavRecipes/Sides/Sides';
import Desserts from '../components/pages/Food/SiteNavRecipes/Desserts/Desserts';
import Soups from '../components/pages/Food/SiteNavRecipes/Soups/Soups';
import Salads from '../components/pages/Food/SiteNavRecipes/Salads/Salads';
import Stews from '../components/pages/Food/SiteNavRecipes/Stews/Stews';
import Casseroles from '../components/pages/Food/SiteNavRecipes/Casseroles/Casseroles';
import Sauces from '../components/pages/Food/SiteNavRecipes/Sauces/Sauces';
import Dressings from '../components/pages/Food/SiteNavRecipes/Dressings/Dressings';
import Condiments from '../components/pages/Food/SiteNavRecipes/Condiments/Condiments';

import Cuisines from '../components/pages/Food/Cuisines/Cuisines';
import Russian from '../components/pages/Food/Cuisines/Russian/Russian';
import German from '../components/pages/Food/Cuisines/German/German';
import Turkish from '../components/pages/Food/Cuisines/Turkish/Turkish';
import French from '../components/pages/Food/Cuisines/French/French';
import Italian from '../components/pages/Food/Cuisines/Italian/Italian';
import Mexican from '../components/pages/Food/Cuisines/Mexican/Mexican';
import Greek from '../components/pages/Food/Cuisines/Greek/Greek';
import Irish from '../components/pages/Food/Cuisines/Irish/Irish';
import Chinese from '../components/pages/Food/Cuisines/Chinese/Chinese';
import Indian from '../components/pages/Food/Cuisines/Indian/Indian';
import Japanese from '../components/pages/Food/Cuisines/Japanese/Japanese';
import Iranian from '../components/pages/Food/Cuisines/Iranian/Iranian';

import SiteNavIngredients from '../components/pages/Food/SiteNavIngredients/SiteNavIngredients';
import FishAndShellfish from '../components/pages/Food/SiteNavIngredients/FishAndShellfish/FishAndShellfish';
import MeatAndPoultry from '../components/pages/Food/SiteNavIngredients/MeatAndPoultry/MeatAndPoultry';
import EggsAndDairy from '../components/pages/Food/SiteNavIngredients/EggsAndDairy/EggsAndDairy';
import BeansAndVegetables from '../components/pages/Food/SiteNavIngredients/BeansAndVegetables/BeansAndVegetables';
import Fruit from '../components/pages/Food/SiteNavIngredients/Fruit/Fruit';
import SeedsAndGrains from '../components/pages/Food/SiteNavIngredients/SeedsAndGrains/SeedsAndGrains';  // Nuts?
import FatsAndOils from '../components/pages/Food/SiteNavIngredients/FatsAndOils/FatsAndOils';
import AcidsHerbsAndSpices from '../components/pages/Food/SiteNavIngredients/AcidsHerbsAndSpices/AcidsHerbsAndSpices';

import Nutrition from '../components/pages/Food/Nutrition/Nutrition';
import Calories from '../components/pages/Food/Nutrition/Calories/Calories';
import Macronutrients from '../components/pages/Food/Nutrition/Macronutrients/Macronutrients';
import Micronutrients from '../components/pages/Food/Nutrition/Micronutrients/Micronutrients';
import Supplements from '../components/pages/Food/Nutrition/Supplements/Supplements';

import SiteNavEquipment from '../components/pages/Food/SiteNavEquipment/SiteNavEquipment';
import Cleaning from '../components/pages/Food/SiteNavEquipment/Cleaning/Cleaning';
import Preparing from '../components/pages/Food/SiteNavEquipment/Preparing/Preparing';
import Cooking from '../components/pages/Food/SiteNavEquipment/Cooking/Cooking';
import Dining from '../components/pages/Food/SiteNavEquipment/Dining/Dining';
import Storage from '../components/pages/Food/SiteNavEquipment/Storage/Storage';

import Methods from '../components/pages/Food/Methods/Methods';
import ChillAndFreeze from '../components/pages/Food/Methods/ChillAndFreeze/ChillAndFreeze';
import SteamPoachSimmerBoilAndBlanch from '../components/pages/Food/Methods/SteamPoachSimmerBoilAndBlanch/SteamPoachSimmerBoilAndBlanch';
import StewAndBraise from '../components/pages/Food/Methods/StewAndBraise/StewAndBraise';
import BakeRoastToastAndBroil from '../components/pages/Food/Methods/BakeRoastToastAndBroil/BakeRoastToastAndBroil';
import SauteFryAndGlaze from '../components/pages/Food/Methods/SauteFryAndGlaze/SauteFryAndGlaze';
import BBQGrillAndSmoke from '../components/pages/Food/Methods/BBQGrillAndSmoke/BBQGrillAndSmoke';



import Fitness from '../components/pages/Fitness/Fitness';  // fitness is NOT the same as health

import Principles from '../components/pages/Fitness/Principles/Principles';
import Composition from '../components/pages/Fitness/Principles/Composition/Composition';
import Balance from '../components/pages/Fitness/Principles/Balance/Balance';
import Strength from '../components/pages/Fitness/Principles/Strength/Strength';
import Speed from '../components/pages/Fitness/Principles/Speed/Speed';
import Agility from '../components/pages/Fitness/Principles/Agility/Agility';
import Endurance from '../components/pages/Fitness/Principles/Endurance/Endurance';
import Flexibility from '../components/pages/Fitness/Principles/Flexibility/Flexibility';

import Exercises from '../components/pages/Fitness/Exercises/Exercises';
import Walk from '../components/pages/Fitness/Exercises/Walk/Walk';
import Bike from '../components/pages/Fitness/Exercises/Bike/Bike';
import Run from '../components/pages/Fitness/Exercises/Run/Run';
import Squat from '../components/pages/Fitness/Exercises/Squat/Squat';
import Pushup from '../components/pages/Fitness/Exercises/Pushup/Pushup';
import Pullup from '../components/pages/Fitness/Exercises/Pullup/Pullup';



import StoreFront from '../components/shop/StoreFront/StoreFront';


//import KitchenEquipment from '../components/pages/promo/KitchenEquipment';
// was from '../components/shop/ProductsList/ProductsList';
// TO DO: Pass filter/sort/search data as prop to '../components/shop/ProductsList/ProductsList'; (!!! beware initializing component state from props)
//import WaterFiltration from '../components/pages/promo/WaterFiltration/WaterFiltration';
//import Tea from '../components/pages/promo/Tea/Tea';
//import Coffee from '../components/pages/promo/Coffee/Coffee';
//import Outdoors from '../components/pages/promo/Outdoors/Outdoors';
//import Garden from '../components/pages/promo/Garden/Garden';
//import Tools from '../components/pages/promo/Tools/Tools';
//import FoodInSeason from '../components/pages/promo/FoodInSeason/FoodInSeason';

import Site from '../components/pages/site/Site';
//import Contests from '../components/pages/site/Contests/Contests';
//import Charity from '../components/pages/site/Charity/Charity';
//import Sitemap from '../components/pages/site/Sitemap/Sitemap';
import Disclaimer from '../components/pages/site/Disclaimer/Disclaimer';
//import TermsOfUse from '../components/pages/site/TermsOfUse/TermsOfUse';
//import PrivacyPolicy from '../components/pages/site/PrivacyPolicy/PrivacyPolicy';
//import Help from '../components/pages/site/Help/Help';
//import Welcome from '../components/pages/site/Welcome/Welcome';

import Home from '../components/pages/Home/Home';

import NotFound from '../components/NotFound/NotFound';



const RoutesList = () => (
  <Suspense fallback={<LoaderSpinner />}>
    <Switch>



      {/*
        authN routes
      */}

      <UnauthenticatedRoute path="/user/register" exact component={Register} />
      <UnauthenticatedRoute path="/user/login" exact component={Login} />



      <UnauthenticatedRoute path="/staff/login" exact component={StaffLogin} />



      {/* 
        primary app feature routes
      */}

      <AppliedRoute path="/user/profile/:username" exact component={UserProfile} />

      <AuthenticatedRoute path="/user/dashboard" exact component={UserDashboard} />
      <AuthenticatedRoute path="/user" exact component={UserDashboard} />

      <AuthenticatedRoute path="/user/friends" exact component={UserFriends} />

      <AuthenticatedRoute path="/user/messenger" exact component={UserMessengerPage} />

      {/*<AppliedRoute path="/plan" exact component={PlanPage} />  was for demo/public purposes, but now we WILL PROBABLY REMOVE THIS */}
      <AuthenticatedRoute path="/user/plan/edit/:id" exact component={UserNewPlanPage} childProps={{editing: "true"}} />
      <AuthenticatedRoute path="/user/plan/submit" exact component={UserNewPlanPage} />
      <AuthenticatedRoute path="/user/plan/:id" exact component={UserPlanPage} />  {/* no dnd capability, just for viewing their own plan */}

      <AuthenticatedRoute path="/user/recipes/private/submit" exact component={UserSubmitRecipe} childProps={{submittingOwnership: "private"}} />
      <AuthenticatedRoute path="/user/recipes/public/submit" exact component={UserSubmitRecipe} childProps={{submittingOwnership: "public"}} />
      <AuthenticatedRoute path="/user/recipes/private/edit/:id" exact component={UserSubmitRecipe} childProps={{editing: "true", editingOwnership: "private"}} />
      <AuthenticatedRoute path="/user/recipes/public/edit/:id" exact component={UserSubmitRecipe} childProps={{editing: "true", editingOwnership: "public"}} />
      <AuthenticatedRoute path="/user/recipes/:id" exact component={Recipe} />  {/* for viewing their own private recipe */}

      <AuthenticatedRoute path="/user/equipment/submit" exact component={UserNewEquipment} />
      <AuthenticatedRoute path="/user/equipment/edit/:id" exact component={UserNewEquipment} childProps={{editing: "true"}} />
      <AuthenticatedRoute path="/user/equipment/:id" exact component={Equipment} />  {/* for viewing their own private equipment */}

      <AuthenticatedRoute path="/user/ingredients/submit" exact component={UserNewIngredient} />
      <AuthenticatedRoute path="/user/ingredients/edit/:id" exact component={UserNewIngredient} childProps={{editing: "true"}} />
      <AuthenticatedRoute path="/user/ingredients/:id" exact component={Ingredient} />  {/* for viewing their own private ingredient */}



      <AuthenticatedRoute path="/staff/dashboard" exact component={StaffDashboard} />
      <AuthenticatedRoute path="/staff" exact component={StaffDashboard} />

      <AuthenticatedRoute path="/staff/recipes/submit" exact component={StaffSubmitRecipe} />
      <AuthenticatedRoute path="/staff/recipes/edit/:id" exact component={StaffSubmitRecipe} childProps={{editing: "true"}} />

      <AuthenticatedRoute path="/staff/equipment/submit" exact component={StaffSubmitEquipment} />
      <AuthenticatedRoute path="/staff/equipment/edit/:id" exact component={StaffSubmitEquipment} childProps={{editing: "true"}} />

      <AuthenticatedRoute path="/staff/ingredients/submit" exact component={StaffSubmitIngredient} />
      <AuthenticatedRoute path="/staff/ingredients/edit/:id" exact component={StaffSubmitIngredient} childProps={{editing: "true"}} />



      {/* 
        mostly
        website info page,
        static content page,
        and
        store sales page
        routes
      */}
      
      <AppliedRoute path="/recipes/:id" exact component={Recipe} />
      <AppliedRoute path="/ingredients/:id" exact component={Ingredient} />
      <AppliedRoute path="/equipment/:id" exact component={Equipment} />

      {/*<AppliedRoute path="/all" exact component={SearchResultsAll} />*/}
      <AppliedRoute path="/recipes" exact component={SearchResultsRecipes} />
      <AppliedRoute path="/ingredients" exact component={SearchResultsIngredients} />
      <AppliedRoute path="/equipment" exact component={SearchResultsEquipment} />



      <AppliedRoute path="/food" exact component={Food} />

      <AppliedRoute path="/food/recipes" exact component={SiteNavRecipes} />
      <AppliedRoute path="/food/recipes/drinks" exact component={Drinks} />
      <AppliedRoute path="/food/recipes/appetizers" exact component={Appetizers} />
      <AppliedRoute path="/food/recipes/mains" exact component={Mains} />
      <AppliedRoute path="/food/recipes/sides" exact component={Sides} />
      <AppliedRoute path="/food/recipes/desserts" exact component={Desserts} />
      <AppliedRoute path="/food/recipes/soups" exact component={Soups} />
      <AppliedRoute path="/food/recipes/salads" exact component={Salads} />
      <AppliedRoute path="/food/recipes/stews" exact component={Stews} />
      <AppliedRoute path="/food/recipes/casseroles" exact component={Casseroles} />
      <AppliedRoute path="/food/recipes/sauces" exact component={Sauces} />
      <AppliedRoute path="/food/recipes/dressings" exact component={Dressings} />
      <AppliedRoute path="/food/recipes/condiments" exact component={Condiments} />

      <AppliedRoute path="/food/cuisines" exact component={Cuisines} />
      <AppliedRoute path="/food/cuisines/russian" exact component={Russian} />
      <AppliedRoute path="/food/cuisines/german" exact component={German} />
      <AppliedRoute path="/food/cuisines/turkish" exact component={Turkish} />
      <AppliedRoute path="/food/cuisines/french" exact component={French} />
      <AppliedRoute path="/food/cuisines/italian" exact component={Italian} />
      <AppliedRoute path="/food/cuisines/mexican" exact component={Mexican} />
      <AppliedRoute path="/food/cuisines/greek" exact component={Greek} />
      <AppliedRoute path="/food/cuisines/irish" exact component={Irish} />
      <AppliedRoute path="/food/cuisines/chinese" exact component={Chinese} />
      <AppliedRoute path="/food/cuisines/indian" exact component={Indian} />
      <AppliedRoute path="/food/cuisines/japanese" exact component={Japanese} />
      <AppliedRoute path="/food/cuisines/iranian" exact component={Iranian} />

      <AppliedRoute path="/food/ingredients" exact component={SiteNavIngredients} />
      <AppliedRoute path="/food/ingredients/fish-and-shellfish" exact component={FishAndShellfish} />
      <AppliedRoute path="/food/ingredients/meat-and-poultry" exact component={MeatAndPoultry} />
      <AppliedRoute path="/food/ingredients/eggs-and-dairy" exact component={EggsAndDairy} />
      <AppliedRoute path="/food/ingredients/beans-and-vegetables" exact component={BeansAndVegetables} />
      <AppliedRoute path="/food/ingredients/fruit" exact component={Fruit} />
      <AppliedRoute path="/food/ingredients/seeds-and-grains" exact component={SeedsAndGrains} />
      <AppliedRoute path="/food/ingredients/fats-and-oils" exact component={FatsAndOils} />
      <AppliedRoute path="/food/ingredients/acids-herbs-and-spices" exact component={AcidsHerbsAndSpices} />

      <AppliedRoute path="/food/nutrition" exact component={Nutrition} />
      <AppliedRoute path="/food/nutrition/calories" exact component={Calories} />
      <AppliedRoute path="/food/nutrition/macronutrients" exact component={Macronutrients} />
      <AppliedRoute path="/food/nutrition/micronutrients" exact component={Micronutrients} />
      <AppliedRoute path="/food/nutrition/supplements" exact component={Supplements} />

      <AppliedRoute path="/food/equipment" exact component={SiteNavEquipment} />
      <AppliedRoute path="/food/equipment/cleaning" exact component={Cleaning} />
      <AppliedRoute path="/food/equipment/preparing" exact component={Preparing} />
      <AppliedRoute path="/food/equipment/cooking" exact component={Cooking} />
      <AppliedRoute path="/food/equipment/dining" exact component={Dining} />
      <AppliedRoute path="/food/equipment/storage" exact component={Storage} />

      <AppliedRoute path="/food/methods" exact component={Methods} />
      <AppliedRoute path="/food/methods/chill-and-freeze" exact component={ChillAndFreeze} />
      <AppliedRoute path="/food/methods/steam-poach-simmer-boil-and-blanch" exact component={SteamPoachSimmerBoilAndBlanch} />
      <AppliedRoute path="/food/methods/stew-and-braise" exact component={StewAndBraise} />
      <AppliedRoute path="/food/methods/bake-roast-toast-and-broil" exact component={BakeRoastToastAndBroil} />
      <AppliedRoute path="/food/methods/saute-fry-and-glaze" exact component={SauteFryAndGlaze} />
      <AppliedRoute path="/food/methods/bbq-grill-and-smoke" exact component={BBQGrillAndSmoke} />



      <AppliedRoute path="/fitness" exact component={Fitness} />

      <AppliedRoute path="/fitness/principles" exact component={Principles} />
      <AppliedRoute path="/fitness/principles/composition" exact component={Composition} />
      <AppliedRoute path="/fitness/principles/balance" exact component={Balance} />
      <AppliedRoute path="/fitness/principles/strength" exact component={Strength} />
      <AppliedRoute path="/fitness/principles/speed" exact component={Speed} />
      <AppliedRoute path="/fitness/principles/agility" exact component={Agility} />
      <AppliedRoute path="/fitness/principles/endurance" exact component={Endurance} />
      <AppliedRoute path="/fitness/principles/flexibility" exact component={Flexibility} />

      <AppliedRoute path="/fitness/exercises" exact component={Exercises} />
      <AppliedRoute path="/fitness/exercises/walk" exact component={Walk} />
      <AppliedRoute path="/fitness/exercises/bike" exact component={Bike} />
      <AppliedRoute path="/fitness/exercises/run" exact component={Run} />
      <AppliedRoute path="/fitness/exercises/squat" exact component={Squat} />
      <AppliedRoute path="/fitness/exercises/pushup" exact component={Pushup} />
      <AppliedRoute path="/fitness/exercises/pullup" exact component={Pullup} />

      <AppliedRoute path="/supply" exact component={StoreFront} />
      {/*<AppliedRoute path="/promo/kitchen-equipment" exact component={KitchenEquipment} />
      
      <AppliedRoute path="/promo/water-filtration" exact component={WaterFiltration} />
      <AppliedRoute path="/promo/tea" exact component={Tea} />
      <AppliedRoute path="/promo/coffee" exact component={Coffee} />

      <AppliedRoute path="/promo/outdoors" exact component={Outdoors} />
      <AppliedRoute path="/promo/garden" exact component={Garden} />
      <AppliedRoute path="/promo/tools" exact component={Tools} />*/}

      <AppliedRoute path="/site" exact component={Site} />
      {/*<AppliedRoute path="/site/contests" exact component={Contests} />
      <AppliedRoute path="/site/seasonal" exact component={FoodInSeason} />
      <AppliedRoute path="/site/charity" exact component={Charity} />
      <AppliedRoute path="/site/sitemap" exact component={Sitemap} />*/}
      <AppliedRoute path="/site/disclaimer" exact component={Disclaimer} />
      {/*<AppliedRoute path="/site/terms" exact component={TermsOfUse} />
      <AppliedRoute path="/site/privacy" exact component={PrivacyPolicy} />
      <AppliedRoute path="/site/help" exact component={Help} />
      <AppliedRoute path="/site/welcome" exact component={Welcome} />*/}



      {/*
        news AKA home AKA index AKA default route
      */}

      <AppliedRoute path="/home" exact component={Home} />
      <AppliedRoute path="/" exact component={Home} />



      {/*
        404 not found error route
      */}

      <Route render={props => <NotFound {...props} />} />

    </Switch>
  </Suspense>
);

export default RoutesList;