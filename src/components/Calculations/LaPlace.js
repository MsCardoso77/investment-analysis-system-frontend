import React, { useEffect, useState } from 'react'

const LaPlace = ({data}) => {

  const [bestInvestment, setBestInvestment] = useState('')


  useEffect(() => {
    let bestRowAverage = 0;
    data.map((row) => {
      let totalRowValue = 0
      let currentInv = ''
      row.map((investment) => {
        totalRowValue += investment.value
        currentInv = investment.inv
      })
      if (bestRowAverage < totalRowValue/row.length) {
        bestRowAverage = totalRowValue/row.length
        //console.log("Maior média atual->", bestRowAverage)
        setBestInvestment(currentInv)
      } else if (bestRowAverage === totalRowValue/row.length) {
        
      }
      //console.log('Valor total da linha->', totalRowValue)
    })
  }, [data])

  return (
    <>{bestInvestment}</>
  )
}

export default LaPlace