import { Card, CardContent, TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material'
import Cardheader from "./Cardheader";

const LastProjects = () => {

	return <Card sx={{ bgcolor: 'white', minWidth: '275' }}>
		<Cardheader title="آخرین پروژه های اجرا شده" />
		<CardContent>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell sx={{ fontWeight: 'bold' }}>#</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>نام پروژه</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>تاریخ شروع</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>سررسید</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>وضعیت</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>نوع</TableCell>
						</TableRow>
					</TableHead>
					<TableBody sx={{ 'td': { border: 0 } }}>
						<TableRow>
							<TableCell>1</TableCell>
							<TableCell>آقای ادمین</TableCell>
							<TableCell>01/01/2016</TableCell>
							<TableCell>26/04/2016</TableCell>
							<TableCell sx={{ borderRadius: '3px', display: 'inline-block', bgcolor: '#ff5b5b', color: 'white', p: '3px', m: '13% 10%' }} align="center">به اتمام رسید</TableCell>
							<TableCell>قالب HTML</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>2</TableCell>
							<TableCell>املاک نیاوران</TableCell>
							<TableCell>01/01/2016</TableCell>
							<TableCell>26/04/2016</TableCell>
							<TableCell sx={{ borderRadius: '3px', display: 'inline-block', bgcolor: '#10c469', color: 'white', p: '3px', m: '13% 8%' }} align="center">در حال برسی</TableCell>
							<TableCell>قالب وردپرس</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>3</TableCell>
							<TableCell>اپ مدیریت</TableCell>
							<TableCell>01/05/2016</TableCell>
							<TableCell>10/05/2016</TableCell>
							<TableCell sx={{ borderRadius: '3px', display: 'inline-block', bgcolor: '#ff8acc', color: 'white', p: '3px', m: '13% 10%' }} align="center">اجرا شده</TableCell>
							<TableCell>اندروید</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>4</TableCell>
							<TableCell>اپ مدیریت</TableCell>
							<TableCell>01/01/2016</TableCell>
							<TableCell>31/05/2016</TableCell>
							<TableCell sx={{ borderRadius: '3px', display: 'inline-block', bgcolor: '#5b69bc', color: 'white', p: '3px', m: '13% 10%' }} align="center">تست نهایی</TableCell>
							<TableCell>آی او اس</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>5</TableCell>
							<TableCell>چت روم ایرانی</TableCell>
							<TableCell>01/01/2016</TableCell>
							<TableCell>31/05/2016</TableCell>
							<TableCell sx={{ borderRadius: '3px', display: 'inline-block', bgcolor: '#f9c851', color: 'white', p: '3px', m: '13% 10%' }} align="center">به زودی</TableCell>
							<TableCell>لاراول</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>6</TableCell>
							<TableCell>حساب یار</TableCell>
							<TableCell>01/01/2016</TableCell>
							<TableCell>31/05/2016</TableCell>
							<TableCell sx={{ borderRadius: '3px', display: 'inline-block', bgcolor: '#188ae2', color: 'white', p: '3px', m: '13% 10%' }} align="center">به زودی</TableCell>
							<TableCell>برنامه ویندوزی</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</CardContent>
	</Card>
}

export default LastProjects