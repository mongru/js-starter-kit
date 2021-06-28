import './index.css';
import numeral from 'numeral';

const randomValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${randomValue} for this`);

