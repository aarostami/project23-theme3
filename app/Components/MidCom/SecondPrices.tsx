import { Container, Box } from '@mui/system'
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Heading from '../Heading'
import Image from 'next/image';
import server from '../../images/006-server.png'
import home_page2 from '../../images/004-home-page (1).png'
import server2 from '../../images/007-server-1.png'
import shield2 from '../../images/002-shield (1).png'
import mail from '../../images/008-mail.png'
import art from '../../images/009-art.png'

const SecondPrices = () => {
	return <section className='secondPrices'>
		<Container>
			<Heading {...{ text: 'سرویس های با کیفیت' }} />
			<Grid container alignItems={'start'} textAlign={'center'} position={'relative'} top={'25%'} columnSpacing={4} rowSpacing={10} px={4}>
				<Grid md={4}>
					<Box p={4} sx={{ transition: 'all 0.3s', ":hover": { boxShadow: '0px 0px 20px #bbb' } }}>
						<Image src={server} alt='server' />
						<Typography variant='h5' py={2}>فضای میزبانی ابری ssd</Typography>
						<Typography>بسته به کیفیت و منابع سخت افزاری هاست، انتخاب‌های زیادی پیش رو دارید که می‌توانید بسته به نیاز خود یک انتخاب را داشته باشید. علاوه بر آن شرکت‌ها و ارائه کنندگان بسیاری هستند</Typography>
					</Box>
				</Grid>
				<Grid md={4}>
					<Box p={4} sx={{ transition: 'all 0.3s', ":hover": { boxShadow: '0px 0px 20px #bbb' } }}>
						<Image src={home_page2} alt='home2' />
						<Typography variant='h5' py={2}>انتقال رایگان دامین</Typography>
						<Typography>برخی از آنها معروف‌تر هستند، برخی دیگر هنوز نوپا هستند و در حال پیشرفت، برخی دیگر از نظر پشتیبانی شناخته‌تر هستند.</Typography>
					</Box>
				</Grid>
				<Grid md={4}>
					<Box p={4} sx={{ transition: 'all 0.3s', ":hover": { boxShadow: '0px 0px 20px #bbb' } }}>
						<Image src={server2} alt='server2' />
						<Typography variant='h5' py={2}>بهترین فضای میزبانی</Typography>
						<Typography>این رایانه که سرور (Server) نام دارد، همیشه به اینترنت متصل است و دارای یک نشانی IP ثابت می‌باشد تا همیشه بتوان از طریق رایانه‌های دیگر به آن دسترسی داشت.</Typography>
					</Box>
				</Grid>
				<Grid md={4}>
					<Box p={4} sx={{ transition: 'all 0.3s', ":hover": { boxShadow: '0px 0px 20px #bbb' } }}>
						<Image src={shield2} alt='shield2' />
						<Typography variant='h5' py={2}>پشتیبان گیری قوی</Typography>
						<Typography>این رایانه از نرم افزارهای خاصی هم بهره می‌برد که بتواند فایل‌های سایت را تبدیل به صفحات اینترنتی کند و خدمات جانبی را هم به صاحب سایت بدهد.</Typography>
					</Box>
				</Grid>
				<Grid md={4}>
					<Box p={4} sx={{ transition: 'all 0.3s', ":hover": { boxShadow: '0px 0px 20px #bbb' } }}>
						<Image src={mail} alt='mail' />
						<Typography variant='h5' py={2}>سرویس ایمیل</Typography>
						<Typography>در اولین گام پس از ثبت دامنه یا نشانی اینترنتی، باید یک فضای میزبانی را هم تهیه کند. این فضا را معمولاً شرکت‌های ارائه دهندۀ فضای میزبانی یا هاستینگ (Hosting) می‌فروشند.</Typography>
					</Box>
				</Grid>
				<Grid md={4}>
					<Box p={4} sx={{ transition: 'all 0.3s', ":hover": { boxShadow: '0px 0px 20px #bbb' } }}>
						<Image src={art} alt='art' />
						<Typography variant='h5' py={2}>آنالیز داده ها</Typography>
						<Typography>یعنی شما یک فضایی را برای مدت یک سال یا حتی چند ماه اجاره می‌کنید و سایت خود را روی آن برپا می‌کنید.</Typography>
					</Box>
				</Grid>
			</Grid>
		</Container>
	</section >
}

export default SecondPrices