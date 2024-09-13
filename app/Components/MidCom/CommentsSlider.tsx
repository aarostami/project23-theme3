import Grid from '@mui/material/Unstable_Grid2';
import Heading from '../Heading'
import { Container, Box } from '@mui/system'
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import comment1 from '../../images/comments/testimonial1.png'
import comment2 from '../../images/comments/testimonial2.png'
import comment3 from '../../images/comments/testimonial3.png'

const CommentsSlider = () => {

	return <section className='commentsSlider' style={{ padding: '2rem 0', backgroundColor: '#ddd' }}>
		<Heading {...{ text: 'نظر مشتریان راضی ما' }} />
		<Container>
			<article>
				<Swiper spaceBetween={15} slidesPerView={3} loop={true} navigation={true} enabled freeMode={true} initialSlide={1} pagination={{clickable: true}} modules={[Navigation, Pagination]}>
					<SwiperSlide>
						<Box>
							<Grid container>
								<Grid md={3}>
									<Image src={comment1} alt='comment1' />
								</Grid>
								<Grid md={9}>
									<Typography>نرم‌افزارهای مورد نیاز برای مدیریت بخشهای مختلف سایت و پست الکترونیک و… را در اختیار صاحبان وب سایتها قرار دهد.نرم‌افزارهای مورد نیاز برای مدیریت بخشهای مختلف سایت و پست الکترونیک </Typography>
									<Typography>محمد امینی</Typography>
									<Typography>سئو و مدیریت محتوا</Typography>
								</Grid>
							</Grid>
						</Box>
					</SwiperSlide>
					<SwiperSlide>
						<Box>
							<Grid container>
								<Grid md={3}>
									<Image src={comment2} alt='comment2' />
								</Grid>
								<Grid md={9}>
									<Typography>هر شخصی که نرم‌افزارهای لازم و دسترسی به این فایلها را داشته باشد امکان بازدید از این سایت را دارد. حال برای اینکه همه مردم امکان دسترسی به فایلها را داشته باشند نیاز است</Typography>
									<Typography>علی احمدی</Typography>
									<Typography>بنیان گزار کسب و کار</Typography>
								</Grid>
							</Grid>
						</Box>
					</SwiperSlide>
					<SwiperSlide>
						<Box>
							<Grid container>
								<Grid md={3}>
									<Image src={comment3} alt='comment3' />
								</Grid>
								<Grid md={9}>
									<Typography>در صورتی که حجم قابل توجهی از بازدیدکننده به سایت مراجعه کنند امکان پاسخگویی به همه آن‌ها را داشته باشد. بنابراین نیاز است تا یک کامپیوتر قدرتمند از لحاظ مشخصات قطعات داخلی باشد</Typography>
									<Typography>جواد عزتی</Typography>
									<Typography>برناه نویس</Typography>
								</Grid>
							</Grid>
						</Box>
					</SwiperSlide>
				</Swiper>
			</article>
		</Container>
	</section>
}
export default CommentsSlider