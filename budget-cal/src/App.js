import React,{useState} from 'react';
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import Expense from "./components/Item"
import Alert from "./components/Alert"
import uuid from "uuid/v4"
import './App.css';
//Dummy data
const initialExpense=[{id:uuid(),category:"rent",amount:3000},
                      {id:uuid(),category:"car",amount:500},
                      {id:uuid(),category:"grocery",amount:1000}]
//console.log(initialExpense)
//first import useState
//useState function returns an array [] with two values
//first the actual value of the state and second a function to control or update the state  
                   
function App() {
  const [expenses,setExpenses] =useState(initialExpense)
  return (
    <>
      
      <h2> hello</h2>
      <Alert/>
      <h2>BUDGET CALCULATOR</h2>
      <main className="App">
          <ExpenseForm/>
          <ExpenseList expenses={expenses}/>

      </main>
      <h1>Total Spending:<span className="total">$ {expenses.reduce((sum,item)=>{
        return sum+item.amount
      },0)}</span></h1> 
      
     
      
     
    </>
  );
}

export default App;
