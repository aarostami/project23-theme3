import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Card, CardContent } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import avatar1 from '../../images/panel/avatar-1.jpg'
import avatar2 from '../../images/panel/avatar-2.jpg'
import avatar3 from '../../images/panel/avatar-3.jpg'
import avatar10 from '../../images/panel/avatar-10.jpg'

const Empolyees = () => {
	return <Grid container columnGap={2} flexWrap={"nowrap"} mt={3}>
		<Grid md={3}>
			<Card sx={{ bgcolor: 'white', minWidth: '275', display: 'flex', padding: '1rem', justifyContent: 'center', alignItems: 'center' }}>
				<Image src={avatar1} alt="ava1" width={70} style={{ borderRadius: '50px' }} />
				<CardContent sx={{ width: '70%', py: '0 !important' }}>
					<Typography variant="body1" fontWeight='bold'>علی یدالهی</Typography>
					<Typography variant="subtitle1">ali.yadollahi7074@gmail.com</Typography>
					<Typography variant="body1" color='orange'>مدیر کل</Typography>
				</CardContent>
			</Card>
		</Grid>
		<Grid md={3}>
			<Card sx={{ bgcolor: 'white', minWidth: '275', display: 'flex', padding: '1rem', justifyContent: 'center', alignItems: 'center' }}>
				<Image src={avatar2} alt="ava1" width={70} style={{ borderRadius: '50px' }} />
				<CardContent sx={{ width: '70%', py: '0 !important' }}>
					<Typography variant="body1" fontWeight='bold'>فرهاد پور هاشم</Typography>
					<Typography variant="subtitle1">faarhad@email.com</Typography>
					<Typography variant="body1" color='skyblue'>مدیر داخلی</Typography>
				</CardContent>
			</Card>
		</Grid>
		<Grid md={3}>
			<Card sx={{ bgcolor: 'white', minWidth: '275', display: 'flex', padding: '1rem', justifyContent: 'center', alignItems: 'center' }}>
				<Image src={avatar3} alt="ava1" width={70} style={{ borderRadius: '50px' }} />
				<CardContent sx={{ width: '70%', py: '0 !important' }}>
					<Typography variant="body1" fontWeight='bold'>خانم حسن زاده</Typography>
					<Typography variant="subtitle1">m.hasanzadeh@email.com</Typography>
					<Typography variant="body1" color='green'>مدیر مالی</Typography>
				</CardContent>
			</Card>
		</Grid>
		<Grid md={3}>
			<Card sx={{ bgcolor: 'white', minWidth: '275', display: 'flex', padding: '1rem', justifyContent: 'center', alignItems: 'center' }}>
				<Image src={avatar10} alt="ava1" width={70} style={{ borderRadius: '50px' }} />
				<CardContent sx={{ width: '70%', py: '0 !important' }}>
					<Typography variant="body1" fontWeight='bold'>آقای زارع</Typography>
					<Typography variant="subtitle1">zarepor@email.com</Typography>
					<Typography variant="body1" color='skyblue'>بازاریاب</Typography>
				</CardContent>
			</Card>
		</Grid>
	</Grid>
}

export default Empolyees