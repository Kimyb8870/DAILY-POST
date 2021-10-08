import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/api/createRequestSaga';
import { readPost as readPostRequest } from '../lib/api/client';
import { takeLatest } from '@redux-saga/core/effects';

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] =
  createRequestActionTypes('post/READ_POST');

const UNLOAD_POST = 'post/UNLOAD_POST';
//post페이지에서 벗어날 때 데이터 비우기

const initialState = {
  post: null,
  error: null,
};

export const readPost = createAction(READ_POST, (id) => id);
export const unloadPost = createAction(UNLOAD_POST);

const readPostSaga = createRequestSaga(READ_POST, readPostRequest);

export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_POST]: () => initialState,
  },
  initialState,
);

export default post;
