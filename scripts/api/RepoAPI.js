import { fetchRepo, fetchRepoArray } from '../utils/APIUtils';

export function getRepo(fullName, url = `repos/${fullName}`) {
  let result =  fetchRepo(url);
  return result;
}

export function getStarredReposPage(login, url = `users/${login}/starred`) {
  return fetchRepoArray(url);
}
