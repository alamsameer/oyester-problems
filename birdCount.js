
function birdFrequency(arr){
    // empty arrays to store minimum and maximum occured birds
      let max=[]
      let min=[]
    //   Intializing empty  map object
      let map = new Map()
    // storing the birds id as key and no.of birds  as value
      arr.forEach((element)=>{
        if(map.has(element)){
        map.set(element,map.get(element)+1) 
        }
      else{
        map.set(element,1)
      }
    })
    //   getting all the no.of birds for unique id 
      let values= [...map.values()]
      let maxValue=Math.max(...values)
      let minValue=Math.min(...values)
    //   pushing the bird id for maximum and minimum numbers
     map.forEach((value,key)=>{
       if(value == maxValue){
         max.push(key)
       }
       if(value==minValue){
        min.push(key)
       }
     })
    
    return [Math.min(...max),Math.min(...min)]
    }
    let inp1= [1,1,2,2,4,4,4,4,5] 
    let inp2=[2,2,2,2,4,4,4,4,5]
    let inp3=[1,2,2,4,4,4,4,5]
    
    birdFrequency(inp1)
    birdFrequency(inp2)
    birdFrequency(inp3)