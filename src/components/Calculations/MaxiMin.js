import React, { useEffect, useState } from 'react'

const MaxiMin = ({data}) => {

  const [bestInvestment, setBestInvestment] = useState('')

  useEffect(() => {
    let lowerValue = 99999999
    let maxiMinValue = 0
    data.map((row) => {
      row.map((investment) => {
        if (lowerValue > investment.value){
          lowerValue = investment.value
          if (lowerValue > maxiMinValue) {
            maxiMinValue = investment.value
            setBestInvestment(investment.inv)
          }
        }
      })
    })
  }, [data])

  return (
    <>{bestInvestment}</>
  )
}

export default MaxiMin