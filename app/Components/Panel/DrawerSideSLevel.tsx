import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText
} from "@mui/material";

const DrawerSideSLevel = (props: any) => {
	return <ListItem sx={{ py: '0' }}>
		<ListItemButton sx={{ '.MuiListItemIcon-root': { transition: 'all 300ms' }, transition: 'all 300ms', ':hover': { color: '#8bc3fa', '.MuiListItemIcon-root': { transition: 'all 300ms' } }, textAlign: 'start', pr: '2rem' }}>
			<ListItemIcon></ListItemIcon>
			<ListItemText>{props.text}</ListItemText>
		</ListItemButton>
	</ListItem>
}

export default DrawerSideSLevel