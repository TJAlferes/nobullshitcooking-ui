import {
  USER_SUBMIT_AVATAR,
  USER_SUBMIT_AVATAR_SUCCEEDED,
  USER_SUBMIT_AVATAR_FAILED
} from './types';

export const userSubmitAvatar = (
  fullAvatar: File | null,
  tinyAvatar: File | null
) => ({
  type: USER_SUBMIT_AVATAR,
  fullAvatar,
  tinyAvatar
});

export const userSubmitAvatarSucceeded = (message: string) => ({
  type: USER_SUBMIT_AVATAR_SUCCEEDED,
  message
});

export const userSubmitAvatarFailed = (message: string) => ({
  type: USER_SUBMIT_AVATAR_FAILED,
  message
});