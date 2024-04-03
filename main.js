// src/zakatCalculator.ts
import inquirer from 'inquirer';
async function calculateZakat() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'savings',
            message: 'Enter the total amount of savings which you owned from a Year :',
        },
        {
            type: 'number',
            name: 'gold',
            message: 'Enter the value of gold which you owned from a Year (in grams):',
        },
        {
            type: 'number',
            name: 'silver',
            message: 'Enter the value of silver which you owned from a Year(in grams):',
        },
        // Add more questions for other assets as needed
    ]);
    const savings = answers.savings;
    const goldValue = answers.gold * 18259.9;
    const silverValue = answers.silver * 218.7;
    // Zakat calculation logic
    //const zakatAmount = totalWealth >= NISAB_AMOUNT ? totalWealth * ZAKAT_RATE : 0;
    if (savings >= levelofsilver && goldValue >= levelofgold && silverValue >= levelofsilver) {
        console.log(`Your Zakat amount on Cash is: ${savings * ZAKAT_RATE} Rupees`);
        console.log(`Your Zakat amount on gold is: ${goldValue * ZAKAT_RATE} Rupees`);
        console.log(`Your Zakat amount on silver is: ${silverValue * ZAKAT_RATE} Rupees`);
    }
    else if (goldValue >= levelofgold && silverValue >= levelofsilver) {
        console.log(`Your Zakat amount on gold is: ${goldValue * ZAKAT_RATE} Rupees`);
        console.log(`Your Zakat amount on silver is: ${silverValue * ZAKAT_RATE} Rupees`);
    }
    else if (goldValue >= levelofgold && savings >= levelofsilver) {
        console.log(`Your Zakat amount on gold is: ${goldValue * ZAKAT_RATE} Rupees`);
        console.log(`Your Zakat amount on Cash is: ${savings * ZAKAT_RATE} Rupees`);
    }
    else if (silverValue >= levelofsilver && savings >= levelofsilver) {
        console.log(`Your Zakat amount on silver is: ${silverValue * ZAKAT_RATE} Rupees`);
        console.log(`Your Zakat amount on Cash is: ${savings * ZAKAT_RATE} Rupees`);
    }
    else if (silverValue >= levelofsilver) {
        console.log(`Your Zakat amount on silver is: ${silverValue * ZAKAT_RATE} Rupees`);
    }
    else if (goldValue >= levelofgold) {
        console.log(`Your Zakat amount on gold is: ${goldValue * ZAKAT_RATE} Rupees`);
    }
    else if (savings >= levelofsilver) {
        console.log(`Your Zakat amount on Cash is: ${savings * ZAKAT_RATE} Rupees`);
    }
    else {
        console.log("you are not Eligible for Zakat");
    }
}
// Constants
const GOLD_PRICE_PER_GRAM = 18259.9; // Example gold price in pkr per gram
const SILVER_PRICE_PER_GRAM = 218.7; // Example silver price in pkr per gram
const levelofsilver = SILVER_PRICE_PER_GRAM * 612.36;
const levelofgold = GOLD_PRICE_PER_GRAM * 87.48;
//const NISAB_AMOUNT = 345; // Example Nisab amount in pkr
const ZAKAT_RATE = 0.025; // Zakat rate (2.5%)
calculateZakat();
