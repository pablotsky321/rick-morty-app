import {ReactNode} from "react";
import '../styles/view.css'

export default function View({ children }: { children?: ReactNode}) {
    return(
        <div className='container'>
            {children}
        </div>
    )
}