/*
modal
*/

//export const OPEN_MODAL = 'OPEN_MODAL';
//export const CLOSE_MODAL = 'CLOSE_MODAL';



/*
theme
*/

export const THEME_DARK_TRIGGER = 'THEME_DARK_TRIGGER';
export const THEME_LIGHT_TRIGGER = 'THEME_LIGHT_TRIGGER';



/*
SiteNav component dropdown menu box shadow (on desktop display only, not on mobile)
*/

export const MENU_SHADOW_SHOW = 'MENU_SHADOW_SHOW';
export const MENU_SHADOW_HIDE = 'MENU_SHADOW_HIDE';



/*
auth
*/
 
// auth -- general
export const AUTH_DISPLAY = 'AUTH_DISPLAY';
export const AUTH_RESET = 'AUTH_RESET';
export const AUTH_CHECK_STATE = "AUTH_CHECK_STATE";
//export const AUTH_CHECK_TIMEOUT = "AUTH_CHECK_TIMEOUT";
//export const SET_AUTH_REDIRECT_PATH = "SET_AUTH_REDIRECT_PATH";
export const AUTH_MESSAGE_CLEAR = "AUTH_MESSAGE_CLEAR";
export const AUTH_UPDATE_LOCAL_AVATAR = "AUTH_UPDATE_LOCAL_AVATAR";

// auth -- users
export const AUTH_USER_REGISTER = 'AUTH_USER_REGISTER';
export const AUTH_USER_REGISTER_SUCCEEDED = 'AUTH_USER_REGISTER_SUCCEEDED';
export const AUTH_USER_REGISTER_FAILED = 'AUTH_USER_REGISTER_FAILED';

export const AUTH_USER_VERIFY = 'AUTH_USER_VERIFY';
export const AUTH_USER_VERIFY_SUCCEEDED = 'AUTH_USER_VERIFY_SUCCEEDED';
export const AUTH_USER_VERIFY_FAILED = 'AUTH_USER_VERIFY_FAILED';

export const AUTH_FACEBOOK_CHECK_STATE = "AUTH_FACEBOOK_CHECK_STATE";
export const AUTH_FACEBOOK_LOGIN = "AUTH_FACEBOOK_LOGIN";
export const AUTH_FACEBOOK_LOGOUT = "AUTH_FACEBOOK_LOGOUT";

export const AUTH_GOOGLE_CHECK_STATE = "AUTH_GOOGLE_CHECK_STATE";
export const AUTH_GOOGLE_LOGIN = "AUTH_GOOGLE_LOGIN";
export const AUTH_GOOGLE_LOGOUT = "AUTH_GOOGLE_LOGOUT";

export const AUTH_USER_LOGIN = "AUTH_USER_LOGIN";
export const AUTH_USER_LOGIN_SUCCEEDED = "AUTH_USER_LOGIN_SUCCEEDED";
export const AUTH_USER_LOGIN_FAILED = "AUTH_USER_LOGIN_FAILED";

export const AUTH_USER_LOGOUT = "AUTH_USER_LOGOUT";
export const AUTH_USER_LOGOUT_SUCCEEDED = "AUTH_USER_LOGOUT_SUCCEEDED";
export const AUTH_USER_LOGOUT_FAILED = "AUTH_USER_LOGOUT_FAILED";

// auth -- staff
export const AUTH_STAFF_LOGIN = "AUTH_STAFF_LOGIN";
export const AUTH_STAFF_LOGIN_SUCCEEDED = "AUTH_STAFF_LOGIN_SUCCEEDED";
export const AUTH_STAFF_LOGIN_FAILED = "AUTH_STAFF_LOGIN_FAILED";

export const AUTH_STAFF_LOGOUT = "AUTH_STAFF_LOGOUT";
export const AUTH_STAFF_LOGOUT_SUCCEEDED = "AUTH_STAFF_LOGOUT_SUCCEEDED";
export const AUTH_STAFF_LOGOUT_FAILED = "AUTH_STAFF_LOGOUT_FAILED";



