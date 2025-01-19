import { Link, useLocation } from 'react-router-dom';
//Link - navigate to different routes partial page refresh.
//useLocation - access to current location of object.

function Navigation() {
    //useLoction() - access to current location object.
    const currentPath = useLocation().pathname; //get current path.

    //using Bootstrap framework.
    return (

        <ul className='nav'>
            <li className='nav-item'>
                <Link to="/"
                    /* 
                    / - root path.
                    create link for developer, if true then nav-link active else nav-link
                    */
                    className={currentPath === '/' ? 'nav-link active' : 'nav-link'}>
                    lunledev
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/About Me'

                    /*
                    create link for About Me, if true then nav-link active else nav-link
                    */
                    className={currentPath === '/About Me' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/Portfolio'

                    /*
                    create link for Portfolio, if true then nav-link active else nav-link
                    */
                    className={currentPath === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                    Portfolio
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/Contact'
                    /*
                    create link for Contact, if true then nav-link active else nav-link
                    */
                    className={currentPath === '/Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/Resume'
                    /*
                    create link for Resume, if true then nav-link active else nav-link
                    */
                    className={currentPath === '/Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </Link>
            </li>

        </ul>



    );



}


export default Navigation;

