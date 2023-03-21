import React, { useCallback, useRef ,useMemo} from 'react';
import { useState, useEffect } from 'react';


function Index() {
  const [array, setArray] = useState([''])
  var increment = useRef([]);
  const [dat,setDat]=useState(100);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(json => setArray(json))

  }, [])
   const table = useMemo(()=>{
    return(dat)
   },[dat])
  function Delete(i){
     var temp = [...array];
     temp.splice(i,1);
     setArray(temp);
     console.log(array);
     increment.current +=1;

  }
  function handle(e){
    increment.current = e.target.value;
    console.log(increment.current)
  }
   const inc = useCallback(()=>{
    setDat(dat-1);
  },[array])
  
  
  return (

    <div>
      <table className='table table-striped '>
        <thead>
       
          <th>ID</th>
          <th>Title</th>
        </thead>
     
      <tbody>
        {
          table &&array.map((a, i) => {
            return <tr>
              <td>{i+1}</td>
                
                <td><h5>{a?.title}</h5></td>
                <td><button className='btn btn-pimary' onClick={()=>{Delete(i)}}>Delete</button></td>
            </tr>
          })
        }
      </tbody>
      </table>
      <input type="text" onChange={handle}/>
      {/* <p>grabitems{increment.current}</p> */}
      <button onClick={inc}>counter</button>
      <p>total{dat}</p>
      
    </div>

  )
}

export default Index;