/*
planner
*/

export const PLANNER_CLICK_DAY = 'PLANNER_CLICK_DAY';
export const PLANNER_ADD_RECIPE_TO_DAY = 'PLANNER_ADD_RECIPE_TO_DAY';
export const PLANNER_REMOVE_RECIPE_FROM_DAY = 'PLANNER_REMOVE_RECIPE_FROM_DAY';
export const PLANNER_REORDER_RECIPE_IN_DAY = 'PLANNER_REORDER_RECIPE_IN_DAY';

export const PLANNER_PUBLIC_SAVE_TO_URL = 'PLANNER_PUBLIC_SAVE_TO_URL';
export const PLANNER_PUBLIC_LOAD_FROM_URL = 'PLANNER_PUBLIC_LOAD_FROM_URL';

export const PLANNER_CLEAR_WORK = 'PLANNER_CLEAR_WORK';

export const PLANNER_SET_PLAN_NAME = 'PLANNER_SET_PLAN_NAME';



/*
messenger
*/

export const MESSENGER_CONNECT = 'MESSENGER_CONNECT';
export const MESSENGER_CONNECTED = 'MESSENGER_CONNECTED';

export const MESSENGER_DISCONNECT = 'MESSENGER_DISCONNECT';
export const MESSENGER_DISCONNECTED = 'MESSENGER_DISCONNECTED';

export const MESSENGER_SHOW_ONLINE = 'MESSENGER_SHOW_ONLINE';
export const MESSENGER_SHOW_OFFLINE = 'MESSENGER_SHOW_OFFLINE';

export const MESSENGER_CHANGE_CHANNEL = 'MESSENGER_CHANGE_CHANNEL';
export const MESSENGER_CHANGED_CHANNEL = 'MESSENGER_CHANGED_CHANNEL';

export const MESSENGER_SEND_MESSAGE = 'MESSENGER_SEND_MESSAGE';
export const MESSENGER_SEND_WHISPER = 'MESSENGER_SEND_WHISPER';

export const MESSENGER_RECEIVED_MESSAGE = 'MESSENGER_RECEIVED_MESSAGE';
export const MESSENGER_RECEIVED_WHISPER = 'MESSENGER_RECEIVED_WHISPER';
export const MESSENGER_FAILED_WHISPER = 'MESSENGER_FAILED_WHISPER';
export const MESSENGER_JOINED_USER = 'MESSENGER_JOINED_USER';
export const MESSENGER_LEFT_USER = 'MESSENGER_LEFT_USER';
export const MESSENGER_GET_ONLINE = 'MESSENGER_GET_ONLINE';



/*
discovery
*/

//



/*
shopping cart
*/

export const CART_ITEM_ADD = 'CART_ITEM_ADD';
export const CART_ITEM_REMOVE = 'CART_ITEM_REMOVE';



/*
dynamic content
*/

export const DATA_INIT = 'DATA_INIT';



export const DATA_GET_MEASUREMENTS = 'DATA_GET_MEASUREMENTS';
export const DATA_GET_MEASUREMENTS_SUCCEEDED = 'DATA_GET_MEASUREMENTS_SUCCEEDED';
export const DATA_GET_MEASUREMENTS_FAILED = 'DATA_GET_MEASUREMENTS_FAILED';

export const DATA_GET_EQUIPMENTS = 'DATA_GET_EQUIPMENTS';
export const DATA_GET_EQUIPMENTS_SUCCEEDED = 'DATA_GET_EQUIPMENTS_SUCCEEDED';
export const DATA_GET_EQUIPMENTS_FAILED = 'DATA_GET_EQUIPMENTS_FAILED';

