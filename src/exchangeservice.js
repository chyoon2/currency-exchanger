export class ExchangeService {
  async getNewRate(amount, foreignCurrency) {
   
    if(isNaN(parseInt(amount))) {
      return false;
    } 
    
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      let rate = parseFloat(jsonifiedResponse.conversion_rates[foreignCurrency]);
      let product = (rate * amount).toFixed(2);
      return product;

    } catch(error) {
      return false;
    }
  }
}