'use client'
// 'use server'
import '../header.css'
import { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
// import Grid from '@mui/system/Unstable_Grid/Grid'
import { Button, Box, Container, Typography, Drawer, List, ListItem, Divider, styled } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../images/logo.png'
import hero from '../images/hero-banner-bg.png'
import createTheme from '@mui/system/createTheme'

export default function Header() {
	// const Button = createTheme()
	/* const Root = styled('div')(({theme}) => ({
		[theme.breakpoints.down('md')]: {
			
		}
	})) */
	const [drawer, setDrawer] = useState(false)
	console.log(drawer)
	// debugger;

	return (<header>
		<section className='Container'>
			{/* <Menu open={true}> */}
			{/* <MenuItem>خانه</MenuItem> */}
			{/* <MenuItem><a href="" className="">ویژگی ها</a></MenuItem>
					<MenuItem><a href="" className="">سرویس ها</a></MenuItem>
					<MenuItem><a href="" className="">قیمت</a></MenuItem>
					<MenuItem><a href="" className="">صفحات</a></MenuItem>					
				<MenuItem><a href="" className="">تماس با ما</a></MenuItem>	 */}
			{/* </Menu> */}
			<section>
				<Container>
					{/* <Image src={hero}
							alt='logo' style={{objectFit: 'cover', opacity: '0.3'}} /> */}
					<nav>
						<Grid container justifyContent='space-between' alignItems={'center'}>
							<Grid md={3} lg={3} container>
								<Image src={logo}
									alt='logo' />
							</Grid>
							<Button onClick={() => setDrawer(true)} sx={{ display: { sm: 'none' } }}>Click</Button>
							<Grid md={6} lg={6} sx={{ marginTop: '30px' }}>
								{(drawer == true) ? <Drawer anchor='top' open={drawer}
									onClose={() => setDrawer(false)} sx={{ '& .MuiModal-backdrop': { background: 'none' }, '& .MuiDrawer-paper': { pt: '7%', bgcolor: '#7676ff' }, }}>
									<Container>
										<Image src={logo}
											alt='logo' />
										<List sx={{ color: 'white', listStyleType: 'none', display: 'flex', rowGap: '0.5rem', flexDirection: 'column' }} className='centerList'>
											<ListItem>
												<Link href='/'>خانه</Link>
											</ListItem>
											<Divider />
											<ListItem>
												<Link href='/pages/options'>ویژگی ها</Link>
											</ListItem>
											<Divider />
											<ListItem>
												<Link href='/pages/services'>سرویس ها</Link>
											</ListItem>
											<Divider />
											<ListItem>
												<Link href='/pages/price'>قیمت ها</Link>
											</ListItem>
											<Divider />
											<ListItem>
												<Link href='/pages/blog'>صفحات</Link>
											</ListItem>
											<Divider />
											<ListItem>
												<Link href='/pages/contact'>تماس با ما</Link>
											</ListItem>
										</List>
										<ul className='leftList' style={{ listStyleType: 'none', display: 'flex', columnGap: 10, marginTop: '5%' }}>
											<li style={{ display: 'flex', alignItems: 'center' }}><a href="" style={{ color: 'white', fontSize: '1.1rem' }}>چت آنلاین</a></li>
											<li><Button variant='outlined' className="button" sx={{ color: 'white', borderColor: 'white', borderRadius: '20px', px: 5, fontSize: '1.1rem' }}>ورود</Button></li>
										</ul>
									</Container>
								</Drawer>
									: <List sx={{ px: '0', color: 'white', listStyleType: 'none', display: 'flex', rowGap: '0.5rem' }} className='centerList'>
										<ListItem sx={{ px: '0' }}>
											<Link href='/' style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>خانه</Link>
										</ListItem>
										<Divider />
										<ListItem sx={{ px: '0' }}>
											<Link href='/pages/options' style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>ویژگی ها</Link>
										</ListItem>
										<Divider />
										<ListItem sx={{ px: '0' }}>
											<Link href='/pages/services' style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>سرویس ها</Link>
										</ListItem>
										<Divider />
										<ListItem sx={{ px: '0' }}>
											<Link href='/pages/price' style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>قیمت ها</Link>
										</ListItem>
										<Divider />
										<ListItem sx={{ px: '0' }}>
											<Link href='/pages/blog' style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>صفحات</Link>
										</ListItem>
										<Divider />
										<ListItem sx={{ px: '0' }}>
											<Link href='/pages/contact' style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>تماس با ما</Link>
										</ListItem>
									</List>
								}
							</Grid>
							<Grid md={3} lg={3} container justifyContent={'end'}>
								<ul className='leftList' style={{ display: 'flex', columnGap: 10, }}>
									<li style={{ display: 'flex', alignItems: 'center' }}><a href="" style={{ fontSize: '1.1rem' }}>چت آنلاین</a></li>
									<li><Button variant='outlined' className="button" color='inherit' sx={{ borderRadius: '20px', px: 5, fontSize: '1.1rem' }}>ورود</Button></li>
								</ul>
							</Grid>
						</Grid>
					</nav>
				</Container>
				<hr style={{ width: '100%', height: '1px', border: '0', backgroundColor: '#dddddd75' }} />
				<article style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
					<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', rowGap: 5 }}>
						<Typography variant='body1'>یک شرکت با فضایی عالی</Typography>
						<Typography className='headTitle' variant='h2' textAlign={'center'}>فضای میزبانی قدرتمند</Typography>
						<Typography variant='body1' width={'70%'} sx={{ textAlign: 'center', fontSize: {} }}>برای برپاسازی یک سایت، اول از همه نیاز به یک مکان روی اینترنت داریم که بتوانیم فایل‌های سایت را روی آن بریزیم.</Typography>
						<Link href={'#search'} className='button' style={{ borderRadius: '20px', padding: '0.6rem 3rem', border: '1px solid white', fontSize: '1.1rem', }}>شروع</Link>
					</Box>
				</article>
			</section>
		</section>
		{/* <Menu open>
				<MenuItem><a href="" className=""></a></MenuItem>
				<Button></Button>
			</Menu> */}
	</header>
	)
}
