'use client'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Common from '../common'
import { Box, Container } from '@mui/system'
import { Button, Divider, FormGroup, Grid, Input, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image'
import pic1 from '../../images/blog/m-blog-1.jpg'
import pic2 from '../../images/blog/m-blog-2.jpg'
import pic3 from '../../images/blog/m-blog-3.jpg'
import pic4 from '../../images/blog/m-blog-4.jpg'
import Link from 'next/link'
import post1 from '../../images/blog/lastpost/post1.jpg'
import post2 from '../../images/blog/lastpost/post2.jpg'
import post3 from '../../images/blog/lastpost/post3.jpg'

const blog = () => {
	
	return <>
		<Common />
		<Container>
			<section style={{ padding: '5rem 0' }}>
				<Grid container flexWrap={'nowrap'} columnGap={'2rem'}>
					<Grid md={8}>
						<main style={{ display: 'flex', flexDirection: 'column', rowGap: '3rem' }}>
							<Box bgcolor={'#eee'} pb={'2rem'}>
								<Image src={pic1}
									alt='pic' style={{ width: '100%' }} />
								<span></span>
								<Typography variant='h5'>دامنه و (هاست) فضای میزبانی چیست؟</Typography>
								<Typography variant='body1' py={'1rem'}>دامنه با نام دیگر  (Host) به یک وب سایت تحت فضای اینترنت گفته  که داده‌ها و کدهای وب‌ سایت بر روی آن قرار گرفته و امکاناتی همچون دسترسی به دیتابیس، اجرای کدها، ارسال و دریافت ایمیل و … را برای کاربران ایجاد .  یک کنترل پانل دارد که کاربر را قادر  تا فایل‎ها‎ی خود را در اینترنت قرار داده و فضای خود را توسط آن، مدیریت و بررسی نماید.  یا دامنه توسط شرکت‌های  بر روی سرورهایشان ایجاد شده و به مشتریان عرضه می‌شود که توانایی دریافت  و تصاویر را دارد و امکان دسترسی کاربران به اینترنت در هر لحظه از شبانه روز را فراهم .</Typography>
								<i></i>
								<Typography variant='body1'>وب, تکنولوژی</Typography>
								<Typography variant='body1'>3 نظر</Typography>
								<i></i>
							</Box>
							<Box bgcolor={'#eee'} pb={'2rem'}>
								<Image src={pic2} style={{ width: '100%' }}
									alt='pic' />
								<span></span>
								<Typography variant='h5'>پشتیبانی از زبان‌های برنامه نویسی از قبیل PHP, ASP، Perl، Python</Typography>
								<Typography variant='body1' py={'1rem'}>شاید تاکنون وب سایت‎ها‎یی را دیده باشید که در انتهای آدرس یا لینک آنها از com و .net و .ir و ... استفاده می‎شود. ممکن است با خود فکر کرده باشید که com با ir و یا net چه تفاوتی دارد؟ در پاسخ باید گفت هر یک از پسوندهای دامنه با یکدیگر متفاوت است و معنای هر یک اختصاصی است. دامنه‎ها‎ با توجه به سازمان یا شرکت مربوطه مشخص می‎شوند و از سوی دیگر برای ثبت آنها نیز باید به سازمان‎ها‎ی مجزایی مراجعه شود.</Typography>
								<i></i>
								<Typography variant='body1'>وب, تکنولوژی</Typography>
								<Typography variant='body1'>3 نظر</Typography>
								<i></i>
							</Box>
							<Box bgcolor={'#eee'} pb={'2rem'}>
								<Image src={pic3} style={{ width: '100%' }}
									alt='pic' />
								<span></span>
								<Typography variant='h5'>تفاوت میان دامنه‎ها‎</Typography>
								<Typography variant='body1' py={'1rem'}>شاید تاکنون وب سایت‎ها‎یی را دیده باشید که در انتهای آدرس یا لینک آنها از com و .net و .ir و ... استفاده می‎شود. ممکن است با خود فکر کرده باشید که com با ir و یا net چه تفاوتی دارد؟ در پاسخ باید گفت هر یک از پسوندهای دامنه با یکدیگر متفاوت است و معنای هر یک اختصاصی است. دامنه‎ها‎ با توجه به سازمان یا شرکت مربوطه مشخص می‎شوند و از سوی دیگر برای ثبت آنها نیز باید به سازمان‎ها‎ی مجزایی مراجعه شود.</Typography>
								<i></i>
								<Typography variant='body1'>وب, تکنولوژی</Typography>
								<Typography variant='body1'>3 نظر</Typography>
								<i></i>
							</Box>
							<Box bgcolor={'#eee'} pb={'2rem'}>
								<Image src={pic4} style={{ width: '100%' }}
									alt='pic' />
								<span></span>
								<Typography variant='h5'>برطرف کردن کمبود اسامی در دامنه‎ها</Typography>
								<Typography variant='body1' py={'1rem'}>دامنه‎ها‎ی ۳ حرفی جدید: این نوع دامنه‎ها‎ شامل Biz، Info، Pro، Aero، Coop ،Museum، Name و ... می‎باشد که برای برطرف کردن کمبود اسامی در دامنه‎ها‎ی دسته اول ایجاد شدند. دامنه Info نیز جهت ترغیب کاربران اینترنتی و صاحبان وب سایت‎ها‎ توسط بعضی از Serverهای ثبت دامنه ایجاد شده است که به صورت یک ساله ثبت می‎شود و مدیران وب سایت باید هر سال آن را تمدید می‏کنند. این دامنه‎ها‎ قیمت بالایی دارند.</Typography>
								<i></i>
								<Typography variant='body1'>وب, تکنولوژی</Typography>
								<Typography variant='body1'>3 نظر</Typography>
								<i></i>
							</Box>
						</main>
					</Grid>
					<Grid md={4}>
						<aside>
							<Grid container flexDirection={'column'} flexWrap={'nowrap'} rowGap={'2rem'}>
								<Grid md={12} bgcolor={'#eee'} p={'2rem'}>
									<FormGroup sx={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
										<Input type='text' placeholder='جستجو ...' />
										<Button variant='contained' color='inherit' className='button' sx={{ background: 'linear-gradient(to right, rgb(109 41 197 / 85%), rgb(54 13 209 / 85%))', color: 'white', fontSize: '1.1rem', boxShadow: '0px 0px 20px #aaa' }}>ارسال پیام</Button>
									</FormGroup>
								</Grid>
								<Grid md={12} bgcolor={'#eee'} p={'2rem'}>
									<List sx={{ display: 'flex', flexDirection: 'column', rowGap: '0.3rem' }}>
										<Typography variant='h5'>دسته بندی ها</Typography>
										<Divider />
										<ListItem>
											<Link href='#'>تکنولوژی(37)</Link>
										</ListItem>
										<Divider />
										<ListItem>
											<Link href='#'>برنامه نویسی(10)</Link>
										</ListItem>
										<Divider />
										<ListItem>
											<Link href='#'>طراحی گرافیک(03)</Link>
										</ListItem>
										<Divider />
										<ListItem>
											<Link href='#'>فضای میزبانی(11)</Link>
										</ListItem>
										<Divider />
										<ListItem>
											<Link href='#'>دامنه21</Link>
										</ListItem>
									</List>
								</Grid>
								<Grid md={12} bgcolor={'#eee'} p={'2rem'}>
									<List sx={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
										<Typography variant='h5'>آخرین پست ها</Typography>
										<Divider />
										<ListItem sx={{p: '0'}}>
											<Grid container columnGap={'1rem'} flexWrap={'nowrap'} alignItems={'center'}>
												<Grid md={3}>
													<Image src={post1} style={{width: '100%'}}
														alt='post1' />
												</Grid>
												<Grid md={9} textAlign={'start'}>
													<Link href='#'>فریم ورک FrameWork چیست ؟</Link>
													<Typography variant='subtitle1'>12 آذر 98</Typography>
												</Grid>
											</Grid>
										</ListItem>
										<ListItem sx={{p: '0'}}>
											<Grid container columnGap={'1rem'} flexWrap={'nowrap'} alignItems={'center'}>
												<Grid md={3}>
													<Image src={post2} style={{width: '100%'}}
														alt='post1' />
												</Grid>
												<Grid md={9} textAlign={'start'}>
													<Link href='#'>تایپوگرافی (Typography) در طراحی سایت</Link>
													<Typography variant='subtitle1'>2 ساعت قبل</Typography>
												</Grid>
											</Grid>
										</ListItem>
										<ListItem sx={{p: '0'}}>
											<Grid container columnGap={'1rem'} flexWrap={'nowrap'} alignItems={'center'}>
												<Grid md={3}>
													<Image src={post3} style={{width: '100%'}}
														alt='post1' />
												</Grid>
												<Grid md={9} textAlign={'start'}>
													<Link href='#'>تفاوت وب سایت و پورتال چیست ؟</Link>
													<Typography variant='subtitle1'>5 ساعت قبل</Typography>
												</Grid>
											</Grid>
										</ListItem>
									</List>
								</Grid>
							</Grid>
						</aside>
					</Grid>
				</Grid>
			</section>
		</Container>
	</>
}

export default blog