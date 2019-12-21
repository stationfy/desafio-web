import React from 'react'

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

export default ({ pulls, isScrolling }) => {
    return pulls.length ? pulls.map(pull =>
        <ListItem key={ pull.id }>
            <LinkToPulls funcParam={pull.link} handleClick={window.open}>
                <LeftContent>
                    <ContentTitle>{ pull.title }</ContentTitle>
                    <ContentSubTitle>{ pull.body }</ContentSubTitle>
                    <ContentLabels>
                        <Labels>{ pull.createdAt }</Labels>
                    </ContentLabels>
                </LeftContent>
                <RightContent>
                    <UserImage src={ pull.authorAvatar } alt={'owner'}/>
                    <ContentName>{ pull.authorLogin }</ContentName>
                </RightContent>
            </LinkToPulls>
        </ListItem>) : isScrolling ? null : <Loader />
}