export const DATA_GET_EQUIPMENT_TYPES = 'DATA_GET_EQUIPMENT_TYPES';
export const DATA_GET_EQUIPMENT_TYPES_SUCCEEDED = 'DATA_GET_EQUIPMENT_TYPES_SUCCEEDED';
export const DATA_GET_EQUIPMENT_TYPES_FAILED = 'DATA_GET_EQUIPMENT_TYPES_FAILED';

export const DATA_GET_INGREDIENTS = 'DATA_GET_INGREDIENTS';
export const DATA_GET_INGREDIENTS_SUCCEEDED = 'DATA_GET_INGREDIENTS_SUCCEEDED';
export const DATA_GET_INGREDIENTS_FAILED = 'DATA_GET_INGREDIENTS_FAILED';

export const DATA_GET_INGREDIENT_TYPES = 'DATA_GET_INGREDIENT_TYPES';
export const DATA_GET_INGREDIENT_TYPES_SUCCEEDED = 'DATA_GET_INGREDIENT_TYPES_SUCCEEDED';
export const DATA_GET_INGREDIENT_TYPES_FAILED = 'DATA_GET_INGREDIENT_TYPES_FAILED';

export const DATA_GET_RECIPES = 'DATA_GET_RECIPES';
export const DATA_GET_RECIPES_SUCCEEDED = 'DATA_GET_RECIPES_SUCCEEDED';
export const DATA_GET_RECIPES_FAILED = 'DATA_GET_RECIPES_FAILED';

export const DATA_GET_RECIPE_TYPES = 'DATA_GET_RECIPE_TYPES';
export const DATA_GET_RECIPE_TYPES_SUCCEEDED = 'DATA_GET_RECIPE_TYPES_SUCCEEDED';
export const DATA_GET_RECIPE_TYPES_FAILED = 'DATA_GET_RECIPE_TYPES_FAILED';

export const DATA_GET_CUISINES = 'DATA_GET_CUISINES';
export const DATA_GET_CUISINES_SUCCEEDED = 'DATA_GET_CUISINES_SUCCEEDED';
export const DATA_GET_CUISINES_FAILED = 'DATA_GET_CUISINES_FAILED';

export const DATA_GET_METHODS = 'DATA_GET_METHODS';
export const DATA_GET_METHODS_SUCCEEDED = 'DATA_GET_METHODS_SUCCEEDED';
export const DATA_GET_METHODS_FAILED = 'DATA_GET_METHODS_FAILED';



export const DATA_GET_PUBLIC_RECIPES = 'DATA_GET_PUBLIC_RECIPES';
export const DATA_GET_PUBLIC_RECIPES_SUCCEEDED = 'DATA_GET_PUBLIC_RECIPES_SUCCEEDED';
export const DATA_GET_PUBLIC_RECIPES_FAILED = 'DATA_GET_PUBLIC_RECIPES_FAILED';



export const DATA_GET_MY_PUBLIC_RECIPES = 'DATA_GET_MY_PUBLIC_RECIPES';
export const DATA_GET_MY_PUBLIC_RECIPES_SUCCEEDED = 'DATA_GET_MY_PUBLIC_RECIPES_SUCCEEDED';
export const DATA_GET_MY_PUBLIC_RECIPES_FAILED = 'DATA_GET_MY_PUBLIC_RECIPES_FAILED';



export const DATA_GET_MY_PRIVATE_EQUIPMENTS = 'DATA_GET_MY_PRIVATE_EQUIPMENTS';
export const DATA_GET_MY_PRIVATE_EQUIPMENTS_SUCCEEDED = 'DATA_GET_MY_PRIVATE_EQUIPMENTS_SUCCEEDED';
export const DATA_GET_MY_PRIVATE_EQUIPMENTS_FAILED = 'DATA_GET_MY_PRIVATE_EQUIPMENTS_FAILED';

