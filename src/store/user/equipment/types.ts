export const USER_CREATE_NEW_PRIVATE_EQUIPMENT = 'USER_CREATE_NEW_PRIVATE_EQUIPMENT' as const;
export const USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED = 'USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED' as const;
export const USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED = 'USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED' as const;
export const USER_EDIT_PRIVATE_EQUIPMENT = 'USER_EDIT_PRIVATE_EQUIPMENT' as const;
export const USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED = 'USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED' as const;
export const USER_EDIT_PRIVATE_EQUIPMENT_FAILED = 'USER_EDIT_PRIVATE_EQUIPMENT_FAILED' as const;
export const USER_DELETE_PRIVATE_EQUIPMENT = 'USER_DELETE_PRIVATE_EQUIPMENT' as const;
export const USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED = 'USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED' as const;
export const USER_DELETE_PRIVATE_EQUIPMENT_FAILED = 'USER_DELETE_PRIVATE_EQUIPMENT_FAILED' as const;

export interface IUserCreateNewPrivateEquipment {
  type: typeof USER_CREATE_NEW_PRIVATE_EQUIPMENT;
  equipmentInfo: ICreatingEquipmentInfo;
}

export interface IUserCreateNewPrivateEquipmentSucceeded {
  type: typeof USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED;
  message: string;
}

export interface IUserCreateNewPrivateEquipmentFailed {
  type: typeof USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED;
  message: string;
}

export interface IUserEditPrivateEquipment {
  type: typeof USER_EDIT_PRIVATE_EQUIPMENT;
  equipmentInfo: IEditingEquipmentInfo;
}

export interface IUserEditPrivateEquipmentSucceeded {
  type: typeof USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED;
  message: string;
}

export interface IUserEditPrivateEquipmentFailed {
  type: typeof USER_EDIT_PRIVATE_EQUIPMENT_FAILED;
  message: string;
}

export interface IUserDeletePrivateEquipment {
  type: typeof USER_DELETE_PRIVATE_EQUIPMENT;
  id: number;
}

export interface IUserDeletePrivateEquipmentSucceeded {
  type: typeof USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED;
  message: string;
}

export interface IUserDeletePrivateEquipmentFailed {
  type: typeof USER_DELETE_PRIVATE_EQUIPMENT_FAILED;
  message: string;
}

export interface ICreatingEquipmentInfo {
  equipmentTypeId: number;
  name: string;
  description: string;
  image: string | ArrayBuffer | null;
  fullImage: File | null;
  tinyImage: File | null;
}

export interface IEditingEquipmentInfo {
  id: number;
  equipmentTypeId: number;
  name: string;
  description: string;
  prevImage: string;
  image: string | ArrayBuffer | null;
  fullImage: File | null;
  tinyImage: File | null;
}