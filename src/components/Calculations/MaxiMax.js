import React, { useEffect, useState } from 'react'

const MaxiMax = ({data}) => {

  const [bestInvestment, setBestInvestment] = useState('')
  const [bestValue, setBestValue] = useState('')


  useEffect(() => {
    let highestValue = 0
    let tempBestInvestment
    data.map((row) => {
      row.map((investment) => {
        if (highestValue < investment.value){
          highestValue = investment.value
          tempBestInvestment = investment.inv
          setBestInvestment(investment.inv)
          setBestValue(investment.value)
        } else if (highestValue === investment.value){
            setBestInvestment(tempBestInvestment + ', ' + investment.inv)
            tempBestInvestment = tempBestInvestment + ', ' + investment.inv
        }
      })
    })
  }, [data])

  return (
    <>{bestInvestment} ({bestValue})</>
  )
}

export default MaxiMax