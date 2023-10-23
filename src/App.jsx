import moment  from 'moment'
import { useCallback, useState } from 'react'
import imgbutton from '../src/assets/icon-arrow.svg'

function App() {
  const [Redays, setReDays] = useState('00')
  const [ReMonths, setReMonths] = useState('00')
  const [Reyears, setReYears] = useState('00')
  const [totalDay, setTotalDay] = useState('')
  const [days, setDays] = useState('')
  const [months, setMonths] = useState('')
  const [years, setYears] = useState('')
  const [emptyDay, setemptyDay] = useState(true)
  const [emptyMonth, setemptyMonth] = useState(true)
  const [emptyYear, setemptyYear] = useState(true)
  const [invalidDay, setinvalidDay] = useState(true)
  const [invalidMonth, setinvalidMonth] = useState(true)
  const [invalidYear, setinvalidYear] = useState(true)

  const CheckD = (e) => {
    const days = parseInt(e)
    if (e) {
      setemptyDay(true)
      days >=1 && days <= 31 ? setinvalidDay(true) :  setinvalidDay(false)
      return e = true
    } else {
      setemptyDay(false)
    }
  }

  const CheckM = (e) => {
    const months = parseInt(e)
    if (e) {
      setemptyMonth(true)
      months >=1 && months <= 12 ? setinvalidMonth(true) :  setinvalidMonth(false)
      return e = true
    } else {
      setemptyMonth(false)
    }
  }

  const calYMD = (e) => {
    const yearss = Math.floor(e / 365);
    const monthss = Math.floor((e % 365) / 30);
    const dayss = e - (yearss * 365) - (monthss * 30)
    setReDays(dayss)
    setReMonths(monthss)
    setReYears(yearss)

  }

  const CheckY = (e) => {
    const years = parseInt(e)
    if (e) {
      setemptyYear(true)
      years >= 1900 && years <= 2100 ? setinvalidYear (true) :  setinvalidYear (false)
      return e = true
    } else {
      setemptyYear(false)
    }
  }
  
  const displayDate = (e) => {
    CheckD(days)
    CheckM(months)
    CheckY(years)
    if (CheckD(days)&&CheckM(months)&&CheckY(years)) {
        const IDate = (`${years}-${months}-${days}`)
        const ItoDate = moment(IDate)
        const CDate = moment()
        const duration = moment.duration(CDate - ItoDate)
        const spaceTime = CDate.diff(ItoDate,'days')
        setTotalDay(spaceTime)
        calYMD(totalDay)
    }
    }


  return (
    <>
    {/* Section */}
      <section className='bg-[var(--white)] rounded rounded-br-[4.5rem] w-auto'>
        <div className='flex flex-col p-6'>
          {/* inputForm */}
          <div className='flex flex-row gap-5 justify-start'>
            {/* inputDat */}
            <div className='flex flex-col'>
            DAY
            <input id='dd'  onChange={(e) => setDays(e.target.value.trim())} maxLength={2} className='w-[90px]' type="text" placeholder='DD'/>
            <span className={emptyDay ? 'hidden' : 'fontValidEm'}>This field is required</span>
            <span className={invalidDay ? 'hidden' : 'fontValid'}>Must be a valid day</span>
            </div>
            {/* inputMon */}
            <div className='flex flex-col'>
            MONTH
            <input id='mm' onChange={(e) => setMonths(e.target.value.trim())} maxLength={2} className='w-[90px]' type="text" placeholder='MM'/>
            <span className={emptyMonth ? 'hidden' : 'fontValidEm'}>This field is required</span>
            <span className={invalidMonth ? 'hidden' : 'fontValid'}>Must be a valid day</span>
            </div>
            {/* inputYea */}
            <div className='flex flex-col'>
            YEAR
            <input id='yy' onChange={(e) => setYears(e.target.value.trim())} maxLength={4} className='w-[90px]' type="text" placeholder='YYYY'/>
            <span className={emptyYear ? 'hidden' : 'fontValidEm'}>This field is required</span>
            <span className={invalidYear ? 'hidden' : 'fontValid'}>Must be a valid day</span>
            </div>
          </div>
          {/* buttonArrow */}
          <div className='flex items-center gap-1 mt-4'>
            <hr className='w-5/6'/>
            <button onClick={displayDate} className='bg-[var(--off-black)] rounded-full p-3'>
              <img src={imgbutton} /> 
            </button>
            <hr className='w-5/6 md:hidden'/>
          </div>
          {/* resultForm */}
          <div>
            <ul>
              <li className='fontRe'><span id='ResD'>{Reyears} </span>years</li>
              <li className='fontRe'><span id='ResM'>{ReMonths} </span>months</li>
              <li className='fontRe'><span id='ResY'>{Redays} </span>days</li>
            </ul>
          </div>
        </div>       
      </section>
  
    </>
  )
}

export default App
