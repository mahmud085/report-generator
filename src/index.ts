const inquirer = require('inquirer');
import  {averagePriceBySeller} from './reports-generator/averagePriceBySeller';
import { CSVParser } from './parser/csvParser';
import { listParser } from './parser/listParser';
import { contactParser } from './parser/contactParser';
import { availableCardistribution } from './reports-generator/availableCarDistribution';
import { mostContactedListingPerMonth } from './reports-generator/mostContactedListingPerMont';
import { averagePriceMostContactedListings } from './reports-generator/averagePriceMostContactedListings';
import { ContactType } from './types/contact';
import { ListType } from './types/list';

const months = [
  {name: 'January', value: 1},
  {name: 'February', value: 2},
  {name: 'March', value: 3},
  {name: 'April', value: 4},
  {name: 'May', value: 5},
  {name: 'June', value: 6},
  {name: 'July', value: 7},
  {name: 'August', value: 8},
  {name: 'September', value: 9},
  {name: 'October', value: 10},
  {name: 'November', value: 11},
  {name: 'December', value: 12}
];

async function index() {

  const listings =  (await CSVParser('listings.csv', listParser) as ListType[]);
  const contacts = (await CSVParser('contacts.csv', contactParser) as ContactType[]);

  inquirer
  .prompt([
    {
      type: 'checkbox',
      message: 'Which report you want to generate?',
      name: 'reports',
      choices: [
        {
          name: 'Average Listing Selling Price per Seller Type',
          value: 0,
        },
        {
          name: 'Percentual Distribution of available cars by Make',
          value: 1,
        },
        {
          name: 'Average price of the 30% most contacted listings',
          value: 2,
        },
        {
          name: 'The Top 5 most contacted listings per Month',
          value: 3,
        },
      ],
      validate: function (answer: any) {
        if (answer.length < 1) {
          return 'You must choose at least one option.';
        }

        return true;
      },
    },
    {
      'type': 'list',
      'name': 'month',
      'message': 'Which month report you want to generate?',
      'choices': months,
      'when': (answers: any) => answers.reports.includes(3)
    }, {
      'type': 'input',
      'name': 'year',
      'message': 'In which year?',
      'when': (answers: any) => answers.reports.includes(3),
      'validate': function (value: any) {
        if(value >= 1000 && value <= 9999) return true;
        return "Enter a valid year in the format yyyy";
      }
    }
  ])
  .then( async (answers: any) => {
    if(answers.reports.includes(0)){
      averagePriceBySeller(listings);
    }
    
    if(answers.reports.includes(1)){
      availableCardistribution(listings);
    }
    if(answers.reports.includes(2)) {
      averagePriceMostContactedListings(listings, contacts);
    }
    if(answers.reports.includes(3)) {
      mostContactedListingPerMonth(listings, contacts, Number(answers.month), Number(answers.year)); 
    }
  });
}

index();