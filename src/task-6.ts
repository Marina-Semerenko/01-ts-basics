function  getFirstElement <T>(arr: T[]): T {
   return  arr[0] ;
}

const result1 = getFirstElement<number>([ 1 , 2 , 3 ]); 
const result2 = getFirstElement<string>([ "a" , "b" , "c" ]); 
const result3 = getFirstElement<boolean>([ true , false , true ]);

console.log(result1, result2, result3);