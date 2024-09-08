import Grid from '@mui/material/Unstable_Grid2';
import Heading from '../Heading'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button';
import { Container, Box, unstable_styleFunctionSx, SxProps, bgcolor, styled, ThemeProvider, style } from '@mui/system'
import Typography from '@mui/material/Typography';
import Image from 'next/image';
const Emailnews = () => {
	return <section className='emailnews' style={{ padding: '5rem 0', backgroundColor: '#ddd' }}>
		<Container>
			<Grid textAlign={'center'}>
				<Typography variant='h3' color=''>در خبرنامه ما عضو شوید</Typography>
				<Typography pt={3} pb={5}>با عضویت در خبرنامه از جدیدترین مطالب ما با خبر شوید</Typography>
				<Input sx={{ px: '5rem',ml: '2rem', borderBottom: '1px solid black' }} placeholder='ایمیل خود را وارد کنید' />
				<Button variant='contained' color='inherit' className='button' sx={{ borderRadius: '20px', px: 5, fontSize: '1.1rem', ':hover': {color: 'white'}}}>عضویت</Button>
			</Grid>
		</Container>
	</section>
}
export default Emailnews