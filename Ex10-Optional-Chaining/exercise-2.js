const order = {
  customer: {
    address: {
      city: ""
    }
  }
};

/* made everything except the city value truthy*/

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}

//simplified code:

if(!order?.customer?.address?.city) {
  console.log("City is required");
}

//prints City is required (falseness of city value is true, empty string -> false)
