"use client"
import { useState} from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Grid from '@mui/material/Unstable_Grid2'
import FirstRowStatis from "../../Components/Panel/FirstRowStatis";
import SecondRowStatis from "../../Components/Panel/SecondRowStatis";
import Empolyees from "../../Components/Panel/Employees";
import ReceiveMessage from "../../Components/Panel/ReceiveMessage";
import LastProjects from "../../Components/Panel/LastProjects";
import { createTheme } from "@mui/material/styles";

/* const FirstRowStatis = dynamic(
	() => import('../Components/Panel/FirstRowStatis'),
	{ssr: false}
) */

const Main = () => {
	const theme = createTheme({
		typography: {
			fontFamily: 'Byekan'
		}
	})
	const [open, setOpen] = useState(true)

	return <>
		<FirstRowStatis />
		<SecondRowStatis />
		<Empolyees />
		<Grid container columnGap={2} mt={3}>
			<Grid md={5}>
				<ReceiveMessage />
			</Grid>
			<Grid md={6}>
				<LastProjects />
			</Grid>
		</Grid>
	</>
	{/* </Grid> */ }
	{/* </Grid> */ }
	{/* <Footer /> */ }
	// </div>
	// </ThemeProvider>
}

export default Main