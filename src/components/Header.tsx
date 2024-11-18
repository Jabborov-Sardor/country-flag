import React, { useContext } from "react"
import { Context } from "../context/Context"
import { CountryType } from "./CountryList"

interface HeaderType {
    title:string 
}

const Header = ({title}:HeaderType) => {
  const {countries,setCountries,setRefresh,refresh} = useContext(Context)
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    const value = (e.target as HTMLInputElement).value.toLowerCase()
    const data = countries.filter((item:CountryType) => item.name.toLowerCase().includes(value))
    setCountries(data)
    if(!value){
      setRefresh(!refresh)
    }
  }
  return (
    <header className="bg-slate-400 flex p-8 justify-between">
      <h1 className="font-bold text-[35px] text-white">{title}</h1>
      <input onChange={handleChange} className="p-[4px] rounded-md outline-none w-[300px]" placeholder="Searching..."/>
    </header>
  )
}

export default Header
