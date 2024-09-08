'use client'
import Grid from '@mui/material/Unstable_Grid2';
import Heading from '../../Components/Heading'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button';
import { Container, borderBottom } from '@mui/system';
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
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