import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'
import { addMeeting, getMeetingList } from "./actions";

const url = 'http://127.0.0.1:8000/meetings/'

export function* getMeeting() {
  const data = yield call(api.get, url);
  yield put(getMeetingList(data))
}

export function* watchGetMeetingRequest() {
  while (true) {
    yield take(actions.HTTP_GET)
    yield call(getMeeting)
  }
}

export function* postMeeting(sinceWhen, tilWhen, headerContent) {
  console.log(sinceWhen, tilWhen)
  try {
    const data = yield call(api.post, url, {sinceWhen: sinceWhen, tilWhen: tilWhen},
      {
        headers: {
          Authorization: headerContent,
          'Content-type': 'application/json',
        },
      });
  }
  catch (e) {

  }
  yield call(getMeeting)
  // yield put(addMeeting(data))
}

export function* watchPostMeetingRequest() {
  while (true) {
    const { sinceWhen, tilWhen, headerContent } = yield take(actions.HTTP_POST)
    yield call(postMeeting, sinceWhen, tilWhen, headerContent)
  }
}

export function* deleteMeeting(id, headerContent) {
  const url_detail = `http://127.0.0.1:8000/meetings/${id}/`
  console.log(headerContent)
  try {
    yield call(api.delete, url_detail, {headers: {Authorization: headerContent}})
    yield call(getMeeting)
  }
  catch (e){

  }
}

export function* watchdeleteMeetingRequest() {
  while (true){
    const data = yield take(actions.HTTP_DELETE)
    console.log(data.id)
    yield call(deleteMeeting, data.id, data.headerContent)
  }
}

export default function* () {
  yield fork(watchPostMeetingRequest)
  yield fork(watchGetMeetingRequest)
  yield fork(watchdeleteMeetingRequest)
}
