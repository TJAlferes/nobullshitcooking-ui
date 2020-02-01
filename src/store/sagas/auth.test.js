import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
import { call, put, delay } from 'redux-saga/effects';
//import { expectSaga } from 'redux-saga-test-plan';
//import * as matchers from 'redux-saga-test-plan/matchers';
//import { throwError } from 'redux-saga-test-plan/providers';

import {
  authUserLoginSaga,
  authUserLogoutSaga,
  authUserRegisterSaga
} from './auth';

import {
  authMessageClear,
  authDisplay,
  //authCheckState,
  //authReset,

  //authStaffLoginSucceeded,
  //authStaffLoginFailed,
  //authStaffLogoutSucceeded,
  //authStaffLogoutFailed,

  authUserLoginSucceeded,
  authUserLoginFailed,
  authUserLogoutSucceeded,
  authUserLogoutFailed,
  authUserRegisterSucceeded,
  authUserRegisterFailed,

  //authUserVerifySucceeded,
  //authUserVerifyFailed,
  //authFacebookCheckState,
  //authFacebookLogin,
  //authFacebookLogout,
  //authGoogleCheckState,
  //authGoogleLogin,
  //authGoogleLogout,
} from '../actions/index';

import { removeStorageItem } from '../../utils/storageHelpers';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;  // remove in test?

//const mock = new MockAdapter(axios, {delayResponse: 100});

describe('the authUserLoginSaga', () => {
  /*it('works', () => {
    const action = {
      type: 'AUTH_USER_LOGIN',
      email: 'person@company.com',
      password: 'secret'
    };
    return expectSaga(authUserLoginSaga, action)
    .provide([
      [call(() => {
        mock
        .onPost(
          `${endpoint}/user/auth/login`,
          {userInfo: {email: action.email, password: action.password}},
          {withCredentials: true}  // remove?
        )
        .reply(
          201,  // change?
          {message: 'Signed in.'}
        );
      })]
    ])
    .put({
      type: 'AUTH_USER_LOGIN_SUCCEEDED',
      message: 'Signed in.'
    })
    .put({type: 'AUTH_MESSAGE_CLEAR'})
    .dispatch(action)
    .silentRun(50);
  });

  it('handles errors', () => {
    const error = new Error('error');
    return expectSaga(authUserLoginSaga, api)
    .provide([
      [matchers.call.fn(api.fetchUser), throwError(error)],
    ])
    .put({ type: 'FAIL_USER', error })
    .dispatch({ type: 'REQUEST_USER', payload: 42 })
    .silentRun(50);
  });*/

  const action = {email: 'person@place.com', password: 'secret'};

  it('should dispatch display and succeeded', () => {
    const iterator = authUserLoginSaga(action);
    const res = {
      data: {
        message: 'Signed in.',
        username: 'Person',
        avatar: 'Person'
      }
    };

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/auth/login`,
      {userInfo: {email: action.email, password: action.password}},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(authDisplay(res.data.username, res.data.avatar)));

    expect(iterator.next(res).value)
    .toEqual(put(authUserLoginSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = authUserLoginSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(authUserLoginFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});    
  });

  it('should dispatch failed if thrown', () => {
    const iterator = authUserLoginSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(authUserLoginFailed('An error occurred. Please try again.')));
    
    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('the authUserLogoutSaga', () => {
  /*it('works', () => {
    return expectSaga(authUserLogoutSaga)
    .provide([
      [call(() => {
        mock.onPost(
          `${endpoint}/user/auth/logout`,
          {},
          {withCredentials: true}  // remove?
        )
        .reply(
          201,  // change?
          {message: 'Signed out.'}
        );
      })]
    ])
    .put({
      type: 'AUTH_USER_LOGOUT_SUCCEEDED',
      message: 'Signed out.'
    })
    .put({type: 'AUTH_MESSAGE_CLEAR'})
    .dispatch(action)
    .silentRun(50);
  });*/

  const action = {email: 'person@place.com', password: 'secret'};

  it('should dispatch succeeded', () => {
    const iterator = authUserLogoutSaga(action);
    const res = {data: {message: 'Signed out.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/auth/logout`,
      {},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(call(removeStorageItem, 'appState'));

    expect(iterator.next(res).value)
    .toEqual(put(authUserLogoutSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = authUserLogoutSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(call(removeStorageItem, 'appState'));

    expect(iterator.next(res).value)
    .toEqual(put(authUserLogoutFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = authUserLogoutSaga(action);
    
    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(authUserLogoutFailed('An error occurred. Please try again.')));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('the authUserRegisterSaga', () => {
  /*it('works', () => {
    const action = {
      type: 'AUTH_USER_REGISTER',
      email: 'person@company.com',
      password: 'secret',
      username: 'kindperson',
      history: {}  // change? (not just here, in actionCreator too)
    };
    return expectSaga(authUserRegisterSaga, action)
    .provide([
      [call(() => {
        mock
        .onPost(
          `${endpoint}/user/auth/register`,
          {
            userInfo: {
              email: action.email,
              password: action.password,
              username: action.username
            }},
          {withCredentials: true}  // remove?
        )
        .reply(
          201,  // change?
          {message: 'User account created.'}
        );
      })]
    ])
    .put({
      type: 'AUTH_USER_REGISTER_SUCCEEDED',
      message: 'User account created.'
    })
    .put({type: 'AUTH_MESSAGE_CLEAR'})
    .dispatch(action)
    .silentRun(50);
  });*/

  const action = {
    email: 'person@place.com',
    password: 'secret',
    username: 'Person',
    historyDouble: {
      push: function(path) {}
    }
  };

  it('should dispatch succeeded, then push history', () => {
    const iterator = authUserRegisterSaga(action);
    const { historyDouble } = action;
    const res = {data: {message: 'User account created.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/auth/register`,
      {
        userInfo: {
          email: action.email,
          password: action.password,
          username: action.username
        }
      }
    ));

    expect(iterator.next(res).value)
    .toEqual(put(authUserRegisterSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(2000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));

    expect(iterator.next().value)
    .toEqual(call([historyDouble, historyDouble.push], '/user/login'));

    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = authUserRegisterSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(authUserRegisterFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = authUserRegisterSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(authUserRegisterFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});