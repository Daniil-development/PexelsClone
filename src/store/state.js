import {makeAutoObservable} from "mobx";

export default class State {
    constructor() {
        this._fetching = true;
        this._items = [];
        this._totalCount = 0
        this._error = false;
        this._currentPage = 1;
        makeAutoObservable(this);
    }
    setFetching(value) {
        this._fetching = value;
    }

    get fetching () {
        return this._fetching;
    }

    setItems(value) {
        this._items = value;
    }

    get items () {
        return this._items;
    }

    setTotalCount(value) {
        this._totalCount = value;
    }

    get totalCount () {
        return this._totalCount;
    }

    setError(value) {
        this._error = value;
    }

    get error () {
        return this._error;
    }

    setCurrentPage(value) {
        this._currentPage = value;
    }

    get currentPage () {
        return this._currentPage;
    }

    resetGrid () {
        this._items = [];
        this._currentPage = 1;
        this._fetching = true;
    }
}