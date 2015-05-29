import React, { Component , PropTypes } from 'react';


// old
var Homepage = React.createClass({
    render: function() {
        return (
            <div className="container">
                <HeroContent />
                <div className="row">
                    <div className="col-sm-5">
                        <h2>Happening Now</h2>
                        <ActivityFeed />
                    </div>
                    <div className="col-sm-5 col-sm-offset-2">
                        <h2>Learn more</h2>
                        <IntroVideo />
                    </div>
                </div>
                <TiltForBusiness />
                <Footer />
            </div>
        );
    }
});

// new

var Homepage = React.createClass({

    // Read experiment store in as component state and update it when the store changes

    getInitialState: function() {
        return {
            experiments: ExperimentStore.getExperiments()
        };
    },

    componentDidMount: function() {
        ExperimentStore.addChangeListener(this._updateExperiments);
    },

    componentWillUnmount: function() {
        ExperimentStore.removeChangeListener(this._updateExperiments);
    },

    _updateExperiments: function() {
        this.setState({ experiments: ExperimentStore.getExperiments() });
    },

    // Conditionally render homepage based on component state

    render: function() {
        if (this.state.experiments.get('homepage-feed')) {
            // render page with feed 'above the fold'
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <HeroContent />
                        </div>
                        <div className="col-sm-6">
                            <h2>Happening Now</h2>
                            <ActivityFeed count={8} />
                        </div>
                        <TiltForBusiness />
                        <Footer />
                    </div>
                </div>
            );
        }

        // render normal version of page
        return (
            <div>
                <HeroContent />
                <div className="row">
                    <div className="col-sm-5">
                        <h2>Happening Now</h2>
                        <ActivityFeed />
                    </div>
                    <div className="col-sm-5 col-sm-offset-2">
                        <h2>Learn more</h2>
                        <IntroVideo />
                    </div>
                </div>
                <TiltForBusiness />
                <Footer />
            </div>
        );
    }
});
