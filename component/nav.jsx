import { Link, useLocation } from 'react-router-dom';
//Link - navigate to different routes partial page refresh.
//useLocation - access to current location of object.

function nav() {
    //useLoction() - access to current location object.
    const currentPath = useLocation().pathname; //get current path.

    //using Bootstrap framework.
    return (

        <ul className='nav'>
            <li className='nav-item'>
                <Link to="/"
                    /* 
                    / - root path.
                    create link for Home, if true then nav-link active else nav-link
                    */
                    className={currentPath === '/' ? 'nav-link active' : 'nav-link'}>
                    Home
                </Link> 




            </li>

        </ul>



    );



}


export default nav;

