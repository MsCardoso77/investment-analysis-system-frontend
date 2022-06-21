import React, { useEffect, useState } from 'react'

const MaxiMax = ({data}) => {

  const [bestInvestment, setBestInvestment] = useState('')


  useEffect(() => {
    let highestValue = 0
    data.map((row) => {
      row.map((investment) => {
        if (highestValue < investment.value){
          highestValue = investment.value
          setBestInvestment(investment.inv)
        } else if (highestValue === investment.value){
          console.log(bestInvestment + ' ou ' + investment.inv)
        }
      })
      console.log('Melhor valor da linha->', highestValue)
    })
  }, [data])

  return (
    <>{bestInvestment}</>
  )
}

export default MaxiMax