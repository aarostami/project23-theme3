'use client'
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Cardheader from '../../Components/Panel/Cardheader'

const Buttons = () => {


	return <>
		<Card>
			<Cardheader title='نمونه اول' />
			<Button variant="contained" color="error">دکمه 1</Button>
			<Button variant="contained" color="info">دکمه 2</Button>
			<Button variant="contained" color="primary">دکمه 3</Button>
			<Button variant="contained" color="secondary">دکمه 4</Button>
			<Button variant="contained" color="warning">دکمه 5</Button>
		</Card>
	</>
}

export default Buttons