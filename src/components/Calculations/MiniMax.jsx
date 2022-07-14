import React, { useEffect, useState } from 'react'

const MiniMax = ({data}) => {

  const [bestInvestment, setBestInvestment] = useState('')
  const [bestValue, setBestValue] = useState('')

  useEffect(() => {
    let valuesToTranspose = []
    let valuesToTranspose2 = []

    let highestColumnValue = Array(data[0].length).fill(0);

    let transposedMatrix = new Array(data[0].length);

    let transposedMatrix2 = new Array(data.length);

    let count = 0;

    let count2 = 0;

    let miniMaxValue = 999999999999;

    let currentInv

    for (let i = 0; i < data[0].length; i++) {
      transposedMatrix[i] = new Array(data.length)
    }

    for(let i = 0; i < data[0].length; i++) {
      data.forEach((row) => {
        valuesToTranspose.push(row[i])
      });
    }

    //transpondo a matriz para calcular o custo de oportunidade
    for(let i = 0; i < transposedMatrix.length; i++){
      for(let j = 0; j < transposedMatrix[0].length; j++){
        transposedMatrix[i][j] = valuesToTranspose[count];
        if (highestColumnValue[i] < valuesToTranspose[count].value){
          highestColumnValue[i] = valuesToTranspose[count].value
        }
        count++
      }
    }


    for(let i = 0; i < transposedMatrix[0].length; i++) {
      transposedMatrix.forEach((row, index) => {
        let tempInvestment = {
          inv: row[i].inv,
          value: highestColumnValue[index] - row[i].value
        }
        valuesToTranspose2.push(tempInvestment)
      });
    }
    
    //"destranspondo" a matriz com os novos valores
    for (let i = 0; i < data.length; i++) {
      transposedMatrix2[i] = new Array(data[0].length)
    }

    for(let i = 0; i < transposedMatrix2.length; i++){
      for(let j = 0; j < transposedMatrix2[0].length; j++){
        transposedMatrix2[i][j] = valuesToTranspose2[count2];
        count2++
      }
    }
    
    let tempBestInvestment
    transposedMatrix2.map((row, index) => {
      let highestRowValue = -999999999999
      row.map((investment) => {
        if (highestRowValue < investment.value) {
          highestRowValue = investment.value
          currentInv = investment.inv
        }
      })
      if (miniMaxValue > highestRowValue){
        miniMaxValue = highestRowValue
        setBestInvestment(currentInv)
        setBestValue(miniMaxValue)
        tempBestInvestment = currentInv
      } else if (miniMaxValue === highestRowValue) {
        setBestInvestment(tempBestInvestment + ', ' + currentInv)
        tempBestInvestment = tempBestInvestment + ', ' + currentInv
      }
    })

    //console.log('ARRAY ->', transposedMatrix);
  }, [data]);

  return (
    <>{bestInvestment} ({bestValue})</>
  )
}

export default MiniMax