export const DATA_GET_MY_PRIVATE_INGREDIENTS = 'DATA_GET_MY_PRIVATE_INGREDIENTS';
export const DATA_GET_MY_PRIVATE_INGREDIENTS_SUCCEEDED = 'DATA_GET_MY_PRIVATE_INGREDIENTS_SUCCEEDED';
export const DATA_GET_MY_PRIVATE_INGREDIENTS_FAILED = 'DATA_GET_MY_PRIVATE_INGREDIENTS_FAILED';

export const DATA_GET_MY_PRIVATE_RECIPES = 'DATA_GET_MY_PRIVATE_RECIPES';
export const DATA_GET_MY_PRIVATE_RECIPES_SUCCEEDED = 'DATA_GET_MY_PRIVATE_RECIPES_SUCCEEDED';
export const DATA_GET_MY_PRIVATE_RECIPES_FAILED = 'DATA_GET_MY_PRIVATE_RECIPES_FAILED';



export const DATA_GET_MY_FAVORITE_RECIPES = 'DATA_GET_MY_FAVORITE_RECIPES';
export const DATA_GET_MY_FAVORITE_RECIPES_SUCCEEDED = 'DATA_GET_MY_FAVORITE_RECIPES_SUCCEEDED';
export const DATA_GET_MY_FAVORITE_RECIPES_FAILED = 'DATA_GET_MY_FAVORITE_RECIPES_FAILED';

export const DATA_GET_MY_SAVED_RECIPES = 'DATA_GET_MY_SAVED_RECIPES';
export const DATA_GET_MY_SAVED_RECIPES_SUCCEEDED = 'DATA_GET_MY_SAVED_RECIPES_SUCCEEDED';
export const DATA_GET_MY_SAVED_RECIPES_FAILED = 'DATA_GET_MY_SAVED_RECIPES_FAILED';



export const DATA_GET_MY_PLANS = 'DATA_GET_MY_PLANS';
export const DATA_GET_MY_PLANS_SUCCEEDED = 'DATA_GET_MY_PLANS_SUCCEEDED';
export const DATA_GET_MY_PLANS_FAILED = 'DATA_GET_MY_PLANS_FAILED';



export const DATA_GET_MY_FRIENDSHIPS = 'DATA_GET_MY_FRIENDSHIPS';
export const DATA_GET_MY_FRIENDSHIPS_SUCCEEDED = 'DATA_GET_MY_FRIENDSHIPS_SUCCEEDED';
export const DATA_GET_MY_FRIENDSHIPS_FAILED = 'DATA_GET_MY_FRIENDSHIPS_FAILED';



/*
filters and searches
*/

export const VIEW_GET_INGREDIENTS = 'VIEW_GET_INGREDIENTS';
export const VIEW_GET_EQUIPMENT = 'VIEW_GET_EQUIPMENT';

export const SEARCH_SET_INDEX = 'SEARCH_SET_INDEX';


/*
user content creation
*/

export const USER_MESSAGE_CLEAR = 'USER_MESSAGE_CLEAR';



export const USER_CREATE_NEW_PRIVATE_EQUIPMENT = 'USER_CREATE_NEW_PRIVATE_EQUIPMENT';
export const USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED = 'USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED';
export const USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED = 'USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED';

export const USER_EDIT_PRIVATE_EQUIPMENT = 'USER_EDIT_PRIVATE_EQUIPMENT';
export const USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED = 'USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED';
export const USER_EDIT_PRIVATE_EQUIPMENT_FAILED = 'USER_EDIT_PRIVATE_EQUIPMENT_FAILED';

export const USER_DELETE_PRIVATE_EQUIPMENT = 'USER_DELETE_PRIVATE_EQUIPMENT';
export const USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED = 'USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED';
export const USER_DELETE_PRIVATE_EQUIPMENT_FAILED = 'USER_DELETE_PRIVATE_EQUIPMENT_FAILED';



export const USER_CREATE_NEW_PRIVATE_INGREDIENT = 'USER_CREATE_NEW_PRIVATE_INGREDIENT';
export const USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED = 'USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED';
export const USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED = 'USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED';

