'use client'
import { Container } from "@mui/system"
import './style.css'
import { Box, Typography } from '@mui/material'

const common = () => {
	return <header>
		<section className='Container'>
			<section>
				<Container>
					<Box height={'65vh'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', rowGap: 2 }}>
						<Typography variant='h2' fontWeight={'bold'}>تماس با ما</Typography>
						<Typography className='headTitle' variant='body1' >خانه / تماس با ما</Typography>
					</Box>
				</Container>
			</section>
		</section>
	</header>
}

export default common