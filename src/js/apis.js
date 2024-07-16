export class Transaction {
    constructor(amount,customerId) {
      this.amount = amount;
      this.customerId = customerId;
    }
  
    async getApiTransaction() {
      let api;
      if (this.amount) {
        api = `http://localhost:3000/transactions?amount=${this.amount}`;
      }else if(this.customerId){
        api = `http://localhost:3000/transactions?customer_id=${this.customerId}`;
      } else {
        api = `http://localhost:3000/transactions`;
      }
      let data = await fetch(api);
      let response = await data.json();
      return response;
    }
  }
export class Customer {
    constructor(name) {
      this.name = name;
    }
  
    async getApiCustomer() {
      let api;
      if (this.name) {
        api = `http://localhost:3000/customers?name=${this.name}`;
      } else {
        api = `http://localhost:3000/customers`;
      }
      let data = await fetch(api);
      let response = await data.json();
      return response;
    }
  }