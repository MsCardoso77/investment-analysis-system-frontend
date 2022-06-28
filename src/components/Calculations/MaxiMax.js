import React, { useEffect, useState } from 'react'

const MaxiMax = ({data}) => {

  const [bestInvestment, setBestInvestment] = useState('')
  const [bestValue, setBestValue] = useState('')


  useEffect(() => {
    let highestValue = -999999999999
    let tempBestInvestment
    let uniqueTempBestInvestment
    data.map((row) => {
      row.map((investment) => {
        if (highestValue < investment.value){
          highestValue = investment.value
          tempBestInvestment = investment.inv
          uniqueTempBestInvestment = investment.inv
          setBestInvestment(investment.inv)
          setBestValue(investment.value)
        } else if (uniqueTempBestInvestment !== investment.inv && highestValue === investment.value){
            setBestInvestment(tempBestInvestment + ', ' + investment.inv)
            tempBestInvestment = tempBestInvestment + ', ' + investment.inv
            uniqueTempBestInvestment = investment.inv
        }
      })
    })
  }, [data])

  return (
    <>{bestInvestment} ({bestValue})</>
  )
}

export default MaxiMax