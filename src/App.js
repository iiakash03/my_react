import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
      <h2>Lets get started</h2>
      <ExpenseItem>
        title={'Car Insurance'}
        amount={100}
        date={new Date(2021, 2, 28)}
      </ExpenseItem>
    </div>
  )
}

export default App;
