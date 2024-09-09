'use client'
import { Suspense } from 'react';
import Main from './main/page'
import Buttons from "./buttons/page";
import { usePathname, useSearchParams } from "next/navigation"
const Serv = (props: any) => {
	// console.log('ssss')
	// console.log(props)
	const searchParams = useSearchParams()
	return <>
		{/* <Panel parm={props.searchParams.buttons} /> */}
		{/* <Panel parm='sss' /> */}
		{/* {(props.searchParams.buttons == 'true') ? <Buttons /> : <Main />} */}
		{/* {(props.parm.searchParams?.buttons == 'true') ? <Buttons /> : <Main />} */}
		<Suspense fallback={<h2>load</h2>}>
			{(searchParams.size == 1) ? <Buttons /> : <Main />}
		</Suspense>
	</>
}

export default Serv