import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {

  const [filteredYear,setFilteredYear]=React.useState('2022');

  const filteredArray=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={setFilteredYear}/>
    {filteredArray.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      
    ))}
    
      
    </Card>
  );
}

export default Expenses;