export const USER_EDIT_PRIVATE_INGREDIENT = 'USER_EDIT_PRIVATE_INGREDIENT';
export const USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED = 'USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED';
export const USER_EDIT_PRIVATE_INGREDIENT_FAILED = 'USER_EDIT_PRIVATE_INGREDIENT_FAILED';

export const USER_DELETE_PRIVATE_INGREDIENT = 'USER_DELETE_PRIVATE_INGREDIENT';
export const USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED = 'USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED';
export const USER_DELETE_PRIVATE_INGREDIENT_FAILED = 'USER_DELETE_PRIVATE_INGREDIENT_FAILED';



export const USER_CREATE_NEW_PRIVATE_RECIPE = 'USER_CREATE_NEW_PRIVATE_RECIPE';
export const USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED = 'USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED';
export const USER_CREATE_NEW_PRIVATE_RECIPE_FAILED = 'USER_CREATE_NEW_PRIVATE_RECIPE_FAILED';

export const USER_EDIT_PRIVATE_RECIPE = 'USER_EDIT_PRIVATE_RECIPE';
export const USER_EDIT_PRIVATE_RECIPE_SUCCEEDED = 'USER_EDIT_PRIVATE_RECIPE_SUCCEEDED';
export const USER_EDIT_PRIVATE_RECIPE_FAILED = 'USER_EDIT_PRIVATE_RECIPE_FAILED';

export const USER_DELETE_PRIVATE_RECIPE = 'USER_DELETE_PRIVATE_RECIPE';
export const USER_DELETE_PRIVATE_RECIPE_SUCCEEDED = 'USER_DELETE_PRIVATE_RECIPE_SUCCEEDED';
export const USER_DELETE_PRIVATE_RECIPE_FAILED = 'USER_DELETE_PRIVATE_RECIPE_FAILED';



export const USER_CREATE_NEW_PUBLIC_RECIPE = 'USER_CREATE_NEW_PUBLIC_RECIPE';
export const USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED = 'USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED';
export const USER_CREATE_NEW_PUBLIC_RECIPE_FAILED = 'USER_CREATE_NEW_PUBLIC_RECIPE_FAILED';

export const USER_EDIT_PUBLIC_RECIPE = 'USER_EDIT_PUBLIC_RECIPE';
export const USER_EDIT_PUBLIC_RECIPE_SUCCEEDED = 'USER_EDIT_PUBLIC_RECIPE_SUCCEEDED';
export const USER_EDIT_PUBLIC_RECIPE_FAILED = 'USER_EDIT_PUBLIC_RECIPE_FAILED';

export const USER_DISOWN_PUBLIC_RECIPE = 'USER_DISOWN_PUBLIC_RECIPE';
export const USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED = 'USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED';
export const USER_DISOWN_PUBLIC_RECIPE_FAILED = 'USER_DISOWN_PUBLIC_RECIPE_FAILED';



export const USER_CREATE_NEW_PLAN = 'USER_CREATE_NEW_PLAN';
export const USER_CREATE_NEW_PLAN_SUCCEEDED = 'USER_CREATE_NEW_PLAN_SUCCEEDED';
export const USER_CREATE_NEW_PLAN_FAILED = 'USER_CREATE_NEW_PLAN_FAILED';

export const USER_EDIT_PLAN = 'USER_EDIT_PLAN';
export const USER_EDIT_PLAN_SUCCEEDED = 'USER_EDIT_PLAN_SUCCEEDED';
export const USER_EDIT_PLAN_FAILED = 'USER_EDIT_PLAN_FAILED';

export const USER_DELETE_PLAN = 'USER_DELETE_PLAN';
export const USER_DELETE_PLAN_SUCCEEDED = 'USER_DELETE_PLAN_SUCCEEDED';
export const USER_DELETE_PLAN_FAILED = 'USER_DELETE_PLAN_FAILED';



