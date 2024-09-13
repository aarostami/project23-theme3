'use client'
import { Container } from '@mui/system';
import SecondPrices from '../../Components/MidCom/SecondPrices';
import CommentsSlider from '../../Components/MidCom/CommentsSlider';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

const services = () => {

	return (<header>
		<section className='Container'>
			<section>
				<Container>
					<SecondPrices />
					<CommentsSlider />
				</Container>
			</section>
		</section>
	</header>
	)
}

export default services