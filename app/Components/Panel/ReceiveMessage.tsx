import { Divider, Typography, Card, CardContent, Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Grid from '@mui/system/Unstable_Grid'
import Image from "next/image";
import avatar1 from '../../images/panel/avatar-1.jpg'
import avatar2 from '../../images/panel/avatar-2.jpg'
import avatar3 from '../../images/panel/avatar-3.jpg'
import avatar4 from '../../images/panel/avatar-4.jpg'
import avatar5 from '../../images/panel/avatar-5.jpg'
import Cardheader from "./Cardheader";

const ReceiveMessage = () => {
	return <Card sx={{ bgcolor: 'white', minWidth: '275' }}>
		<Cardheader title="جعبه دریافتی" />
		<CardContent>
			<List>
				<Grid container>
					<Grid md={9}>
						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<Image src={avatar1} alt="ava1" style={{ width: '100%', height: '100%', borderRadius: '50px' }} />
								</Avatar>
							</ListItemAvatar>
							<ListItemText sx={{ textAlign: 'start' }} primary="کاربر اول" secondary="سلام دوست من این یک متن تستی است" />
						</ListItem>
					</Grid>
					<Grid md={3} textAlign={'center'}>
						<Typography variant="subtitle1">13:40 ب:ظ</Typography>
					</Grid>
				</Grid>
				<Divider />
				<Grid container>
					<Grid md={9}>
						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<Image src={avatar2} alt="ava1" style={{ width: '100%', height: '100%', borderRadius: '50px' }} />
								</Avatar>
							</ListItemAvatar>
							<ListItemText sx={{ textAlign: 'start' }} primary="کاربر اول" secondary="سلام دوست من این یک متن تستی است" />
						</ListItem>
					</Grid>
					<Grid md={3} textAlign={'center'}>
						<Typography variant="subtitle1">13:40 ب:ظ</Typography>
					</Grid>
				</Grid>
				<Divider />
				<Grid container>
					<Grid md={9}>
						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<Image src={avatar3} alt="ava1" style={{ width: '100%', height: '100%', borderRadius: '50px' }} />
								</Avatar>
							</ListItemAvatar>
							<ListItemText sx={{ textAlign: 'start' }} primary="کاربر اول" secondary="سلام دوست من این یک متن تستی است" />
						</ListItem>
					</Grid>
					<Grid md={3} textAlign={'center'}>
						<Typography variant="subtitle1">13:40 ب:ظ</Typography>
					</Grid>
				</Grid>
				<Divider />
				<Grid container>
					<Grid md={9}>
						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<Image src={avatar4} alt="ava1" style={{ width: '100%', height: '100%', borderRadius: '50px' }} />
								</Avatar>
							</ListItemAvatar>
							<ListItemText sx={{ textAlign: 'start' }} primary="کاربر اول" secondary="سلام دوست من این یک متن تستی است" />
						</ListItem>
					</Grid>
					<Grid md={3} textAlign={'center'}>
						<Typography variant="subtitle1">13:40 ب:ظ</Typography>
					</Grid>
				</Grid>
				<Divider />
				<Grid container>
					<Grid md={9}>
						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<Image src={avatar5} alt="ava1" style={{ width: '100%', height: '100%', borderRadius: '50px' }} />
								</Avatar>
							</ListItemAvatar>
							<ListItemText sx={{ textAlign: 'start' }} primary="کاربر اول" secondary="سلام دوست من این یک متن تستی است" />
						</ListItem>
					</Grid>
					<Grid md={3} textAlign={'center'}>
						<Typography variant="subtitle1">13:40 ب:ظ</Typography>
					</Grid>
				</Grid>
				<Divider />
			</List>
		</CardContent>
	</Card>
}

export default ReceiveMessage