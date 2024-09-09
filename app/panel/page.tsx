"use client"
import { useState, useEffect, useContext, useRef, createContext, Suspense } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Grid from '@mui/material/Unstable_Grid2'
import { Container } from "@mui/system";
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
import FirstRowStatis from "../Components/Panel/FirstRowStatis";
import SecondRowStatis from "../Components/Panel/SecondRowStatis";
import Empolyees from "../Components/Panel/Employees";
import ReceiveMessage from "../Components/Panel/ReceiveMessage";
import LastProjects from "../Components/Panel/LastProjects";
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
import DrawerSide from '../Components/Panel/DrawerSide'
import Byekan from './fonts/Yekan.ttf'
import Mj_Anoosh from './fonts/Mj_Anoosh.ttf'
import ThemeProvider from "@mui/system/ThemeProvider";
import { createTheme } from "@mui/material/styles";
import Main from './main/page'
import Buttons from "./buttons/page";
// import { usePathname, useSearchParams } from "next/navigation"
import { useRouter, withRouter } from 'next/router'
import Serv from './serv'

/* const FirstRowStatis = dynamic(
	() => import('../Components/Panel/FirstRowStatis'),
	{ssr: false}
	) */

// const chContext = createContext('')

const Panel = (props: any, req: any) => {

	// console.log(props.searchParams)
	// console.log(searchParams.size)
	const theme = createTheme({
		typography: {
			fontFamily: 'Byekan'
		}
	})
	const [open, setOpen] = useState(true)
	// const [hash, setHash] = useState(props.searchParams.buttons)
	// const path = usePathname()
	// const path2 = useSearchParams()
	// path2.get('buttons')
	// const path3 = useRouter().asPath
	// const path4 = useRouter()
	// console.log(path4.pathname)
	// console.log(path4.query)
	// const url = document.URL
	// const h = useRef('')
	/* function makehash(t:any) {
		setHash(t)
	} */
	// useEffect(() => {
	// setHash(window.location.hash)
	/* if(window.location.hash == '#buttons') {
		setHash('#buttons')
	} */
	// h.current = window.location.hash
	/* if(h == '#buttons') {
		h.current = '#buttons'
	} */
	// if (props.searchParams.buttons == true) { console.log('hhhhhh') }
	// console.log(hash)
	// }, [props.searchParams.buttons])
	// return <chContext.Provider value={hash}>
	return <ThemeProvider theme={theme}>
		<div style={{ display: 'flex' }}>
			{/* <Header /> */}
			{/* <aside style={{display: 'block', width: '100%'}}> */}
			{/* <Grid container> */}
			{/* <Grid md={1}> */}
			<DrawerSide OpProp={open} />
			{/* <DrawerSide OpProp={open} makehash={() => makehash('')} /> */}
			{/* </aside> */}
			{/* </Grid> */}
			{/* <Grid md={11}> */}
			<main style={{ width: open == true ? '70%' : '100%', backgroundColor: '#eee', paddingBottom: '3rem', flexGrow: 1 }}>
				<Container maxWidth={'xl'}>
					<IconButton onClick={() => setOpen(!open)}><MenuIcon /></IconButton>
					{/* {(props.searchParams.buttons == 'true') ? <Buttons /> : <Main />} */}
					{/* {(searchParams.size == 1) ? <Buttons /> : <Main />} */}
					{/* <Suspense fallback={<h2>load</h2>}>
						<Serv />
					</Suspense> */}
				</Container>
			</main>
			{/* </Grid> */}
			{/* </Grid> */}
			{/* <Footer /> */}
		</div>
		{/* </chContext.Provider> */}
	</ThemeProvider>
}

export default Panel