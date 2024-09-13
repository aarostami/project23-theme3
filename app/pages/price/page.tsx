'use client'
import { Container } from '@mui/system';
import Prices from '../../Components/MidCom/Prices';
import Emailnews from '../../Components/MidCom/Emailnews';
import Textinfo from '../../Components/MidCom/Textinfo';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

const price = () => {

	return (<header>
		<section className='Container'>
			<section>
				<Container>
					<Prices />
					<Emailnews />
					<Textinfo />
				</Container>
			</section>
		</section>
	</header>
	)
}

export default price