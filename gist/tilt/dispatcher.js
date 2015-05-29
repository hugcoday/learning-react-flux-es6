window.TiltExperiments = {
    activate: function(experimentName) {
        Dispatcher.dispatch('experimentActivate', {
            id: experimentName
        });
    },
    deactivate: function(experimentName) {
        Dispatcher.dispatch('experimentDeactivate', {
            id: experimentName
        });
    }
};
