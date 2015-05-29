var Immutable = require('immutable'),
    createStore = require('dispatchr/utils/createStore'),

var ExperimentStore = createStore({
    storeName: 'ExperimentStore',

    initialize: function() {
        this._experiments = Immutable.Map();
    },

    isActive: function(experiment) {
        return !!this._experiments.get(experiment);
    },

    handlers: {
        experimentActivate: function(payload) {
            this._experiments = this._experiments.set(
                payload.experiment.id,
                true
            );
            this.emitChange();
        },
        experimentDeactivate: function(payload) {
            this._experiments = this._experiments.delete(
                payload.experiment.id
            );
            this.emitChange();
        }
    }
});
