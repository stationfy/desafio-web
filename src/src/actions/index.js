import {
    REQUEST_REPOS,
    RECEIVE_REPOS,
    RECEIVE_REPOS_ERROR,
    REQUEST_PULLS,
    RECEIVE_PULLS,
    RECEIVE_PULLS_ERROR,
    RECEIVE_REPOS_PAGE_COUNT,
    RECEIVE_PULLS_PAGE_COUNT,
    CLEAR_PULLS
} from '../actionTypes.json'

export function requestRepos() {
    return { type: REQUEST_REPOS }
}

function receiveRepos(repos) {
    return { type: RECEIVE_REPOS, repos }
}

function receiveReposErr(error) {
    return { type: RECEIVE_REPOS_ERROR, error }
}

export function requestPulls() {
    return { type: REQUEST_PULLS }
}

function receivePulls(pulls, full_name) {
    return { type: RECEIVE_PULLS, pulls, full_name }
}

function receivePullsErr(error, full_name) {
    return { type: RECEIVE_PULLS_ERROR, error, full_name }
}

function receiveRepoPageCount(count) {
    return { type: RECEIVE_REPOS_PAGE_COUNT, count }
}

function receivePullsPageCount(count) {
    return { type: RECEIVE_PULLS_PAGE_COUNT, count }
}

function clearPulls(getting) {
    return { type: CLEAR_PULLS, getting }
}