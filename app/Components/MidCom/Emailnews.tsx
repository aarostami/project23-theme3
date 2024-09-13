import Grid from '@mui/material/Unstable_Grid2';
import { Input, Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Image from 'next/image';

const Emailnews = () => {
	return <section className='emailnews' style={{ padding: '5rem 0', backgroundColor: '#ddd' }}>
		<Container>
			<Grid textAlign={'center'}>
				<Typography variant='h3' color=''>در خبرنامه ما عضو شوید</Typography>
				<Typography pt={3} pb={5}>با عضویت در خبرنامه از جدیدترین مطالب ما با خبر شوید</Typography>
				<Input sx={{ px: '5rem', ml: '2rem', borderBottom: '1px solid black' }} placeholder='ایمیل خود را وارد کنید' />
				<Button variant='contained' color='inherit' className='button' sx={{ borderRadius: '20px', px: 5, fontSize: '1.1rem', ':hover': { color: 'white' } }}>عضویت</Button>
			</Grid>
		</Container>
	</section>
}
export default Emailnews