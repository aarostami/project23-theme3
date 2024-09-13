import { Container, styled } from '@mui/system'
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import unlock from '../../images/001-unlock.png'
import shield from '../../images/002-shield.png'
import pencil from '../../images/003-pencil.png'
import home_page from '../../images/004-home-page.png'
import headset from '../../images/005-headset.png'
import ServiceBoxCom from '../ServiceBoxCom';

const Services = () => {
	const ServiceBox = styled('article')({
		backgroundColor: '#eee',
		padding: '2.5rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		height: '17rem',
		rowGap: '0.7rem',
		transition: 'all 0.3s'
	})

	return <section className='services'>
		<Container>
			<Grid container alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'} spacing={4}>
				<Grid md={4}>
					<ServiceBox>
						<Typography variant='h4'>فضای میزبانی مورد نظر خود را انتخاب کنید</Typography>
						<Typography>این فضا معمولاً یک رایانه است که اندکی با رایانه‌های خانگی متفاوت است. این رایانه که سرور (Server) نام دارد، همیشه به اینترنت متصل است و دارای یک نشانی IP ثابت می‌باشد</Typography>
					</ServiceBox>
				</Grid>
				<Grid md={4}>
					<ServiceBox className='ServiceBox'>
						<Image src={unlock} alt='unlock' />
						<Typography variant='h6'></Typography>
						<Typography>برای برپاسازی یک سایت، اول از همه نیاز به یک مکان روی اینترنت داریم که بتوانیم فایل‌های سایت را روی آن بریزیم</Typography>
					</ServiceBox>
					{/* <ServiceBoxCom {...{src: unlock, text1: 'سرور امن', text2: 'برای برپاسازی یک سایت، اول از همه نیاز به یک مکان روی اینترنت داریم که بتوانیم فایل‌های سایت را روی آن بریزیم'}} */}
				</Grid>
				<Grid md={4}>
					<ServiceBox className='ServiceBox'>
						<Image src={shield} alt='shield' />
						<Typography variant='h6'>پشتیبان گیری</Typography>
						<Typography>این فضا معمولاً یک رایانه است که اندکی با رایانه‌های خانگی متفاوت است. این رایانه که سرور (Server) نام دارد</Typography>
					</ServiceBox>
				</Grid>
				<Grid md={4}>
					<ServiceBox className='ServiceBox'>
						<Image src={pencil} alt='pencil' />
						<Typography variant='h6'>شخصی سازی</Typography>
						<Typography>همیشه به اینترنت متصل است و دارای یک نشانی IP ثابت می‌باشد تا همیشه بتوان از طریق رایانه‌های دیگر به آن دسترسی داشت.</Typography>
					</ServiceBox>
				</Grid>
				<Grid md={4}>
					<ServiceBox className='ServiceBox'>
						<Image src={home_page} alt='home_page' />
						<Typography variant='h6'>انتقال رایگان</Typography>
						<Typography>از نرم افزارهای خاصی هم بهره می‌برد که بتواند فایل‌های سایت را تبدیل به صفحات اینترنتی کند و خدمات جانبی را هم به صاحب سایت بدهد.</Typography>
					</ServiceBox>
				</Grid>
				<Grid md={4}>
					<ServiceBox className='ServiceBox'>
						<Image src={headset} alt='headset' />
						<Typography variant='h6'>پشیتیبانی آنلاین</Typography>
						<Typography>هاست هم نام برده می‌شود که در اصل اگر Host را به فارسی برگردانی کنیم، همان معنی و مفهوم فضای میزبانی را می‌دهد.</Typography>
					</ServiceBox>
				</Grid>
			</Grid>
		</Container>
	</section>
}

export default Services