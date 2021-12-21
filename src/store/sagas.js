import { all, fork } from "redux-saga/effects";
import homepageSagas from "./homepage/sagas";

export default function* () {
  yield all([
    fork(homepageSagas),
  ]);
}