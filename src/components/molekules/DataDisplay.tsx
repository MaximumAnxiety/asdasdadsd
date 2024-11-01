import React, { ReactElement } from 'react';
import { useState, FC, useEffect } from 'react';
import {Joke} from '../../types';

type DataDisplayProps = {
    string: string;

}
type SubDisplayProps = {

    value: string;  
}
const SubDisplay: FC<SubDisplayProps> = ({value}) => {
useEffect(() => {
console.log("SubDisplay");

}, []);

console.log("SubDisplay render");

return (

    <p>{value}</p>

)
}



const DataDisplay:FC<DataDisplayProps> = ({string}) => {
  const [data, setData] = useState<Joke | null>(null);
  const [count, setCount] = useState(0);
    useEffect(() => {
        try{
            const promise = fetch('https://api.chucknorris.io/jokes/random')
            const res= promise.then(response => response.json())
            console.log(res)
            const a = res.then(
                data => {console.log(data)
                setData(data)
                
                }
                )
        }
        catch(e){
            console.log(e)
        }
       
    }, []);
  return (
    <>
    <p>{JSON.stringify(data)}</p>
    <button onClick={() => setData(null)}>clr</button>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    {data != null && <SubDisplay value={data.value}/>}
    </>
  );
}

export default DataDisplay;