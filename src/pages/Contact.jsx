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

       setDataError((current) => ( 
        { 
             ...current,    //spread operator to copy the current state.
             [`${name}Error`]: ''  //clear error message
       }));




    };

    const [dataError, setDataError] = useState({
        nameError: '',
        emailError: '',
        messageError: '' 

    });


    const [mouse, setMouse] = useState({
         mouseNameError:false,
         mouseEmailError: false,
         mouseMessageError: false,

    });

    const mouseEnter= (formfieldIn) =>
    {
        setMouse(true);

    };

    const mouseLeave= (formfieldOut) =>
    {
        setMouse(false);
    
    };

    const handleSubmit =(event) =>{
        
        event.preventDefault();
        console.log('state: ' + JSON.stringify(data));
        // logic
        let  isValid = true; //boolean flag.

        if(data.name ===''||mouse.mouseNameError&&data.name ==='')
        { 
            isValid = false;
            dataError.nameError = 'name is required';
            setDataError(dataError.nameError);
            setMouse(mouse.mouseNameError);
            return '';

        }
        else{
           setDataError('');
       }

        if(data.email===''||mouse.mouseEmailError&&data.email==='')
        {
           isValid = false;
           setDataError((currentDataErrorEmail) => ( 
            { 
                 ...currentDataErrorEmail,    //spread operator to copy the current state.
                 emailError: ''  //set the error message. 
           }));
          
    
            setMouse(mouse.mouseEmailError);
            return '';
        }
        /*
        \S+ one or more non-whitespace charactes 
        used before @ for username and after @ for host.
        @ - at symbol
        \. - the dot character.
        \S+ one or non-whitespace the dot to match top level domain of email.

        */
       const pattern = /\S+@\S+\.\S+/;
       console.log("test regex: " + pattern.test(data.email));
        if(pattern.test(data.email)===true&&data.email!=='') //test if email is valid.
        {
           
            isValid = true;

        }
        else
        {
            isValid = false;
           //dataError.emailError = 'invalid email';
            
       setDataError((currentDataErrorEmail) => ( 
        { 
             ...currentDataErrorEmail,    //spread operator to copy the current state.
             emailError: 'invalid email'  //set the error message. 
       }));

      


            


            return '';
        }


        if(data.message===''||mouse.mouseMessageError&&data.message==='')
        {
            isValid = false;
            dataError.emailError = 'message is required';
            setDataError(dataError.emailError);
            setMouse(mouse.mouseMessageError);

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
         name ='name'
        value = {data.name}
         onChange ={changeState}
         onMouseEnter={mouseEnter}
         onMouseLeave={mouseLeave}
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
         name ='email'
         value = {data.email}
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
         name ='message' 
         value = {data.message}
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