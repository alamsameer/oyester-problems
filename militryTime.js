
     function militryTime(timeStr){
        //       check for pm in time
               const pm =/pm/ig.test(timeStr)
              //  extract the numeric time only 
               const [time]=timeStr.split(/pm|am/ig)
        //        getting hours .minutes and second
               let [hours,min,sec]=time.split(":")
                if (hours === "12") {
                  hours = "00";
                }
               if(pm){
                  hours = parseInt(hours, 10) + 12;
               }
               
        //        returning the militry time based 
               
               return `${hours}:${parseInt(min)+45}:${parseInt(sec)+45}`;
             }
             
        militryTime("12:01:00PM")
        militryTime("12:01:00AM")