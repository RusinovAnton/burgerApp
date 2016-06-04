'use strict';

import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _callbacks = [];
let _promises = [];

class Dispatcher extends EventEmitter {

    constructor(){
        super()
    }

    /**
     * Register a Store's callback so that it may be invoked by an action.
     * @param {function} callback The callback to be registered.
     * @return {number} The index of the callback within the _callbacks array.
     */
    register(callback) {
        _callbacks.push(callback);
        return _callbacks.length - 1; // index
    }

    /**
     * dispatch
     * @param  {object} payload The data from the action.
     */
    dispatch(payload) {
        const _this = this;
        // First create array of promises for callbacks to reference.
        let resolves = [];
        let rejects = [];
        _promises = _callbacks.map(function(_, i) {
            return new Promise(function(resolve, reject) {
                resolves[i] = resolve;
                rejects[i] = reject;
            });
        });
        // Dispatch to callbacks and resolve/reject promises.
        _callbacks.forEach(function(callback, i) {
            // Callback can return an obj, to resolve, or a promise, to chain.
            // See waitFor() for why this might be useful.
            Promise.resolve(callback(payload)).then(function() {
                resolves[i](payload);
                _this.emitChange();
            }, function() {
                rejects[i](new Error('Dispatcher callback unsuccessful'));
            });
        });
        _promises = [];
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

}

export default Dispatcher;
