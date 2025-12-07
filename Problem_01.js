function calculateVAT( price ) {
    if (typeof price !== "number" || price <= 0){
        return "Invalid";
    }
    return price * 0.075;
}




function  validContact( contact ) {
    if (typeof contact !== "string"){
        return 'invalid'
    }
    if(contact.length === 11 && contact.startsWith('01') && !contact.includes(" ")){
    return true;
    }
    return false;
}



function  willSuccess( marks ) {
   if(!Array.isArray(marks)){
    return "Invalid";
   }
   let pass = 0;
   fail = 0;

   for(let mark of marks){
    if(mark >= 50){
        pass++;
             
    }
    else{
        fail++;
    }
   }
   return pass>fail;
    
}



function  validProposal( person1 , person2 ) {
    if(typeof person1 !== "object" || typeof person2 !== "object" || !person1.gender || !person2.gender ||
     !Number.isInteger(person1.age) || !Number.isInteger(person2.age)
    )
    {
        return "invalid";
    }
    if(person1.gender === person2.gender){
        return false;
    }
    let ageDiff = person1.age - person2.age;
    if(ageDiff > 7 || ageDiff < -7){
        return false;
    }
    
    return true;

}



function  calculateSleepTime( times ) {
    if(!Array.isArray(times)){
        return "invalid";
    }

    for(let i = 0; i<times.length; i++){
        if(typeof times[i] !== "number" || times[i] <0){
            return "invalid";
        }
    }

    let tSeconds = 0;
    for (let i = 0; i < times.length; i++) {
        tSeconds += times[i];
    }

    let hours = Math.floor(tSeconds / 3600);
    let minutes = Math.floor((tSeconds % 3600) / 60);
    let seconds = tSeconds % 60;

    return{hour: hours, minute:minutes, seconds: seconds};
}

