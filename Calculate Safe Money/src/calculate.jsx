import "./calculate.css";
import { useState } from "react";

const updateMoney = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // This line of code will convert the formData object into a plain old javascript object
    const formEntries = Object.fromEntries(formData.entries());


    return (
        <div>
            <form action="#" method="post" onSubmit={updateMoney}>
                <p className="label">1¢ 5¢ 10¢ 25¢</p>
                <p>
                    <input id="pennies" name="pennies" type="number" placeholder="1¢" size="1" defaultValue={money.pennies} />
                    <input id="nickels" name="nickels" type="number" placeholder="5¢" size="1" defaultValue={money.nickels} />
                    <input id="dimes" name="dimes" type="number" placeholder="10¢" size="1" defaultValue={money.dimes} />
                    <input id="quarters" name="quarters" type="number" placeholder="25¢" size="1" defaultValue={money.quarters} />
                </p>
                <p className="label">$1 $5 $10 $20</p>
                <p>
                    <input id="ones" name="ones" type="number" placeholder="$1" size="1" defaultValue={money.ones} />
                    <input id="fives" name="fives" type="number" placeholder="$5" size="1" defaultValue={money.fives} />
                    <input id="tens" name="tens" type="number" placeholder="$10" size="1" defaultValue={money.tens} />
                    <input id="twenties" name="twenties" type="number" placeholder="$20" size="1" defaultValue={money.twenties} />
                </p>
            </form>
        </div>
    );
};

function setMoney => {
    const [money, setMoney] = useState({
        pennies: 0,
        nickels: 0,
        dimes: 0,
        quarters: 0,
        ones: 0,
        fives: 0,
        tens: 0,
        twenties: 0
    });

    let pennies2 = money.pennies * 0.01;
    let nickels2 = money.nickels * 0.05;
    let dimes2 = money.dimes * 0.10;
    let quarters2 = money.quarters * 0.25;
    let ones2 = money.ones * 1;
    let fives2 = money.fives * 5;
    let tens2 = money.tens * 10;
    let twenties2 = money.twenties * 20;

    let total = pennies2 + nickels2 + dimes2 + quarters2 + ones2 + fives2 + tens2 + twenties2;

    console.log(pennies2);
    console.log(quarters2);
    console.log(fives2);
    console.log(twenties2);
    console.log(total);

    return (
        <div className="total">
            <p>{total}</p>
        </div>
    )
}
