import React, { PropTypes } from 'react';
import * as RepoActionCreators from '../actions/RepoActionCreators';
import * as UserActionCreators from '../actions/UserActionCreators';
import StargazersByRepoStore from '../stores/StargazersByRepoStore';
import UserStore from '../stores/UserStore';
import RepoStore from '../stores/RepoStore';
import Repo from '../components/Repo';
import User from '../components/User';
import DocumentTitle from 'react-document-title';
/* eslint-disable no-unused-vars */
import connectToStores from '../utils/connectToStores';
/* eslint-enable no-unused-vars */

function parseFullName(params) {
  return `${params.login}/${params.name}`;
}

/**
 * Requests data from server for current props.
 */
function requestData(props) {
  const { params } = props;
  const fullName = parseFullName(params);

  RepoActionCreators.requestRepo(fullName);
  UserActionCreators.requestStargazerPage(fullName, true);
}

/**
 * Retrieves state from stores for current props.
 */
function getState(props) { // eslint-disable-line no-unused-vars
  const fullName = parseFullName(props.params);

  const repo = RepoStore.get(fullName);
  const owner = repo && UserStore.get(repo.owner);

  const stargazers = StargazersByRepoStore.getUsers(fullName);
  const isLoadingStargazers = StargazersByRepoStore.isExpectingPage(fullName);
  const isLastPageOfStargazers = StargazersByRepoStore.isLastPage(fullName);

  return {
    repo,
    owner,
    stargazers,
    isLoadingStargazers,
    isLastPageOfStargazers
  };
}

/* eslint-disable no-unused-vars */
const stores = [RepoStore, StargazersByRepoStore, UserStore];
@connectToStores(stores, getState)
/* eslint-enable no-unused-vars */
export default class RepoPage {
  static propTypes = {
    // Injected by React Router:
    params: PropTypes.shape({
      login: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,

    // Injected by @connectToStores:
    repo: PropTypes.object,
    owner: PropTypes.object,
    stargazers: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoadingStargazers: PropTypes.bool.isRequired,
    isLastPageOfStargazers: PropTypes.bool.isRequired
  };

  constructor() {
    this.renderStargazers = this.renderStargazers.bind(this);
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
  }

  componentWillMount() {
    requestData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (parseFullName(nextProps.params) !== parseFullName(this.props.params)) {
      requestData(nextProps);
    }
  }

  render() {
    const { repo, owner, params } = this.props;
    const fullName = parseFullName(params);

    return (
        <DocumentTitle title={`Stargazers of ${fullName}`}>
          <div>
            {repo && owner ?
                <Repo repo={repo} owner={owner}/> :
                <h5>Loading {fullName}...</h5>
            }

            <h4>Stargazers</h4>
            {this.renderStargazers()}
          </div>
        </DocumentTitle>
    );
  }

  renderStargazers() {
    const {
        stargazers,
        isLoadingStargazers: isLoading,
        isLastPageOfStargazers: isLastPage
        } = this.props;
    const isEmpty = stargazers.length === 0;

    return (
        <div class="flow-text">
          {stargazers.map(user =>
                  <User key={user.login} user={user}/>
          )}

          {isEmpty && !isLoading &&
          <span>None :-(</span>
          }

          {isEmpty && isLoading &&
          <span>Loading...</span>
          }

          {!isEmpty && (isLoading || !isLastPage) &&
          <button onClick={this.handleLoadMoreClick}
                  disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Load more'}
          </button>
          }
        </div>
    );
  }

  handleLoadMoreClick() {
    const fullName = parseFullName(this.props.params);
    UserActionCreators.requestStargazerPage(fullName);
  }
}
