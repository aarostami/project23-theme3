import { useState, useEffect } from "react";
import { Box, Divider, Menu, MenuItem, Typography } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const DrawerSideSLevel = (props: any) => {
	return <ListItem sx={{ py: '0' }}>
		<ListItemButton sx={{'.MuiListItemIcon-root': { transition: 'all 300ms' }, transition: 'all 300ms', ':hover': {color: '#8bc3fa','.MuiListItemIcon-root': { transition: 'all 300ms' }}, textAlign: 'start', pr: '2rem' }}>
			<ListItemIcon></ListItemIcon>
			<ListItemText>{props.text}</ListItemText>
		</ListItemButton>
	</ListItem>
}

export default DrawerSideSLevel