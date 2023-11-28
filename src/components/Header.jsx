import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='flex items-center justify-between p-4 bg-blue-100'>
  
       <Link to={"/"}>
          <div id='logo' className="flex items-center gap-2">
            <img src={Logo} width={64}/>
            <h1 className="text-[24px] font-semibold">SOCIOLIB</h1>
          </div>
       </Link>
      
       <nav id='menu'>
          <ul className="flex gap-4">
            <Link to={"/"}><li className="hover:underline">Ana Sayfa</li></Link>
            <Link to={"/about"}><li className="hover:underline">Hakkında</li></Link>
            <Link to={"/library"}><li className="hover:underline">Kütüphane</li></Link>
            <Link to={"/sign-in"}><li className="hover:underline">Giriş Yap</li></Link>
          </ul>
       </nav>
    </header>
  )
}
