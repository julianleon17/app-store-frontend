// Api methods
class ApiProducts {
  constructor() {
    this.apiUrl = 'http://localhost:3000/api/v1/products';
  }

  async getProducts() {
    const url = this.apiUrl + '/list';
    const options = {
      method: 'GET'
    };

    const response = await fetch( url, options );
    const data = await response.json();
    return( data );
  }

  async deleteProduct( id ) {
    const url = this.apiUrl + '/delete/' + id;
    const options = {
      method: 'DELETE'
    };

    const response = await fetch( url, options );
    const data = await response.json();
    return( data );
  }

  async createProduct( product ) {
    const url = this.apiUrl + '/create/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( product )
    };

    const response = await fetch( url, options );
    const data = await response.json();
    return( data );
  }
}

const api = new ApiProducts();
export default api;
