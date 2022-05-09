import Expenses from './components/Expenses';

import { expenses } from "./dummy-data/expenses.js";

function App() {
    return (
        <div className="container">
            <h2 className="page-title">Let's get started!</h2>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
