import { unstable_styleFunctionSx, SxProps, bgcolor, styled, ThemeProvider, style } from '@mui/system'
import Typography from '@mui/material/Typography';

const ServiceBoxCom = () => {
	const ServiceBox = styled('article')({
		backgroundColor: '#eee',
		padding: '2.5rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		height: '17rem',
		rowGap: '0.7rem'
	})

	return <ServiceBox className='ServiceBox'>
		{/* <Image src={unlock} alt='unlock' /> */}
		<Typography variant='h6'>سرور امن</Typography>
		<Typography>برای برپاسازی یک سایت، اول از همه نیاز به یک مکان روی اینترنت داریم که بتوانیم فایل‌های سایت را روی آن بریزیم</Typography>
	</ServiceBox>


}

export default ServiceBoxCom