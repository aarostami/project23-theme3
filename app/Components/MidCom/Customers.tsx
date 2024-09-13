import { Container } from '@mui/system'
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import customer1 from '../../images/customer/brand-logo1.png'
import customer2 from '../../images/customer/brand-logo2.png'
import customer3 from '../../images/customer/brand-logo3.png'
import customer4 from '../../images/customer/brand-logo4.png'
import customer5 from '../../images/customer/brand-logo5.png'

const Customers = () => {
	return <section className='customers'>
		<article>
			<Typography variant='h4' textAlign={'center'}>ما بیش از 12000+ مشتری راضی داریم</Typography>
			<Container sx={{pt: '5rem'}}>
				<Swiper spaceBetween={10} slidesPerView={5}>
					<SwiperSlide>
						<Image src={customer1} alt='customer1' />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={customer2} alt='customer2' />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={customer3} alt='customer3' />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={customer4} alt='customer4' />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={customer5} alt='customer5' />
					</SwiperSlide>
				</Swiper>
			</Container>
		</article>
	</section>
}
export default Customers