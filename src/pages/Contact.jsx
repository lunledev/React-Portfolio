import React, {useState} from "react";

export default function Contact(){

    //intial varibles with empty strings.
    const [data, setData] = useState({
        name: '',
        email: '',
        message: '' 

    });

    const changeState = (event) =>{
        const {name, value} = event.target;
        setData(
        {
         ...data, [name]: value  //set the values. 
        }
    
       );
    };

    const [dataError, setDataError] = useState({
        nameError: '',
        emailError: '',
        messageError: '' 

    });

    const handleSubmit =(event) =>{
        
        event.preventDefault();
        // logic
        let  isValid = true; //boolean flag.

        if(data.name ==='')
        { 
            //isValid = false;
            dataError.nameError = 'name is required';
            setDataError(dataError.nameError);
            return '';

        }
        else{
            setDataError('');
        }

        if(data.email==='')
        {
           // isValid = false;
            dataError.emailError = 'email is required';
            setDataError(dataError.emailError);
            return '';
        }
        /*
        \S+ one or more non-whitespace charactes 
        used before @ for username and after @ for host.
        @ - at symbol
        \. - the dot character.
        \S+ one or non-whitespace the dot to match top level domain of email.

        */
        else if(/\S+@\S+\.\S+/.test(data.email)) //test if email is valid.
        {
            //isValid = true;
            setDataError('');

        }
        else
        {
            //isValid = false;
            dataError.emailError = 'invalid email';
            setDataError(dataError.emailError);
            return '';
        }


        if(data.message==='')
        {
            //isValid = false;
            dataError.emailError = 'message is required';
            setDataError(dataError.emailError);

        }

        if(isValid){
            console.log("form submitted");
            setData(
                {
                    name: '',
                    email: '',
                    message: '' 
            
                }
            );
        }

    };

    return(

        <form onSubmit = {handleSubmit}>
        <div>
         <label htmlFor ="name">Name: </label>
         <input type ="text"
         id ="name" 
         value = {React.data.name}
         onChange ={changeState}
         required
         /> 
         {dataError.nameError && (
            <span className="nameError"style={{color: 'black'}}>{dataError.nameError}</span>
         )}      
        </div>  
        <div>
         <label htmlFor ="email">Email: </label>
         <input type ="text"
         id ="email" 
         value = {React.data.email}
         onChange ={changeState}
         required
         />  
          {dataError.emailError && (
            <span className="emailError"style={{color: 'black'}}>{dataError.emailError}</span>
         )}           
        </div>  
        <div>
         <label htmlFor ="message">Message: </label>
         <textarea
         id ="message" 
         value = {React.data.message}
         onChange ={changeState}
         required
         />
         {dataError.messageError && (
            <span className="emailError"style={{color: 'black'}}>{dataError.messageError}</span>
         )}               
        </div>  
          <button type ="submit">Submit</button>  
        </form>
    );
}