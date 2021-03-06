import { 
  STAFF_CREATE_NEW_CONTENT_SUCCEEDED,
  STAFF_CREATE_NEW_CONTENT_FAILED,
  STAFF_EDIT_CONTENT_SUCCEEDED,
  STAFF_EDIT_CONTENT_FAILED,
  STAFF_DELETE_CONTENT_SUCCEEDED,
  STAFF_DELETE_CONTENT_FAILED
} from './content/types';
import { 
  STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED,
  STAFF_CREATE_NEW_EQUIPMENT_FAILED,
  STAFF_EDIT_EQUIPMENT_SUCCEEDED,
  STAFF_EDIT_EQUIPMENT_FAILED,
  STAFF_DELETE_EQUIPMENT_SUCCEEDED,
  STAFF_DELETE_EQUIPMENT_FAILED
} from './equipment/types';
import { 
  STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED,
  STAFF_CREATE_NEW_INGREDIENT_FAILED,
  STAFF_EDIT_INGREDIENT_SUCCEEDED,
  STAFF_EDIT_INGREDIENT_FAILED,
  STAFF_DELETE_INGREDIENT_SUCCEEDED,
  STAFF_DELETE_INGREDIENT_FAILED
} from './ingredient/types';
import { 
  STAFF_CREATE_NEW_RECIPE_SUCCEEDED,
  STAFF_CREATE_NEW_RECIPE_FAILED,
  STAFF_EDIT_RECIPE_SUCCEEDED,
  STAFF_EDIT_RECIPE_FAILED,
  STAFF_DELETE_RECIPE_SUCCEEDED,
  STAFF_DELETE_RECIPE_FAILED
} from './recipe/types';
import { STAFF_MESSAGE_CLEAR, IStaffState, StaffActions } from './types';

const initialState: IStaffState = {message: ''};

export function staffReducer(
  state = initialState,
  action: StaffActions
): IStaffState {
  switch (action.type) {
    case STAFF_MESSAGE_CLEAR: return {...state, ...{message: ''}};
    case STAFF_CREATE_NEW_CONTENT_SUCCEEDED:
    case STAFF_CREATE_NEW_CONTENT_FAILED:
    case STAFF_EDIT_CONTENT_SUCCEEDED:
    case STAFF_EDIT_CONTENT_FAILED:
    case STAFF_DELETE_CONTENT_SUCCEEDED:
    case STAFF_DELETE_CONTENT_FAILED:

    case STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED:
    case STAFF_CREATE_NEW_EQUIPMENT_FAILED:
    case STAFF_EDIT_EQUIPMENT_SUCCEEDED:
    case STAFF_EDIT_EQUIPMENT_FAILED:
    case STAFF_DELETE_EQUIPMENT_SUCCEEDED:
    case STAFF_DELETE_EQUIPMENT_FAILED:

    case STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED:
    case STAFF_CREATE_NEW_INGREDIENT_FAILED:
    case STAFF_EDIT_INGREDIENT_SUCCEEDED:
    case STAFF_EDIT_INGREDIENT_FAILED:
    case STAFF_DELETE_INGREDIENT_SUCCEEDED:
    case STAFF_DELETE_INGREDIENT_FAILED:
    
    case STAFF_CREATE_NEW_RECIPE_SUCCEEDED:
    case STAFF_CREATE_NEW_RECIPE_FAILED:
    case STAFF_EDIT_RECIPE_SUCCEEDED:
    case STAFF_EDIT_RECIPE_FAILED:
    case STAFF_DELETE_RECIPE_SUCCEEDED:
    case STAFF_DELETE_RECIPE_FAILED:
      return {...state, ...{message: action.message}};
    default: return state;
  }
}