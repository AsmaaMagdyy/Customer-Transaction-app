import { Transaction } from "./apis.js";
import { Customer } from "./apis.js";
import { display, displayCustomer } from "./display.js";

async function showAllCustomers() {
    let trans = new Transaction();
    let data = await trans.getApiTransaction();
    console.log(data);

    let cust = new Customer()
    let cdata = await cust.getApiCustomer();
    console.log(cdata);
    $('tbody').html(display(data, cdata));
}

showAllCustomers();

// _________________________filter by amount______________________________
async function showCustomerByAmount(amount) {
    let trans = new Transaction(amount);
    let data = await trans.getApiTransaction();
    console.log(data);

    let cust = new Customer()
    let cdata = await cust.getApiCustomer();
    console.log(cdata);
    $('tbody').html(display(data, cdata));
}


document.querySelector('.by-amount').addEventListener('input',function () {
    let amount = $('.by-amount').val()
    console.log(amount);
    showCustomerByAmount(amount);
  })

// _________________________filter by name______________________________

async function showCustomerByName(customerName) {

    let cust = new Customer(customerName)
    let cdata = await cust.getApiCustomer();
    console.log(cdata);
    console.log(cdata[0].id);

    let trans = new Transaction('', cdata[0].id);
    let data = await trans.getApiTransaction();
    console.log(data);


    $('tbody').html(displayCustomer(data, cdata));
    ////////////////////////////////////////
    //send char data>>
    $('.container h1').html(customerName)
    let dateArr = [];
    let amountArr = [];
    for (let i = 0; i < data.length; i++) {
        amountArr.push(data[i].amount)
        dateArr.push(data[i].date)
    }
    charData(dateArr, amountArr)
    console.log(amountArr);
    console.log(dateArr);
}


document.querySelector('.by-name').addEventListener('input',function () {
    let customerName = $('.by-name').val()
    customerName ? showCustomerByName(customerName) : showAllCustomers()
    console.log(customerName);
  })


async function showCustomerGraph(customerName) {

    let cust = new Customer(customerName)
    let cdata = await cust.getApiCustomer();
    console.log(cdata);
    console.log(cdata[0].id);

    let trans = new Transaction('', cdata[0].id);
    let data = await trans.getApiTransaction();
    console.log(data);


   
    ////////////////////////////////////////
    //send char data>>
    $('.container h1').html(customerName)
    let dateArr = [];
    let amountArr = [];
    for (let i = 0; i < data.length; i++) {
        amountArr.push(data[i].amount)
        dateArr.push(data[i].date)
    }
    charData(dateArr, amountArr)
    console.log(amountArr);
    console.log(dateArr);
}


document.querySelector('.chartInput').addEventListener('input',function () {
    let customerName = $('.chartInput').val()
   showCustomerGraph(customerName)
    
  })

  



let labels;
let custdata;
let chart = null;
function charData(dateArr, amountArr) {
    labels = [...dateArr];
    custdata = [...amountArr];
    const data = {
        labels: labels,
        datasets: [{
            data: custdata,
            backgroundColor: 'rgb(232, 240, 254)',
            borderColor: [
                'rgb(75, 192, 192)',
              ],
              borderWidth: 1
        }]
       
        

    }

    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }
    if (chart != null) {
        chart.destroy()

    }
    chart = new Chart(
        document.getElementById('myChart'),
        config
    );


    console.log(dateArr);
    console.log(amountArr);
}

console.log(labels);
console.log(custdata);
