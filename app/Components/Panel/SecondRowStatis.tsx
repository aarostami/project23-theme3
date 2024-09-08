import { useState, useEffect } from "react";
import Grid from '@mui/material/Unstable_Grid2'
import { Container } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Cardheader from "./Cardheader";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, CategoryScale, BarElement, Title, LinearScale, PointElement, LineElement } from 'chart.js'


const SecondRowStatis = () => {
	const [el, setEl] = useState()
	Chart.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, PointElement, LineElement)
	// Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
	// console.log(Chart.getChart('doughnut'))
	// console.log(toString())
	// setEl()

	return <Grid container columnGap={2} flexWrap={"nowrap"} mt={3}>
		<Grid md={4}>
			<Card sx={{ bgcolor: 'white', minWidth: '275' }}>
				<Cardheader title="فروش روزانه" />
				<CardContent sx={{ position: 'relative' }}>
					<Doughnut id="doughnut" key='doughnut' data={{
						labels: ['سری الف', 'سری ب'],
						datasets: [{
							data: [30, 12, 20],
							backgroundColor: ['#5b69bc', '#ff8acc', '#35b8e0'],
							hoverBackgroundColor: ['#5b69bc', '#ff8acc', '#35b8e0'],
							rotation: -50,
						}]
					}} options={{
						plugins: {
							tooltip: { enabled: false },
							legend:
							{
								rtl: true, position: 'bottom', labels:
									{ padding: 30, pointStyle: 'circle', usePointStyle: true }
							}
						},
						cutout: '110',
						elements: { arc: { circular: true } },
						maintainAspectRatio: false,
					}} style={{ height: '18rem' }} />
					<Typography position={'absolute'} top={'40%'} left={'45%'} variant="h4">sss</Typography>
				</CardContent>
			</Card>
		</Grid>
		<Grid md={4}>
			<Card sx={{ bgcolor: 'white', minWidth: '275' }}>
				<Cardheader title="آمارها" />
				<CardContent>
					<Bar data={{
						labels: ['', '1396', '', '1388', '', '1391'],	//inaro nazarim kar nemikone
						datasets: [{
							data: [75, 42, 75, 38, 19, 93],
							backgroundColor: ['#188ae2', '#188ae2', '#188ae2'],
							barPercentage: 1,
							barThickness: 10,
							// minBarLength: 0,
							maxBarThickness: 50,
							// borderWidth: 0,

						}]
					}}
						options={{ responsive: true, maintainAspectRatio: false }} style={{ height: '18rem' }} />
					{/* <Bar data={{
						labels: ['all', 'ddd', 'aa'],
						datasets: [{ data: 500, backgroundColor: '#188ae2',barPercentage: 2, base: 0,barThickness: 5},
						{ data: 100, backgroundColor: '#188ae2' },
						{ data: 100, backgroundColor: '#188ae2' }]
					}} /> */}
				</CardContent>
			</Card>
		</Grid>
		<Grid md={4}>
			<Card sx={{ bgcolor: 'white', minWidth: '275' }}>
				<Cardheader title="مجموع درآمد" />
				<CardContent>
					<Line data={{
						labels: ['1390', '1391', '1392', '1393', '1394', '1395', '1396'],
						datasets: [
							{
								data: [50, 0, 80, 50, 10, 40, 50, 70],
								borderColor: ['#188ae2'],
								cubicInterpolationMode: 'monotone',
								pointStyle: false
							},
							{
								data: [75, 50, 30, 50, 75, 50, 75, 100],
								borderColor: ['#10c469'],
								cubicInterpolationMode: 'monotone',
								pointStyle: false,
							}
						]
					}} options={{borderColor: 'red', responsive: true, maintainAspectRatio: false }} style={{height: '18rem'}} />
				</CardContent>
			</Card>
		</Grid>
	</Grid>
}

export default SecondRowStatis