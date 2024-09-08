"use client"
import { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Grid from '@mui/material/Unstable_Grid2'
import { Container } from "@mui/system";
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
import FirstRowStatis from "../../Components/Panel/FirstRowStatis";
import SecondRowStatis from "../../Components/Panel/SecondRowStatis";
import Empolyees from "../../Components/Panel/Employees";
import ReceiveMessage from "../../Components/Panel/ReceiveMessage";
import LastProjects from "../../Components/Panel/LastProjects";
import dynamic from "next/dynamic";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Avatar from "@mui/material/Avatar";
import avatar from '../images/panel/avatar-1.jpg'
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import DrawerSide from '../../Components/Panel/DrawerSide'
import Byekan from './fonts/Yekan.ttf'
import Mj_Anoosh from './fonts/Mj_Anoosh.ttf'
import ThemeProvider from "@mui/system/ThemeProvider";
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