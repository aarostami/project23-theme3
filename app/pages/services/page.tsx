'use client'
import Grid from '@mui/material/Unstable_Grid2';
import Heading from '../../Components/Heading'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button';
import { Container, borderBottom } from '@mui/system';
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
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