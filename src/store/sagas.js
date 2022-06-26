import { all, fork } from "redux-saga/effects";
import homepageSagas from "./homepage/sagas";
import newsSagas from "./news/sagas";
import eventsSagas from "./events/sagas";
import teamsSagas from "./teams/sagas";

export default function* () {
  yield all([
    fork(homepageSagas),
    fork(newsSagas),
    fork(eventsSagas),
    fork(teamsSagas)
  ]);
}