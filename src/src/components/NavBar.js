import React from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { BackLink, ArrowBack } from './StyledComponents'

export default ({ getting, handleBack }) => {
	return <BackLink handleBack={handleBack} getting={getting}>
			{ getting ? <ArrowBack  icon={faArrowLeft} /> : null }
		</BackLink>
}
