import React, { PropTypes } from 'react';
import { RouteHandler } from 'react-router';
import DocumentTitle from 'react-document-title';

import Explore from './components/Explore';
import Footer from './components/footer.react.js';

export default class App {
	static propTypes = {
		params: PropTypes.object.isRequired,
		query: PropTypes.object.isRequired
	};

	render() {
		return (
			<DocumentTitle title='Sample App'>
				<div className='App'>
						<div className="row">
								<div>
											<Explore {...this.props} />
								</div>
								<div>
											<RouteHandler {...this.props} />
								</div>
							</div>
					<Footer />
				</div>
			</DocumentTitle>
		);
	}
}
