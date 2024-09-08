import Grid from '@mui/material/Unstable_Grid2';
import Heading from '../Heading'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button';
import { Container, Box, unstable_styleFunctionSx, SxProps, bgcolor, styled, ThemeProvider, style } from '@mui/system'
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const Prices = () => {
	return <section className='prices'>
		<div className='pricesCover'>
			<Container>
				<Typography variant='h4' textAlign={'center'} color={'white'} py={'7rem'}>بسته های قیمت گذاری محبوب</Typography>
				<article>
					<Grid container alignItems={'center'} justifyContent={'center'} textAlign={'center'} position={'relative'} top={'25%'} columnSpacing={4} px={4}>
						<Grid md={4}>
							<Box bgcolor={'#faf9ff'} borderRadius={1} py={5} sx={{ transition: 'all 0.3s', ":hover": { boxShadow: '0px 0px 25px #bbb' } }}>
								<Typography variant='h4'>عادی</Typography>
								<Typography variant='body1'>یک روز امتحان رایگان</Typography>
								<Typography variant='h3' fontWeight={'bold'} py={2}>45.80تومان</Typography>
								<hr color='#ddd' />
								<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', rowGap: '1rem', padding: '1rem' }}>
									<Typography variant='body1'>بارگزاری 80 وب سایت</Typography>
									<Typography variant='body1'>فضای 200 مگ</Typography>
									<Typography variant='body1'>پهنای باند نا محدود</Typography>
									<Typography variant='body1'>پشتیبانی همه روزه</Typography>
									<Typography variant='body1'>ساخت 4 ایمیل</Typography>
									<hr color='#ddd' />
									<Button variant='outlined' color='inherit' sx={{ borderRadius: '30px', p: '0.7rem 3rem', ':hover': { background: 'linear-gradient(to right, rgb(109 41 197 / 85%), rgb(54 13 209 / 85%))',color: 'white' } }}>انتخاب</Button>
								</div>
							</Box>
						</Grid>
						<Grid md={4}>
							<Box bgcolor={'#faf9ff'} borderRadius={1} py={5} sx={{ transition: 'all 0.3s', ":hover": { boxShadow: '0px 0px 25px #bbb' } }}>
								<Typography variant='h4'>حق بیمه</Typography>
								<Typography variant='body1'>یک روز امتحان رایگان</Typography>
								<Typography variant='h3' fontWeight={'bold'} py={2}>65.80تومان</Typography>
								<hr color='#ddd' />
								<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', rowGap: '1rem', padding: '1rem' }}>
									<Typography variant='body1'>بارگزاری 100 وب سایت</Typography>
									<Typography variant='body1'>فضای میزبانی 400 مگ</Typography>
									<Typography variant='body1'>پهنای باند نا محدود</Typography>
									<Typography variant='body1'>پشتیبانی همه روزه</Typography>
									<Typography variant='body1'>ساخت 10 ایمیل</Typography>
									<hr color='#ddd' />
									<Button variant='outlined' color='inherit' sx={{ borderRadius: '30px', p: '0.7rem 3rem', ':hover': { background: 'linear-gradient(to right, rgb(109 41 197 / 85%), rgb(54 13 209 / 85%))',color: 'white' } }}>انتخاب</Button>
								</div>
							</Box>
						</Grid>
						<Grid md={4}>
							<Box bgcolor={'#faf9ff'} borderRadius={1} py={5} sx={{ transition: 'all 0.3s', ":hover": { boxShadow: '0px 0px 20px #bbb' } }} >
								<Typography variant='h4'>نامحدود</Typography>
								<Typography variant='body1'>یک روز امتحان رایگان</Typography>
								<Typography variant='h3' fontWeight={'bold'} py={2}>75.80تومان</Typography>
								<hr color='#ddd' />
								<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', rowGap: '1rem', padding: '1rem' }}>
									<Typography variant='body1'>بارگزاری نامحدود</Typography>
									<Typography variant='body1'>فضای میزبانی نامحدود</Typography>
									<Typography variant='body1'>پهنای باند نا محدود</Typography>
									<Typography variant='body1'>پشتیبانی همه روزه</Typography>
									<Typography variant='body1'>ایمیل نامحدود</Typography>
									<hr color='#ddd' />
									<Button variant='outlined' color='inherit' sx={{ borderRadius: '30px', p: '0.7rem 3rem', ':hover': { background: 'linear-gradient(to right, rgb(109 41 197 / 85%), rgb(54 13 209 / 85%))',color: 'white' } }}>انتخاب</Button>
								</div>
							</Box>
						</Grid>
					</Grid>
				</article>
			</Container>
		</div>
	</section>
}

export default Prices