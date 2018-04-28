import { Model } from "dva";
import { queryNotices } from "../services/api";

export default {
  namespace: "global",
  state: {
    collapsed: false,
    notices: [],
    fetchingNotices: false
  },
  effects: {
    *fetchNotices(_, { call, put }) {
      yield put({
        type: "changeNoticeLoading",
        payload: true
      });
      const data = yield call(queryNotices);
      yield put({
        type: "saveNotices",
        payload: data
      });
    }
  },
  reducers: {
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload
      };
    },
    saveNotices(state, { payload }) {
      return {
        ...state,
        notices: payload,
        fetchingNotices: false
      };
    },
    saveClearedNotices(state, { payload }) {
      return {
        ...state,
        notices: state.notices.filter(item => item.type !== payload)
      };
    },
    changeNoticeLoading(state, { payload }) {
      return {
        ...state,
        fetchingNotices: payload
      };
    }
  }
} as Model;
