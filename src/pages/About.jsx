
import Avatar from "react-avatar"; //using an react avatar.


export default function About(){
/*padding-top:4*/
    return(

        <Avatar name="lunledev" size = "50" round ={true}/>,

        <div className="container pt-4"> 
            <h1>About Me</h1>
            <p>
                <em>I enjoy learning new programming languages.
                I have some experience with SQL.
                Hobbies include playing strategy games. 
                Some times program embedded hardware.</em>

            </p>
        </div>




    );
}