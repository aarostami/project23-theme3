'use client'
import { useState, useEffect } from "react";
import { Container, Stack } from "@mui/system";
import Grid from '@mui/material/Unstable_Grid2'
import { Box, LinearProgress,Input, CardContent, Card, Typography, Chip, InputAdornment, Badge, styled } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
// import Chart from 'chart.js/auto'
import CircularProgress from "@mui/material/CircularProgress";	//rahat taresh: https://mui.com/x/react-charts/pie-demo/
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import MovingIcon from '@mui/icons-material/Moving'
import Search from '@mui/icons-material/Search'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Cardheader from "./Cardheader";
import dynamic from "next/dynamic";
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { getRelativePosition } from 'chart.js/helpers'
import { Doughnut } from "react-chartjs-2";

/* const FirstChart = dynamic(
	() => import 
) */

const FirstRowStatis = () => {
	/* const chart = new Chart(, {
		type: 'line',
		data: [{value: 300}],
		options: {

		}
	}) */
	Chart.register(ArcElement)
	const [show, setShow] = useState(false)
	const [anchor, setAnchor] = useState<null | HTMLElement>(null)

	const StyledBadge = styled(Badge)(({ theme }) => ({
		'& .MuiBadge-badge': {
			backgroundColor: 'red',
			color: 'red',
			boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
			'&::after': {
				position: 'absolute',
				top: '-1px',
				left: '-1px',
				width: '100%',
				height: '100%',
				borderRadius: '50%',
				animation: 'ripple 1.2s infinite ease-in-out',
				border: '1px solid currentColor',
				content: '""',
			},
		},
		'@keyframes ripple': {
			'0%': {
				transform: 'scale(.8)',
				opacity: 1,
			},
			'100%': {
				transform: 'scale(2.4)',
				opacity: 0,
			},
		},
	}));

	return <><Grid container py={2}>
		<Grid md={6}>
			<menu></menu>
			<Typography variant="h5" fontWeight={'bold'}>داشبورد</Typography>
		</Grid>
		<Grid md={6} container justifyContent={'flex-end'}>
			<span></span>
			<div>
				<StyledBadge variant="dot">
					<NotificationsNoneIcon />
				</StyledBadge>
				<Input type="text"
					endAdornment={<InputAdornment position="end"><Search fontSize='small' /></InputAdornment>}
					placeholder="به دنبال چه میگردی؟؟؟"
					sx={{
						bgcolor: '#e3e7eb',
						borderRadius: '20px',
						':before': { borderBottom: 'none' },
						':hover': {
							':before': { borderBottom: 'none !important' }
						},
						':after': { borderBottom: 'none' }, px: "10px"
					}
					} />
			</div>
		</Grid>
	</Grid>
		<Grid container columnGap={2} flexWrap={"nowrap"}>
			<Grid md={3}>
				<Card sx={{ bgcolor: 'white', minWidth: '275' }}>
					<Cardheader title="درآمد کل" />
					<CardContent sx={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
						{/* <ResponsiveContainer style={{ display: 'flex', justifyContent: 'space-between' }}> */}
						{/* </ResponsiveContainer> */}
						{/* <PieChart width={150} height={130}>
							<Pie data={[{ value: 130 }]}
							startAngle={60}
								endAngle={420}
								fill="#eb3528"
								innerRadius={60}
								paddingAngle={0}
								dataKey="value"> */}
						{/* <Cell fill="#eb3528" /> */}
						{/* <Cell key='cell-2' fill="#f0715b" /> */}
						{/* </Pie>
						</PieChart> */}
						{/* <Box sx={{height: '200px !important'}}> */}
						{/* <div className="chart-container" style={{ position: 'relative', width: '10rem', height: '10rem' }}>
							<Doughnut id="chart"
								data={{ datasets: [{ data: [160, 200], backgroundColor: ['rgb(252, 3, 57)', '#f55b47'], borderWidth: 0, hoverBorderColor: 'none', hoverBackgroundColor: ['rgb(252, 3, 57)', '#f55b47'] }] }}
								options={{ layout: { padding: 0 }, cutout: 75, rotation: 30, responsive: true, maintainAspectRatio: false }} /> */}
						{/*maintainAspectRatio: false, aspect-ratio: 1 */}
						{/* </div> */}
						{/* </Box> */}
						<Box position={'relative'}>
							<CircularProgress variant="determinate" value={100} size={80} thickness={4} sx={{ color: '#f9b9b9' }} />
							<CircularProgress variant="determinate" value={60} size={80} thickness={4} sx={{ color: '#f05050', position: 'absolute', right: 0 }} />
						</Box>
						<p style={{ position: 'absolute', top: '50%', left: '80%', translate: '-45% -50%' }}>58</p>
						<Stack>
							<Typography variant="h5">256</Typography>
							<Typography>درآمد روزانه</Typography>
						</Stack>
					</CardContent>
				</Card>
			</Grid>
			<Grid md={3}>
				<Card sx={{ bgcolor: "white", minWidth: '275' }}>
					<Cardheader title="آنالیز فروش" />
					<CardContent>
						<Grid container justifyContent={'space-between'}>
							<Chip dir="ltr" icon={<MovingIcon sx={{ color: 'white !important' }} />} label='32%' size="small" sx={{ bgcolor: '#10c469', color: 'white' }} />
							<Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
								<Stack>
									<Typography variant="h5">8451</Typography>
									<Typography>درآمد امروز</Typography>
								</Stack>
							</Box>
						</Grid>
						<LinearProgress variant="determinate" value={75} sx={{ bgcolor: '#cff3e1', '& span': { bgcolor: '#10c469' }, width: '100%', rotate: '180deg' }} />
					</CardContent>
				</Card>
			</Grid>
			<Grid md={3}>
				<Card sx={{ bgcolor: "white", minWidth: '275' }}>
					<Cardheader title="آمار" />
					<CardContent sx={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
						{/* <ResponsiveContainer style={{ display: 'flex', justifyContent: 'space-between' }}>
							<PieChart width={150} height={130}>
								<Pie data={[{ value2: 130 }, { value2: 100 }]}
									startAngle={60}
									endAngle={420}
									cx={100}
									cy={100}
									fill="#eb3528"
									innerRadius={60}
									paddingAngle={0}
									dataKey='value2'> */}
						{/* #f0715b */}
						{/* <Cell fill="#f0aa5b" />
									<Cell fill="blue" />
								</Pie>
							</PieChart>
						</ResponsiveContainer>
						<p style={{ position: 'absolute', top: '43%', left: '60%', translate: '-45% -50%' }}>80</p> */}
						{/* <div className="chart-container" style={{ position: 'relative', width: '10rem', height: '10rem' }}>
							<Doughnut data={{ datasets: [{ data: [160, 200], backgroundColor: ['rgb(252, 3, 57)', '#f55b47'], borderWidth: 0, hoverBorderColor: 'none', hoverBackgroundColor: ['rgb(252, 3, 57)', '#f55b47'] }] }}
								options={{ layout: { padding: 0 }, cutout: 75, rotation: 30, responsive: true, maintainAspectRatio: false }} /> */}
						{/*maintainAspectRatio: false */}
						{/* </div> */}
						<Box position={'relative'}>
							<CircularProgress variant="determinate" value={100} size={80} thickness={4} sx={{ color: '#ffe6ba' }} />
							<CircularProgress variant="determinate" value={35} size={80} thickness={4} sx={{ color: '#ffbd4a', position: 'absolute', right: 0 }} />
						</Box>
						<p style={{ position: 'absolute', top: '30%', left: '80%', translate: '-45% -50%' }}>58</p>
						<Stack>
							<Typography variant="h5">4569</Typography>
							<Typography>آمار امروز</Typography>
						</Stack>
					</CardContent>
				</Card>
			</Grid>
			<Grid md={3}>
				<Card sx={{ bgcolor: "white", minWidth: '275' }}>
					<Cardheader title="فروش روزانه" />
					<CardContent>
						<Grid container justifyContent={'space-between'}>
							<Chip dir="ltr" icon={<MovingIcon sx={{ color: 'white !important' }} />} label='32%' size="small" sx={{ bgcolor: '#ff8acc', color: 'white' }} />
							<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
								<Stack>
									<Typography variant="h5">158</Typography>
									<Typography>فروش امروز</Typography>
								</Stack>
							</Box>
						</Grid>
						<LinearProgress variant="determinate" value={45} sx={{ bgcolor: '#ffe8f5', '& span': { bgcolor: '#ff8acc' }, width: '100%', rotate: '180deg' }} />
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	</>
}

export default FirstRowStatis