export const USER_FAVORITE_RECIPE = 'USER_FAVORITE_RECIPE';
export const USER_FAVORITE_RECIPE_SUCCEEDED = 'USER_FAVORITE_RECIPE_SUCCEEDED';
export const USER_FAVORITE_RECIPE_FAILED = 'USER_FAVORITE_RECIPE_FAILED';

export const USER_UNFAVORITE_RECIPE = 'USER_UNFAVORITE_RECIPE';
export const USER_UNFAVORITE_RECIPE_SUCCEEDED = 'USER_UNFAVORITE_RECIPE_SUCCEEDED';
export const USER_UNFAVORITE_RECIPE_FAILED = 'USER_UNFAVORITE_RECIPE_FAILED';



export const USER_SAVE_RECIPE = 'USER_SAVE_RECIPE';
export const USER_SAVE_RECIPE_SUCCEEDED = 'USER_SAVE_RECIPE_SUCCEEDED';
export const USER_SAVE_RECIPE_FAILED = 'USER_SAVE_RECIPE_FAILED';

export const USER_UNSAVE_RECIPE = 'USER_UNSAVE_RECIPE';
export const USER_UNSAVE_RECIPE_SUCCEEDED = 'USER_UNSAVE_RECIPE_SUCCEEDED';
export const USER_UNSAVE_RECIPE_FAILED = 'USER_UNSAVE_RECIPE_FAILED';



export const USER_REQUEST_FRIENDSHIP = 'USER_REQUEST_FRIENDSHIP';
export const USER_REQUEST_FRIENDSHIP_SUCCEEDED = 'USER_REQUEST_FRIENDSHIP_SUCCEEDED';
export const USER_REQUEST_FRIENDSHIP_FAILED = 'USER_REQUEST_FRIENDSHIP_FAILED';

export const USER_ACCEPT_FRIENDSHIP = 'USER_ACCEPT_FRIENDSHIP';
export const USER_ACCEPT_FRIENDSHIP_SUCCEEDED = 'USER_ACCEPT_FRIENDSHIP_SUCCEEDED';
export const USER_ACCEPT_FRIENDSHIP_FAILED = 'USER_ACCEPT_FRIENDSHIP_FAILED';

export const USER_REJECT_FRIENDSHIP = 'USER_REJECT_FRIENDSHIP';
export const USER_REJECT_FRIENDSHIP_SUCCEEDED = 'USER_REJECT_FRIENDSHIP_SUCCEEDED';
export const USER_REJECT_FRIENDSHIP_FAILED = 'USER_REJECT_FRIENDSHIP_FAILED';

export const USER_DELETE_FRIENDSHIP = 'USER_DELETE_FRIENDSHIP';
export const USER_DELETE_FRIENDSHIP_SUCCEEDED = 'USER_DELETE_FRIENDSHIP_SUCCEEDED';
export const USER_DELETE_FRIENDSHIP_FAILED = 'USER_DELETE_FRIENDSHIP_FAILED';

export const USER_BLOCK_USER = 'USER_BLOCK_USER';
export const USER_BLOCK_USER_SUCCEEDED = 'USER_BLOCK_USER_SUCCEEDED';
export const USER_BLOCK_USER_FAILED = 'USER_BLOCK_USER_FAILED';

export const USER_UNBLOCK_USER = 'USER_UNBLOCK_USER';
export const USER_UNBLOCK_USER_SUCCEEDED = 'USER_UNBLOCK_USER_SUCCEEDED';
export const USER_UNBLOCK_USER_FAILED = 'USER_UNBLOCK_USER_FAILED';



export const USER_SUBMIT_AVATAR = 'USER_SUBMIT_AVATAR';
export const USER_SUBMIT_AVATAR_SUCCEEDED = 'USER_SUBMIT_AVATAR_SUCCEEDED';
export const USER_SUBMIT_AVATAR_FAILED = 'USER_SUBMIT_AVATAR_FAILED';