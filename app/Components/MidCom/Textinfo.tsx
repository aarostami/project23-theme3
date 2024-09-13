import { Container } from '@mui/system'
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import serverEmail from '../../images/006-server-3.png'

const Textinfo = () => {
	return <section className='textinfo'>
		<Container>
			<Grid container py={'2rem'} columnSpacing={3}>
				<Grid xs={12} md={5} container alignItems={'center'}>
					<article style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
						<Typography variant='h4' width={'50%'}>سرور
							اختصاصی و امن
							برای سایت شما</Typography>
						<Typography color={'#888'}>بسته به کیفیت و منابع سخت افزاری هاست، انتخاب‌های زیادی پیش رو دارید که می‌توانید بسته به نیاز خود یک انتخاب را داشته باشید. علاوه بر آن شرکت‌ها و ارائه کنندگان بسیاری هستند که هر کدام با شرایط خاص خود اقدام به خدمات هاستینگ می‌کنند.</Typography>
					</article>
				</Grid>
				<Grid xs={12} md={7}>
					<article>
						<Image src={serverEmail}
							alt='serveremail' />
					</article>
				</Grid>
			</Grid>
		</Container>
	</section>
}

export default Textinfo