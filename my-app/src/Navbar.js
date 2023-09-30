export default function Navbar(){
    return <nav className = "nav">
    <a href= "/" className = "site-title"> Fund & Invest</a>
    <ul>
    <li className="active">
    <a href="/pricing">Pricing</a>
    </li>

    <li>
    <a href="/about">About</a>
    </li>
    <li>
    <a href="/lend">Lend</a>
    </li>
    
    </ul>
    
    </nav>
    }