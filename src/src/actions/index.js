import {
    REQUEST_REPOS,
    RECEIVE_REPOS,
    RECEIVE_REPOS_ERROR,
    REQUEST_PULLS,
    RECEIVE_PULLS,
    RECEIVE_PULLS_ERROR,
    RECEIVE_REPOS_PAGE_COUNT,
    RECEIVE_PULLS_PAGE_COUNT,
    SET_SCROLLING,
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

function setScrolling(isScrolling) {
    return { type: SET_SCROLLING, isScrolling }
}

function clearPulls(getting) {
    return { type: CLEAR_PULLS, getting }
}

export function fetchRepos(page) {
    return async dispatch => {
        dispatch(requestRepos())
        try {
            const res = await fetch(`https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=${page}`)
            const { items = [] } = await res.json()
            const repos = items.length ? items.map(repo => {
                const {
                    id,
                    name,
                    description,
                    forks,
                    stargazers_count,
                    owner: { avatar_url: ownerAvatar, login: ownerName  },
                    full_name
                } = repo
    
                return { 
                    id,
                    name,
                    description: `${description.slice(0, 67)}...`,
                    forks,
                    stars: stargazers_count,
                    ownerAvatar,
                    ownerName,
                    full_name
                }
            }) : []

            return dispatch(receiveRepos(repos))
        }
        catch (err) {
            return dispatch(receiveReposErr(err))
        }
    }
}

export function fetchPulls(full_name, page) {
    return async dispatch => {
        dispatch(requestPulls())
        try {
            const res = await fetch(`https://api.github.com/repos/${full_name}/pulls?page=${page}`)
            const json = await res.json()
            const pulls = json.length ? json.map(pull => {
                const {
                    id,
                    title,
                    body,
                    created_at,
                    user: { avatar_url, login },
                    html_url: link
                } = pull
    
                return {
                    id,
                    title: `${title ? title.slice(0, 47) : 'Pull without title'}...`,
                    body: `${body ? body.slice(0, 67) : 'Pull without body'}...`,
                    createdAt: new Date(created_at).toLocaleDateString(),
                    authorAvatar: avatar_url,
                    authorLogin: login,
                    link
                }
            }) : []

            return dispatch(receivePulls(pulls, full_name))
        }
        catch (err) {
            return dispatch(receivePullsErr(err))
        }
    }
}

export function setReposPageCount(count) {
    return dispatch => dispatch(receiveRepoPageCount(count))
}

export function setPullsPageCount(count) {
    return dispatch => dispatch(receivePullsPageCount(count))
}

export function scrolling(isScrolling) {
    return dispatch => dispatch(setScrolling(isScrolling))
}

export function clearPullsState(getting) {
    return dispatch => dispatch(clearPulls(getting))
}