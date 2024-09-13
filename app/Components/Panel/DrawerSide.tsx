import { useState } from "react";
import { Typography, Drawer, List, ListSubheader, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Stack } from "@mui/material";
import avatar from '../../images/panel/avatar-1.jpg'
import ChevronRight from '@mui/icons-material/ChevronRight'
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import ViewListIcon from '@mui/icons-material/ViewList';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EventIcon from '@mui/icons-material/Event';
import EmailIcon from '@mui/icons-material/Email';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import LayersIcon from '@mui/icons-material/Layers';
import Collapse from "@mui/material/Collapse";
import ExpandMore from '@mui/icons-material/ExpandMore'
import Badge from '@mui/icons-material/Badge'
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import dynamic from "next/dynamic"
import Image from "next/image";
import DrawerSideFLevel from "./DrawerSideFLevel";
import DrawerSideSLevel from "./DrawerSideSLevel";

const DrawerSide = ({ OpProp }: any) => {
	const [open1, setOpen1] = useState(false)
	const [open2, setOpen2] = useState(false)
	const [open3, setOpen3] = useState(false)
	const [open4, setOpen4] = useState(false)
	const [open5, setOpen5] = useState(false)
	const StyledBadge = styled(Badge)(({ theme }) => ({
		'& .MuiBadge-badge': {
			backgroundColor: 'red',
			color: 'red',
			boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
			'&::after': {
				position: 'absolute',
				top: '-1px',
				left: '-1px',
				width: '100%',
				height: '100%',
				borderRadius: '50%',
				animation: 'ripple 1.2s infinite ease-in-out',
				border: '1px solid currentColor',
				content: '""',
			}
		}
	}))

	return <>{/* <IconButton>
	<MenuIcon />
</IconButton> */}
		{OpProp == true ?
			<Drawer anchor="right" variant="permanent" open={OpProp} sx={{ width: OpProp == true ? '15rem' : '5rem', '& .MuiDrawer-paper': { width: OpProp == true ? '15rem' : '5rem', justifyContent: 'center' } }}>
				{/* <button onClick={() => makehash('#buttons')}>click</button> */}
				<Typography alignSelf={'center'} variant="h4" mb={3}>آقایادمین</Typography>
				{/* <StyledBadge variant="dot"> */}
				<Image src={avatar} alt='avatar' width='80' style={{ borderRadius: '50%', alignSelf: 'center' }} />
				{/* </StyledBadge> */}
				<Typography alignSelf={'center'} my={1}>علی یداللهی</Typography>
				<Stack direction={'row'} alignSelf={'center'}>
					<SettingsIcon sx={{ fontSize: '15px' }} />
					<PowerSettingsNewIcon sx={{ fontSize: '15px' }} />
				</Stack>
				<List>
					<ListSubheader>دسته بندی ها</ListSubheader>
					<DrawerSideFLevel {...{ text: 'داشبورد', icon: <DashboardIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} />, link: '' }} />
					<DrawerSideFLevel {...{ text: 'نوشته ها', icon: <FormatUnderlinedIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} />, link: '?buttons=true' }} />
					<ListItem sx={{ py: '0' }}>
						<ListItemButton onClick={() => setOpen1(!open1)} sx={{ transition: 'all 300ms', '.MuiListItemIcon-root': { transition: 'all 300ms' }, ':hover': { bgcolor: 'inherit', color: '#8bc3fa', '.MuiListItemIcon-root': { color: '#8bc3fa' } } }}>
							<ListItemIcon><InvertColorsIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /></ListItemIcon>
							<ListItemText sx={{ textAlign: 'right' }}>رابط کاربری</ListItemText>
							{open1 ? <ExpandMore /> : <ChevronRight />}
						</ListItemButton>
					</ListItem>
					<Collapse in={open1} timeout={'auto'} unmountOnExit>
						<List>
							<DrawerSideSLevel {...{ text: 'دکمه ها' }} />
							<DrawerSideSLevel {...{ text: 'کارد' }} />
							<DrawerSideSLevel {...{ text: 'کارت های جابجا شونده' }} />
							<DrawerSideSLevel {...{ text: 'چک باکس ها' }} />
							<DrawerSideSLevel {...{ text: 'آیکون های طراحی متریال' }} />
							<DrawerSideSLevel {...{ text: 'فونت آسوم' }} />
							<DrawerSideSLevel {...{ text: 'مدال ها' }} />
						</List>
					</Collapse>
					<DrawerSideFLevel {...{ text: 'فرم ها', icon: <ViewListIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /> }} />
					<ListItem sx={{ py: '0' }}>
						<ListItemButton onClick={() => setOpen2(!open2)} sx={{ transition: 'all 300ms', '.MuiListItemIcon-root': { transition: 'all 300ms' }, ':hover': { bgcolor: 'inherit', color: '#8bc3fa', '.MuiListItemIcon-root': { color: '#8bc3fa' } } }}>
							<ListItemIcon><LibraryBooksIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /></ListItemIcon>
							<ListItemText sx={{ textAlign: 'right' }}>جدول ها</ListItemText>
							{open2 ? <ExpandMore /> : <ChevronRight />}
						</ListItemButton>
					</ListItem>
					<Collapse in={open2} timeout={'auto'} unmountOnExit>
						<List>
							<DrawerSideSLevel {...{ text: 'جدول پیش فرض' }} />
							<DrawerSideSLevel {...{ text: 'جدول داده ها' }} />
							<DrawerSideSLevel {...{ text: 'جدول واکنش گرا' }} />
							<DrawerSideSLevel {...{ text: 'جدول تغییرات' }} />
						</List>
					</Collapse>
					<ListItem sx={{ py: '0' }}>
						<ListItemButton onClick={() => setOpen3(!open3)} sx={{ transition: 'all 300ms', '.MuiListItemIcon-root': { transition: 'all 300ms' }, ':hover': { bgcolor: 'inherit', color: '#8bc3fa', '.MuiListItemIcon-root': { color: '#8bc3fa' } } }}>
							<ListItemIcon><AssessmentIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /></ListItemIcon>
							<ListItemText sx={{ textAlign: 'right' }}>چارت ها</ListItemText>
							{open3 ? <ExpandMore /> : <ChevronRight />}
						</ListItemButton>
					</ListItem>
					<Collapse in={open3} timeout={'auto'} unmountOnExit>
						<List>
							<DrawerSideSLevel {...{ text: 'چارت شماره 1' }} />
							<DrawerSideSLevel {...{ text: 'چارت شماره 2' }} />
							<DrawerSideSLevel {...{ text: 'چارت شماره 3' }} />
							<DrawerSideSLevel {...{ text: 'چارت شماره 4' }} />
							<DrawerSideSLevel {...{ text: 'چارت شماره 5' }} />
						</List>
					</Collapse>
					<DrawerSideFLevel {...{ text: 'تقویم', icon: <EventIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /> }} />
					<DrawerSideFLevel {...{ text: 'ایمیل', icon: <EmailIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /> }} />
					<ListItem sx={{ py: '0' }}>
						<ListItemButton onClick={() => setOpen4(!open4)} sx={{ transition: 'all 300ms', '.MuiListItemIcon-root': { transition: 'all 300ms' }, ':hover': { bgcolor: 'inherit', color: '#8bc3fa', '.MuiListItemIcon-root': { color: '#8bc3fa' } } }}>
							<ListItemIcon><FilterNoneIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /></ListItemIcon>
							<ListItemText sx={{ textAlign: 'right' }}>برگه ها</ListItemText>
							{open4 ? <ExpandMore /> : <ChevronRight />}
						</ListItemButton>
					</ListItem>
					<Collapse in={open4} timeout={'auto'} unmountOnExit>
						<List>
							<DrawerSideSLevel {...{ text: 'برگه خالی' }} />
							<DrawerSideSLevel {...{ text: 'ورود' }} />
							<DrawerSideSLevel {...{ text: 'ثبت نام' }} />
							<DrawerSideSLevel {...{ text: 'فراموشی رمز' }} />
							<DrawerSideSLevel {...{ text: 'قفل صفحه' }} />
							<DrawerSideSLevel {...{ text: 'تنظیمات ایمیل' }} />
							<DrawerSideSLevel {...{ text: 'خطای 404' }} />
						</List>
					</Collapse>
					<ListItem sx={{ py: '0' }}>
						<ListItemButton onClick={() => setOpen5(!open5)} sx={{ transition: 'all 300ms', '.MuiListItemIcon-root': { transition: 'all 300ms' }, ':hover': { bgcolor: 'inherit', color: '#8bc3fa', '.MuiListItemIcon-root': { color: '#8bc3fa' } } }}>
							<ListItemIcon><LayersIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /></ListItemIcon>
							<ListItemText sx={{ textAlign: 'right' }}>دیگر صفحه ها</ListItemText>
							{open5 ? <ExpandMore /> : <ChevronRight />}
						</ListItemButton>
					</ListItem>
					<Collapse in={open5} timeout={'auto'} unmountOnExit>
						<List>
							<DrawerSideSLevel {...{ text: 'پروژه ها' }} />
							<DrawerSideSLevel {...{ text: 'تور آزمایشی' }} />
							<DrawerSideSLevel {...{ text: 'مدیرها' }} />
							<DrawerSideSLevel {...{ text: 'جزئیات' }} />
							<DrawerSideSLevel {...{ text: 'پروفایل' }} />
							<DrawerSideSLevel {...{ text: 'نقشه' }} />
							<DrawerSideSLevel {...{ text: 'لیست تماس' }} />
							<DrawerSideSLevel {...{ text: 'فروش' }} />
							<DrawerSideSLevel {...{ text: 'خط زمان' }} />
							<DrawerSideSLevel {...{ text: 'صورت حساب' }} />
							<DrawerSideSLevel {...{ text: 'سوال و جواب' }} />
							<DrawerSideSLevel {...{ text: 'گالری' }} />
							<DrawerSideSLevel {...{ text: 'تم های ایمیل' }} />
							<DrawerSideSLevel {...{ text: 'تعمیرات' }} />
							<DrawerSideSLevel {...{ text: 'به زودی' }} />
						</List>
					</Collapse>
				</List>
			</Drawer> :
			<Drawer anchor="right" variant="permanent" open={OpProp} sx={{ width: OpProp == true ? '15rem' : '5rem', '& .MuiDrawer-paper': { width: OpProp == true ? '15rem' : '5rem', justifyContent: 'center' } }}>
				{/* <StyledBadge variant="dot"> */}
				<Image src={avatar} alt='avatar' width='45' style={{ borderRadius: '50%', alignSelf: 'center' }} />
				{/* </StyledBadge> */}
				<Stack direction={'row'} alignSelf={'center'} py={1}>
					<SettingsIcon sx={{ fontSize: '15px' }} />
					<PowerSettingsNewIcon sx={{ fontSize: '15px' }} />
				</Stack>
				<List sx={{ display: 'flex', flexDirection: 'column', rowGap: '1rem', overflow: 'hidden' }}>
					<DrawerSideFLevel {...{ icon: <DashboardIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} />, link: '' }} />
					<DrawerSideFLevel {...{ icon: <FormatUnderlinedIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} />, link: '?buttons=true' }} />
					<ListItem sx={{ py: '0' }}>
						<ListItemButton onClick={() => setOpen1(!open1)} sx={{ transition: 'all 300ms', '.MuiListItemIcon-root': { transition: 'all 300ms' }, ':hover': { bgcolor: 'inherit', color: '#8bc3fa', '.MuiListItemIcon-root': { color: '#8bc3fa' } } }}>
							<ListItemIcon><InvertColorsIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /></ListItemIcon>
							{/* {open1 ? <ExpandMore /> : <ChevronRight />} */}
						</ListItemButton>
					</ListItem>
					<Collapse in={open1} timeout={'auto'} unmountOnExit>
						<List>
							<DrawerSideSLevel {...{ text: 'دکمه ها' }} />
							<DrawerSideSLevel {...{ text: 'کارد' }} />
							<DrawerSideSLevel {...{ text: 'کارت های جابجا شونده' }} />
							<DrawerSideSLevel {...{ text: 'چک باکس ها' }} />
							<DrawerSideSLevel {...{ text: 'آیکون های طراحی متریال' }} />
							<DrawerSideSLevel {...{ text: 'فونت آسوم' }} />
							<DrawerSideSLevel {...{ text: 'مدال ها' }} />
						</List>
					</Collapse>
					<DrawerSideFLevel {...{ icon: <ViewListIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /> }} />
					<ListItem sx={{ py: '0' }}>
						<ListItemButton onClick={() => setOpen2(!open2)} sx={{ transition: 'all 300ms', '.MuiListItemIcon-root': { transition: 'all 300ms' }, ':hover': { bgcolor: 'inherit', color: '#8bc3fa', '.MuiListItemIcon-root': { color: '#8bc3fa' } } }}>
							<ListItemIcon><LibraryBooksIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /></ListItemIcon>
							{/* {open2 ? <ExpandMore /> : <ChevronRight />} */}
						</ListItemButton>
					</ListItem>
					<Collapse in={open2} timeout={'auto'} unmountOnExit>
						<List>
							<DrawerSideSLevel {...{ text: 'جدول پیش فرض' }} />
							<DrawerSideSLevel {...{ text: 'جدول داده ها' }} />
							<DrawerSideSLevel {...{ text: 'جدول واکنش گرا' }} />
							<DrawerSideSLevel {...{ text: 'جدول تغییرات' }} />
						</List>
					</Collapse>
					<ListItem sx={{ py: '0' }}>
						<ListItemButton onClick={() => setOpen3(!open3)} sx={{ transition: 'all 300ms', '.MuiListItemIcon-root': { transition: 'all 300ms' }, ':hover': { bgcolor: 'inherit', color: '#8bc3fa', '.MuiListItemIcon-root': { color: '#8bc3fa' } } }}>
							<ListItemIcon><AssessmentIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /></ListItemIcon>
							{/* {open3 ? <ExpandMore /> : <ChevronRight />} */}
						</ListItemButton>
					</ListItem>
					<Collapse in={open3} timeout={'auto'} unmountOnExit>
						<List>
							<DrawerSideSLevel {...{ text: 'چارت شماره 1' }} />
							<DrawerSideSLevel {...{ text: 'چارت شماره 2' }} />
							<DrawerSideSLevel {...{ text: 'چارت شماره 3' }} />
							<DrawerSideSLevel {...{ text: 'چارت شماره 4' }} />
							<DrawerSideSLevel {...{ text: 'چارت شماره 5' }} />
						</List>
					</Collapse>
					<DrawerSideFLevel {...{ icon: <EventIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /> }} />
					<DrawerSideFLevel {...{ icon: <EmailIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /> }} />
					<ListItem sx={{ py: '0' }}>
						<ListItemButton onClick={() => setOpen4(!open4)} sx={{ transition: 'all 300ms', '.MuiListItemIcon-root': { transition: 'all 300ms' }, ':hover': { bgcolor: 'inherit', color: '#8bc3fa', '.MuiListItemIcon-root': { color: '#8bc3fa' } } }}>
							<ListItemIcon><FilterNoneIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /></ListItemIcon>
							{/* {open4 ? <ExpandMore /> : <ChevronRight />} */}
						</ListItemButton>
					</ListItem>
					<Collapse in={open4} timeout={'auto'} unmountOnExit>
						<List>
							<DrawerSideSLevel {...{ text: 'برگه خالی' }} />
							<DrawerSideSLevel {...{ text: 'ورود' }} />
							<DrawerSideSLevel {...{ text: 'ثبت نام' }} />
							<DrawerSideSLevel {...{ text: 'فراموشی رمز' }} />
							<DrawerSideSLevel {...{ text: 'قفل صفحه' }} />
							<DrawerSideSLevel {...{ text: 'تنظیمات ایمیل' }} />
							<DrawerSideSLevel {...{ text: 'خطای 404' }} />
						</List>
					</Collapse>
					<ListItem sx={{ py: '0' }}>
						<ListItemButton onClick={() => setOpen5(!open5)} sx={{ transition: 'all 300ms', '.MuiListItemIcon-root': { transition: 'all 300ms' }, ':hover': { bgcolor: 'inherit', color: '#8bc3fa', '.MuiListItemIcon-root': { color: '#8bc3fa' } } }}>
							<ListItemIcon><LayersIcon fontSize="small" sx={{ ':hover': { color: '#8bc3fa' } }} /></ListItemIcon>
							{/* {open5 ? <ExpandMore /> : <ChevronRight />} */}
						</ListItemButton>
					</ListItem>
					<Collapse in={open5} timeout={'auto'} unmountOnExit>
						<List>
							<DrawerSideSLevel {...{ text: 'پروژه ها' }} />
							<DrawerSideSLevel {...{ text: 'تور آزمایشی' }} />
							<DrawerSideSLevel {...{ text: 'مدیرها' }} />
							<DrawerSideSLevel {...{ text: 'جزئیات' }} />
							<DrawerSideSLevel {...{ text: 'پروفایل' }} />
							<DrawerSideSLevel {...{ text: 'نقشه' }} />
							<DrawerSideSLevel {...{ text: 'لیست تماس' }} />
							<DrawerSideSLevel {...{ text: 'فروش' }} />
							<DrawerSideSLevel {...{ text: 'خط زمان' }} />
							<DrawerSideSLevel {...{ text: 'صورت حساب' }} />
							<DrawerSideSLevel {...{ text: 'سوال و جواب' }} />
							<DrawerSideSLevel {...{ text: 'گالری' }} />
							<DrawerSideSLevel {...{ text: 'تم های ایمیل' }} />
							<DrawerSideSLevel {...{ text: 'تعمیرات' }} />
							<DrawerSideSLevel {...{ text: 'به زودی' }} />
						</List>
					</Collapse>
				</List>
			</Drawer >
		}
	</>
}

export default DrawerSide