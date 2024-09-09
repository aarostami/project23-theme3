'use client'
import Main from './main/page'
import Buttons from "./buttons/page";
import { usePathname, useSearchParams } from "next/navigation"
// import Panel from './page';
export const experimental_ppr = true
const Serv = (props: any) => {
	// console.log('ssss')
	// console.log(props)
	const searchParams = useSearchParams()
	return <>
		{/* <Panel parm={props.searchParams.buttons} /> */}
		{/* <Panel parm='sss' /> */}
		{/* {(props.searchParams.buttons == 'true') ? <Buttons /> : <Main />} */}
		{/* {(props.parm.searchParams?.buttons == 'true') ? <Buttons /> : <Main />} */}
		{(searchParams.size == 1) ? <Buttons /> : <Main />}
	</>
}

export default Serv