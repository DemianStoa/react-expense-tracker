import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  
  const amounts = transactions.map(transaction => transaction.amount)
  const totalIncome = amounts.reduce((acc, item) => {
    if (item > 0) return acc += item
    return acc
  }, 0).toFixed(2)
  const totalExpense = amounts.reduce((acc, item) =>  {
    if (item < 0) return acc += item
    return acc
  }, 0).toFixed(2)

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">+${totalIncome}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">-${totalExpense}</p>
        </div>
      </div>
  )
}
