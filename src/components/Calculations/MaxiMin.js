import React, { useEffect, useState } from 'react'

const MaxiMin = ({data}) => {

  const [bestInvestment, setBestInvestment] = useState('')
  const [bestValue, setBestValue] = useState('')

  useEffect(() => {
    let maxiMinValue = -999999
    let currentInv
    let tempBestInvestment
    data.map((row) => {
      let lowerValue = 999999
      row.map((investment) => {
        if (lowerValue > investment.value){
          lowerValue = investment.value
          currentInv = investment.inv
        }
      })
      if (lowerValue !== 999999 && lowerValue > maxiMinValue) {
        maxiMinValue = lowerValue
        setBestInvestment(currentInv)
        setBestValue(lowerValue)
        tempBestInvestment = currentInv
      } else if (lowerValue !== 999999 && lowerValue === maxiMinValue) {
        setBestInvestment(tempBestInvestment + ', ' + currentInv)
        tempBestInvestment = tempBestInvestment + ', ' + currentInv
      }
      //console.log(lowerValue)
    })
  }, [data])

  return (
    <>{bestInvestment} ({bestValue})</>
  )
}

export default MaxiMin