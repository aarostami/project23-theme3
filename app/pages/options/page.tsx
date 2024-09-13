'use client'
import { Container } from '@mui/system';
import Services from '../../Components/MidCom/CommentsSlider';
import CommentsSlider from '../../Components/MidCom/CommentsSlider';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Heading from '../../Components/Heading'

const options = () => {

	return (<header>
		<section className='Container'>
			<section>
				<Container>
					<Services />
					<CommentsSlider />
				</Container>
			</section>
		</section>
	</header>
	)
}

export default options