
import HistoryIcon from '@mui/icons-material/History';
import WindowIcon from '@mui/icons-material/Window';
import Link from 'next/link';

const links = [
  { name: 'Home', href: '/dashboard'},
  { name: 'History', href: '/dashboard/history', }
]
export default function NavLinks(){
    return(
        <>
            {links.map(({href, name}) => {
                return(
                    <div className='text-white text-l font-medium  p-2 pl-4 hover:bg-[#085797] rounded-2xl' key={name}>
                        <Link href={href} >
                            {name}
                        </Link>
                    </div>
                    
                )
            })}
        </>
    );
}