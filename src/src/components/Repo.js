import React from 'react'

import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons'
import {
	LinkToPulls,
	ListItem,
	LeftContent,
	RightContent,
	ContentTitle,
	ContentSubTitle,
	ContentLabels,
	Labels,
	UserImage,
	ContentName,
	Loader
} from './StyledComponents'

export default ({ repos, handleClick }) => {
	return repos.length ? repos.map(repo => 
		<ListItem key={ repo.id }>
			<LinkToPulls funcParam={repo.full_name} handleClick={handleClick}>
				<LeftContent>
					<ContentTitle>{ repo.name }</ContentTitle>
					<ContentSubTitle>{ repo.description }</ContentSubTitle>
					<ContentLabels>
						<Labels>
							<FontAwesomeIcon icon={ faCodeBranch }/> 
							{ repo.forks }
						</Labels>
						<Labels>
							<FontAwesomeIcon icon={faStar}/> 
							{ repo.stars }
						</Labels>
					</ContentLabels>
				</LeftContent>
				<RightContent>
					<UserImage src={ repo.ownerAvatar } alt={'owner'}/>
					<ContentName>{ repo.ownerName }</ContentName>
				</RightContent>
			</LinkToPulls>
		</ListItem>) : <Loader />
}
