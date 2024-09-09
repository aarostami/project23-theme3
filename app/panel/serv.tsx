'use server'
import Main from './main/page'
import Buttons from "./buttons/page";
import { usePathname, useSearchParams } from "next/navigation"

const Serv = (props: any) => {
	// console.log(props)
	const searchParams = useSearchParams()
	return <>
		{/* {(props.searchParams.buttons == 'true') ? <Buttons /> : <Main />} */}
		{(searchParams.size == 1) ? <Buttons /> : <Main />}
	</>
}

export default Serv