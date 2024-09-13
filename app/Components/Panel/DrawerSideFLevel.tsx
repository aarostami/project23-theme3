import { createContext, useContext } from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from 'next/link'
import Panel from '../../panel/page'

const DrawerSideFLevel = (props: any) => {
	// console.log(props.link)
	// const hash = useContext(chContext)
	return <ListItem sx={{ py: '0' }}>
		{/* <Link href='/panel#buttons' style={{width: '100%'}} onClick={() => props.makehash('#buttons')}> */}
		<Link href={`/panel${props.link}`} style={{ width: '100%' }}>
			<ListItemButton sx={{ transition: 'all 300ms', '.MuiListItemIcon-root': { transition: 'all 300ms' }, ':hover': { bgcolor: 'inherit', color: '#8bc3fa', '.MuiListItemIcon-root': { color: '#8bc3fa' } } }}>
				<ListItemIcon>{props.icon}</ListItemIcon>
				<ListItemText sx={{ textAlign: 'right' }}>{props.text}</ListItemText>
			</ListItemButton>
		</Link>
	</ListItem>
}

export default DrawerSideFLevel