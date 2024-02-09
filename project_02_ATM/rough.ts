for (let index = 500; index < 5000; ++index) {
    console.log(`${index += 500},`)
}


// else if (transType.selectedtransType === "Withdraw") {
//     const amountWithdrawn = transType.amountWD;
//     if (amountWithdrawn > user.balance) {
//         console.log(chalk.red.bold("Insufficient balance for the withdrawal."));
//     } else {
//         user.balance -= amountWithdrawn;
//         console.log(chalk.green.bold(`Your Updated Balance is: ${user.balance}`));
//     }
// }