import axios from "axios"
import { useContext, useEffect } from "react"
import CountryItem from './CountryItem'
import { Context } from "../context/Context"

export interface CountryType {
    name:string
    capital:string
    img:string
    flag:string
    population:number
}

const CountryList = () => {
  const {countries,setCountries,refresh} = useContext(Context)
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then(res => {
            setCountries(res.data.splice(0,21).map((item:any) => {
                const data:CountryType = {
                    name:item.name.common,
                    capital:item.capital[0],
                    img:item.flags.png,
                    population:item.population,
                    flag:item.flag,
                }
                return data
            }))
        })
    },[refresh])
    console.log(countries);
    
  return (
    <div className="p-[20px] flex justify-between flex-wrap gap-[30px]">
      {countries.map((item:CountryType,index:number) => <CountryItem key={index} item={item}/> )}
    </div>
  )
}

export default CountryList
