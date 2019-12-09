import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { connect } from 'react-redux'

import {
	fetchRepos,
	fetchPulls,
	clearPullsState,
	setReposPageCount,
	setPullsPageCount
} from './actions'

import NavBar from './components/NavBar'
import Repo from './components/Repo'
import PullRequest from './components/PullRequest'

import {Header, Nav, AppTitle, ItemsWrapper, Loader } from './components/StyledComponents'

class App extends Component {
	componentDidMount () {
		const { location, pullsState, history } = this.props
		if(location.pathname === '/pulls' && !pullsState.full_name)
			history.push('/')
		this.getRepos()
	}

	getCurrentData = isRepo => {
		if (isRepo) return this.getRepos()
		const { pullsState: { full_name } } = this.props
		this.getPulls(full_name)
	}

	getRepos = () => {
		const { dispatch, reposState} = this.props
		dispatch(clearPullsState(false))
		dispatch(fetchRepos(reposState.page))
		dispatch(setReposPageCount(1))
	}

	getPulls = full_name => {
		const { dispatch, pullsState } = this.props
		dispatch(fetchPulls(full_name, pullsState.page))
		dispatch(setPullsPageCount(1))
	}

	handleClick = full_name => {
		const { dispatch } = this.props
		dispatch(clearPullsState(false))
		this.getPulls(full_name)
	}

	handleBack = getting => {
		window.scrollTo(0,0)
		const { dispatch } = this.props
		if (getting) dispatch(clearPullsState(false))
	}

	render () {
		const { reposState, pullsState } = this.props
		const { repos } = reposState,
			{ pulls, getting } = pullsState
		const value = getting ? pulls.length : repos.length

		return (
			<div>
				<Header>
					<Nav>
					<NavBar handleBack={this.handleBack} getting={getting}/>
					<AppTitle>Github JavaScript Repos</AppTitle>
					</Nav>
				</Header>
				<ItemsWrapper>
					<InfiniteScroll
						dataLength={value}
						next={() => this.getCurrentData(!getting)}
						hasMore={true}
						loader={<Loader />}
						style={{ overflow: 'initial' }}
					>
						<Route
							exact
							path='/'
							component={() => <Repo repos={repos} handleClick={this.handleClick} />}
						/>
						<Route
							path='/pulls'
							component={() => <PullRequest pulls={pulls} />}
						/>
					</InfiniteScroll>
				</ItemsWrapper>
			</div>
		)
	}
}

function mapStateToProps (state) {
	const { reposState, pullsState } = state
	return { reposState, pullsState }
}

export default connect(mapStateToProps)(App)
