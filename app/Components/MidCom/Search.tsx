import Grid from '@mui/material/Unstable_Grid2';
import Heading from '../Heading'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button';
import { Container, borderBottom } from '@mui/system';
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { createTheme, ThemeProvider } from '@mui/system';

const Search = () => {
	

	return <section className='search' id='search' style={{ backgroundColor: '#eee', padding: '1rem auto' }}>
		<Container>
			<Grid container justifyContent={'center'} alignItems={'center'} columnSpacing={1} rowGap={2}>
				<Grid xs={12} md={2}>
					<Heading {...{ text: "نام دامین خود را جستجو کنید!", py: '0' }} />
				</Grid>
				<Grid xs={8} md={8} textAlign={'center'}>
					<Input sx={{
						width: '100%',
						mx: 'auto',
						border: '1px solid #aaa',
						p: '0.7rem',
						':before': { borderBottom: 'none' },
						':after': {borderBottom: 'none'},
						':hover': { ':before': { borderBottom: 'none !important' } }
					}} placeholder='نام دامنه را وارد کنید' />
				</Grid>
				<Grid xs={4} md={2}>
					<Button variant='contained' color='inherit' className='button' sx={{ background: 'linear-gradient(to right, rgb(109 41 197 / 85%), rgb(54 13 209 / 85%))', color: 'white', p: '0.7rem 3rem', fontSize: '1.1rem', boxShadow: '0px 0px 20px #aaa'}}>جستجو</Button>
				</Grid>
				<Grid xs={12} md={12}>
					{/* <div style={{margin: 'auto 0'}}>(60 تومان)</div> */}
					{/* <div style={{margin: 'auto 0'}}>(70 تومان)</div> */}
					{/* <div style={{margin: 'auto 0'}}>(100 تومان)</div> */}
					{/* <div style={{margin: 'auto 0'}}>(6 تومان)</div> */}
					<FormGroup sx={{ flexDirection: {'xs': 'column', 'sm': 'row'}, justifyContent: 'center', flexWrap: 'nowrap' }}>
						<FormControlLabel control={<Checkbox defaultChecked />} label='.com' />
						<FormControlLabel control={<Checkbox />} label='.net' />
						<FormControlLabel control={<Checkbox />} label='.org' />
						<FormControlLabel control={<Checkbox />} label='.ir' />
					</FormGroup>
				</Grid>
			</Grid>
		</Container>
	</section>
}

export default Search