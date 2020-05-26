import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import { LoaderSpinner } from '../components/LoaderSpinner/LoaderSpinner';
import { IContentType } from '../store/data/types';
import AppliedRoute from './AppliedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import { makeRoutesFromContentTypes } from './CMSNavigationRoutes';

// staff routes

const StaffLogin = lazy(() => import('../components/staff/Login/Login'));
const StaffDashboard = lazy(() => import('../components/staff/Dashboard/Dashboard'));
const StaffNewRecipe = lazy(() => import('../components/staff/NewRecipe/NewRecipe'));
const StaffNewEquipment = lazy(() => import('../components/staff/NewEquipment/NewEquipment'));
const StaffNewIngredient = lazy(() => import('../components/staff/NewIngredient/NewIngredient'));
const StaffNewCategory = lazy(() => import('../components/staff/NewCategory/NewCategory'));
const StaffNewPage = lazy(() => import('../components/staff/NewPage/NewPage'));
const StaffNewPost = lazy(() => import('../components/staff/NewPost/NewPost'));

// user routes

const Register = lazy(() => import('../components/user/Register/Register'));
const Login = lazy(() => import('../components/user/Login/Login'));
const Profile = lazy(() => import('../components/user/Profile/Profile'));
const Dashboard = lazy(() => import('../components/user/Dashboard/Dashboard'));
const Friends = lazy(() => import('../components/user/Friends/Friends'));
const MessengerPage = lazy(() => import('../components/user/Messenger/MessengerPage'));
const PlanPage = lazy(() => import('../components/user/Plan/PlanPage'));
const NewPlanPage = lazy(() => import('../components/user/NewPlan/NewPlanPage'));
const NewRecipe = lazy(() => import('../components/user/NewRecipe/NewRecipe'));
const NewEquipment = lazy(() => import('../components/user/NewEquipment/NewEquipment'));
const NewIngredient = lazy(() => import('../components/user/NewIngredient/NewIngredient'));
const NewPost = lazy(() => import('../components/user/NewPost/NewPost'));

// general routes

const Content = lazy(() => import('../components/cms/Content/Content'));
const Navigation = lazy(() => import('../components/cms/Navigation/Navigation'));
import Cuisines from '../components/guide/Food/Cuisines/Cuisines';
import Cuisine from '../components/guide/Food/Cuisine/Cuisine';
//const All = lazy(() => import('../components/search/All/All'));
const Recipes = lazy(() => import('../components/search/Recipes/Recipes'));
const Ingredients = lazy(() => import('../components/search/Ingredients/Ingredients'));
const Equipments = lazy(() => import('../components/search/Equipments/Equipments'));
const Recipe = lazy(() => import('../components/Recipe/Recipe'));
const Ingredient = lazy(() => import('../components/Ingredient/Ingredient'));
const Equipment = lazy(() => import('../components/Equipment/Equipment'));
//import Supply from '../components/supply/Supply';
import { Home } from '../components/Home/Home';
import { NotFound } from '../components/NotFound/NotFound';

const authRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <AuthenticatedRoute
    path={path}
    component={component}
    childProps={childProps}
  />;

const unauthRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <UnauthenticatedRoute
    path={path}
    component={component}
    childProps={childProps}
  />;

const appRoute = (
  path: string,
  component: any,
  childProps: any = null
) =>
  <AppliedRoute
    path={path}
    component={component}
    childProps={childProps}
  />;

// TO DO: just make Verify its own component?
export function RoutesList({ contentTypes }: Props) {
  const routesFromContentTypes = makeRoutesFromContentTypes(contentTypes);

  return (
    <Suspense fallback={<LoaderSpinner />}>
      <Switch>
        {/* staff routes */}

        {unauthRoute("/staff-login", StaffLogin)}
        {authRoute("/staff-dashboard", StaffDashboard)}
        {authRoute("/official-recipes/submit", StaffNewRecipe)}
        {authRoute(
          "/official-recipes/edit/:id",
          StaffNewRecipe,
          {editing: true}
        )}
        {authRoute("/official-equipment/submit", StaffNewEquipment)}
        {authRoute(
          "/official-equipment/edit/:id",
          StaffNewEquipment,
          {editing: true}
        )}
        {authRoute("/official-ingredients/submit", StaffNewIngredient)}
        {authRoute(
          "/official-ingredients/edit/:id",
          StaffNewIngredient,
          {editing: true}
        )}

        {/* user routes */}

        {unauthRoute("/register", Register, {confirmingUser: false})}
        {unauthRoute("/verify", Register, {confirmingUser: true})}
        {unauthRoute("/login", Login)}
        {appRoute("/profile/:username", Profile)}
        {authRoute("/dashboard", Dashboard)}
        {authRoute("/friends", Friends)}
        {authRoute("/messenger", MessengerPage)}
        {authRoute("/user-plan/edit/:id", NewPlanPage, {editing: true})}
        {authRoute("/user-plan/submit", NewPlanPage)}
        {authRoute("/user-plan/:id", PlanPage)}
        {authRoute(
          "/user-recipes/private/submit",
          NewRecipe,
          {editing: false, ownership: "private"}
        )}
        {authRoute(
          "/user-recipes/public/submit",
          NewRecipe,
          {editing: false, ownership: "public"}
        )}
        {authRoute(
          "/user-recipes/private/edit/:id",
          NewRecipe,
          {editing: true, ownership: "private"}
        )}
        {authRoute(
          "/user-recipes/public/edit/:id",
          NewRecipe,
          {editing: true, ownership: "public"}
        )}
        {authRoute("/user-recipes/:id", Recipe)}
        {authRoute("/user-equipment/submit", NewEquipment)}
        {authRoute("/user-equipment/edit/:id", NewEquipment, {editing: true})}
        {authRoute("/user-equipment/:id", Equipment)}
        {authRoute("/user-ingredients/submit", NewIngredient)}
        {authRoute(
          "/user-ingredients/edit/:id",
          NewIngredient,
          {editing: true}
        )}
        {authRoute("/user-ingredients/:id", Ingredient)}

        {/* general routes */}

        {appRoute("/recipes/:id", Recipe)}
        {appRoute("/ingredients/:id", Ingredient)}
        {appRoute("/equipment/:id", Equipment)}
        {/*{appRoute("/all", All)}*/}
        {appRoute("/recipes", Recipes)}
        {appRoute("/ingredients", Ingredients)}
        {appRoute("/equipment", Equipments)}

        {appRoute("/food/cuisines/:id", Cuisine)}
        {appRoute("/food/cuisines", Cuisines)}
        {routesFromContentTypes.map((route) => {
          appRoute(route.path, Navigation, route.childProps);
        })}
        {appRoute("/content/:slug/:id", Content)}
        {appRoute("/home", Home)}
        {appRoute("/", Home)}
        {appRoute("*", NotFound)}
      </Switch>
    </Suspense>
  );
}

type Props = {
  contentTypes: IContentType[];
};