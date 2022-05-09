import './Expenses.css';

import ExpenseItem from './ExpenseItem';

function Expenses({items}) {
    return (
        <div className="expenses">
            {items.map(({ title, amount, date }) => {
                return <ExpenseItem title={title} amount={amount} date={date} />
            })}
        </div>
    );
}

export default Expenses;
