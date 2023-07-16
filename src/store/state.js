import { flow, makeAutoObservable } from "mobx";
import { getUrl } from "../api/requests";
import { getData } from "../api/API";

class State {
  constructor() {
    this._fetching = true;
    this._items = [];
    this._totalCount = 0;
    this._error = false;
    this._currentPage = 1;
    this._query = {};
    makeAutoObservable(this, { fetchGrid: flow });
  }

  setFetching(value) {
    this._fetching = value;
  }

  get fetching() {
    return this._fetching;
  }

  setItems(value) {
    this._items = value;
  }

  get items() {
    return this._items;
  }

  setTotalCount(value) {
    this._totalCount = value;
  }

  get totalCount() {
    return this._totalCount;
  }

  setError(value) {
    this._error = value;
  }

  get error() {
    return this._error;
  }

  setCurrentPage(value) {
    this._currentPage = value;
  }

  get currentPage() {
    return this._currentPage;
  }

  setQuery(value) {
    this._query = value;
  }

  get query() {
    return this._query;
  }

  resetGrid() {
    this._items = [];
    this._currentPage = 1;
    this._totalCount = 0;
    this._query = {};
    this._fetching = true;
  }

  updateData(items, currentPage, totalCount) {
    this._items = items;
    this._currentPage = currentPage;
    this._totalCount = totalCount;
  }

  *fetchGrid(location = this._query) {
    this._query = location;

    let url = getUrl(this.currentPage, location.pathname, location.search);

    const data = yield getData(url);

    if (data === null) {
      this.setError(true);
      this.setFetching(false);
      return;
    }

    this.updateData(
      [...this.items, ...data.photos],
      this.currentPage + 1,
      data.total_results,
    );
    this.setFetching(false);
  }
}

let state = new State();
export default state;
