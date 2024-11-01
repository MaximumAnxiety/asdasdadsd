import React, { ReactElement } from 'react';
import { useState, FC, useEffect } from 'react';
import {DrinkType, DrinksList, Ingreadient, Ingreadients, BetterDrinkType, BetterDrinkTypeList } from '../../types';
import drinkNormalizer from '../../assets/drinkNormalizer';
import InputString from '../atoms/inputString';
type DataDisplay2Props = {
    string: string;
}

const FindByLetter:FC<DataDisplay2Props> = ({string}) => {
    const [data, setData] = useState<DrinksList | null>(null);
    
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [letter2, setReset] = useState<string>('a'); // Reset state to trigger useEffect
    const [letter, setLetter] = useState<string>('a');
    const [drinks, setDrinks] = useState<BetterDrinkTypeList | null>(null);
    useEffect( () =>  {
        setLoading(true);
       

        const fetchData = async () => {

            setLoading(true);
            try{
                let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f='+{letter2});
                if(!response.ok){
                    throw new Error('Failed to fetch data' + response.status);
                }
                let data = await response.json();
                
                setData(data);
                setDrinks(drinkNormalizer(data));
                
            }catch (error) {
                if(error instanceof Error){
                    setError(error);
                }
                else {
                    setError(new Error('An unknown error occured'));
                }
                
               
            } 
            finally {
                setLoading(false);
            }
        }
        fetchData();

      
    }, [letter2]);
    
    const handleSet = () => {
        setReset(letter); // Change reset to trigger useEffect
      };
    
    
    return (
        <>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {drinks && 
        
        
        <><p>{drinks.drinks[0].strDrink}</p>
        <p>{JSON.stringify(drinks)}</p></>
        }
        <InputString label='write letter' value='a' onChange={setLetter}/>
        <button onClick={handleSet}>Find</button>
        </>
        
    );
}
export default FindByLetter;