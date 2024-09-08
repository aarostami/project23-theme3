import Typography from '@mui/material/Typography';

const Heading = (props: any) => {
	return <Typography variant='h4' color='#160d49' textAlign={'center'} py={'7rem'} {...props}>{props.text}</Typography>
}

export default Heading