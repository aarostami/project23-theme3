'use client'
import { Container } from "@mui/system";
import Image from "next/image";
import footlogo from './images/logo.PNG'
import Link from 'next/link'
import Button from "@mui/material/Button";
import style from './middle.module.css'
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Grid from "@mui/system/Unstable_Grid";
import Logo from '../images/logo.png'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

export default function Footer() {

	return (
		<footer style={{ borderTop: '1px solid #999', paddingBottom: '1rem', backgroundColor: '#160d49' }}>
			<section style={{ padding: '5rem 0' }}>
				<Container maxWidth={'sm'}>
					<Grid container flexWrap={'wrap'} rowGap={5}>
						<Grid sm={6} md={3}>
							<article style={{display: 'flex', flexDirection: 'column', rowGap: '0.5rem'}}>
								<Typography variant="h5" color={'white'} fontWeight={'bold'} mb={'1rem'}>درباره ما</Typography>
								<Typography color='#999'>از فضای میزبانی با نام هاست هم نام برده می‌شود که در اصل اگر Host را به فارسی برگردانی کنیم، همان معنی و مفهوم فضای میزبانی را می‌دهد.</Typography>
								<Image src={Logo}
									alt="logo" style={{display: 'block'}} />
							</article>
						</Grid>
						<Grid sm={6} md={3}>
							<article style={{display: 'flex', flexDirection: 'column', rowGap: '0.5rem'}}>
								<Typography variant="h5" color={'white'} fontWeight={'bold'} mb={'1rem'}>اطلاعات تماس</Typography>
								<Typography color='#999'>آدرس : ایران | شیراز</Typography>
								<Typography color='#999' sx={{':hover': {color: 'white'}}}>تلفن : 09032309534</Typography>
								<Typography color='#999' sx={{':hover': {color: 'white'}}}>ایمیل : info@webrubik.com</Typography>
							</article>
						</Grid>
						<Grid sm={6} md={3}>
							<article style={{display: 'flex', flexDirection: 'column', rowGap: '0.5rem'}}>
								<Typography variant="h5" color={'white'} fontWeight={'bold'} mb={'1rem'}>لینک های مهم</Typography>
								<Typography color='#999' sx={{':hover': {color: 'white'}}}>قوانین و مقررات</Typography>
								<Typography color='#999' sx={{':hover': {color: 'white'}}}>سوالات متداول</Typography>
								<Typography color='#999' sx={{':hover': {color: 'white'}}}>حساب کاربری</Typography>
							</article>
						</Grid>
						<Grid sm={6} md={3}>
							<article style={{display: 'flex', flexDirection: 'column', rowGap: '0.5rem'}}>
								<Typography variant="h5" color={'white'} fontWeight={'bold'} mb={'1rem'}>خبرنامه</Typography>
								<Typography color={'#999'}>با عضویت در خبرنامه از تمامی خبرهای جدید و جدیدترین مطالب سایت باخبر شوید</Typography>
								<Input placeholder="ایمیل شما" sx={{bgcolor: 'white', p: '3px 8px'}} />
								<Button></Button>
							</article>
						</Grid>
					</Grid>
				</Container>
			</section>
			<Container>
				<hr color="#444" />
			</Container>
			<section style={{ padding: '2rem 0' }}>
				<Container>
					<Grid container>
						<Grid md={6}>
							<article>
								<Typography color={'#999'}>CopyRight ©2024 All Rights reserved | This template is made with  by Colorlib</Typography>
								<Typography color={'#999'}>فارسی و راست چین شده با  توسط Webrubik.com</Typography>
							</article>
						</Grid>
						<Grid md={6}>
							<article>
								<List>
									<ListItem><a href=""></a></ListItem>
									<ListItem><a href=""></a></ListItem>
									<ListItem><a href=""></a></ListItem>
									<ListItem><a href=""></a></ListItem>
								</List>
							</article>
						</Grid>
					</Grid>
				</Container>
			</section>
		</footer>
	);
}