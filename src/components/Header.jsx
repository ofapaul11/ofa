import { useState } from 'react'
import '../style/style.css'

export const Header = ()=>{

    const [links, setLinks] = useState(["About", "Courses", "Shared opinions", "Contact us"])

    return(
        <header>
            <nav className="nav">
                {links.map(link => (
                    <a key={link} href={`#${link}`}>{link}</a>
                ))}
            </nav>
        </header>
    )
}