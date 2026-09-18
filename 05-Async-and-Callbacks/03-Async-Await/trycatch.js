/*
    error handling = process of handling errors that may occur during the execution of a program. In JavaScript, we can handle errors using try-catch blocks, which allow us to catch and handle exceptions that may be thrown during the execution of a block of code.  (detecting,managing, and responding to errors that may occur during the execution of a program)
    syntax error , data error , input error , network error , runtime error , logical error  are manage by 
    try - block of code that may throw an error
    catch - block of code that handles the error
    finally - block of code that will always execute regardless of whether an error occurred or not
    throw- custom error and throw it to the catch block
     error handling
      * stops abruptly, ending the program—stops program crash
      * improves user experience
      * helps to debug the error faster
      *gracefully recover from failures        
    */
   try{
      console.log(a);
   }catch(error)
   {
    console.log(error.name,error.messege)
   }finally
   {
    console.log("finally always executes");
   }


function checkAge(age)
{
    if(age<18)
    {
        throw new Error("!!!You are  tooo Yoing for facebook")
    }
    return "Facebook Access Granted"
}

try{
    console.log(checkAge(18));
}
catch(error)
{
    console.log(error.messege);
}
finally
{
    console.log("Hello");
}