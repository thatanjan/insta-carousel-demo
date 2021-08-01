import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import PostCard from './PostCard'

const useStyles = makeStyles({
	fullContainer: {
		height: '100vh',
	},
	headerContainer: {
		height: '25vh',
		display: 'grid',
		placeItems: 'center',
	},

	carouselOuterContainer: {
		height: '75vh',
	},
})

function App() {
	const { fullContainer, headerContainer, carouselOuterContainer } = useStyles()
	return (
		<div className='App'>
			<Grid container className={fullContainer}>
				<Grid item className={headerContainer} xs={12}>
					<Typography variant='h3'>Insta Carousel</Typography>
				</Grid>

				<Grid
					item
					container
					justifyContent='center'
					className={carouselOuterContainer}
					xs={12}
				>
					<Grid item xs={3}>
						<PostCard />
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default App
