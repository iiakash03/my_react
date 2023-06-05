import React,{useState} from 'react';



const ExpenseForm=(props)=>{
    console.log(props)

    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);

    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onsaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={enteredTitle} type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/> 
                </div> 
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
                <button type='submit'>Add Expense</button>
            </div>  
        </form>
    )
}

export default ExpenseForm;