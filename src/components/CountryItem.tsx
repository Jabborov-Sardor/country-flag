import { CountryType } from "./CountryList"

interface CountryItemType {
  item:CountryType
}

const CountryItem = ({item}:CountryItemType) => {
  return (
    <div className="w-[400px] rounded-md bg-slate-400 p-3  overflow-hidden shadow-md shadow-slate-400 h-[450px]">
      <img src={item.img} alt="img" className="h-[60%] w-full rounded-md" />
      <h3 className="font-bold text-white text-center text-[25px] mt-[15px]">{item.name}-{item.flag}</h3>
      <div className="flex justify-between mt-[20px] border-white border-b-[2px] pb-[30px]">
        <div className="flex items-center space-x-[5px]">
          <p className="text-slate-100 text-[18px]">Capital : </p>
          <span className="text-white font-semibold text-[18px]">{item.capital}</span>
        </div>
        <div className="flex items-center space-x-[5px]">
          <p className="text-slate-100 text-[18px]">Population :</p>
          <span className="text-white font-semibold text-[18px]">{item.population}</span>
        </div>
      </div>
      <div className="w-full mt-[10px]">
        <button className="w-full py-[5px] rounded-md border-[2px] text-bold text-white border-white ">Save</button>
      </div>
    </div>
  )
}

export default CountryItem
