function logStatus(status: "loading" | "succes" | "error"): void {
  if (status ===  "loading" ) {
    console.log( "Loading..." ) ; 
  } else if (status ===  "succes" ) {
    console.log( "Success!" ) ; 
  } else if (status ===  "error" ) {
    console.log( "Something went wrong" ) ;
  }
}

logStatus( "loading" ) ;
