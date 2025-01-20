
import Avatar from "react-avatar"; //using an react avatar.


export default function About(){
/*padding-top:4*/
    return(

        <Avatar name="lunledev" size = "50" round ={true}/>,

        <div className="container pt-4"> 
            <h1>About Me</h1>
            <p>
                <em>I enjoy learning new programming languages.<br>
                I have some experience with SQL.</br>
                Hobbies include playing strategy games.<br> 
                Some times program embedded hardware.</br></em>

            </p>
        </div>




    );
}