function Checkout(){
    return(
        <>
       


    <div className="container mt-5">
      <h1 className="mb-4">Checkout</h1>

      {/* User Information */}
      <div className="row">
        <div className="col-md-6">
          <h4>User Details</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="John" required />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Doe" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="john.doe@example.com" required />
            </div>
          </form>
        </div>

        {/* Shipping Information */}
        <div className="col-md-6">
          <h4>Shipping Information</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" placeholder="City" required />
            </div>

            <div className="mb-3">
              <label htmlFor="state" className="form-label">State</label>
              <input type="text" className="form-control" id="state" placeholder="State" required />
            </div>

            <div className="mb-3">
              <label htmlFor="zip" className="form-label">Zip Code</label>
              <input type="text" className="form-control" id="zip" placeholder="Zip Code" required />
            </div>
          </form>
        </div>
      </div>

      {/* Payment Information */}
      <div className="row mt-5">
        <div className="col-md-6">
          <h4>Payment Details</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="cardName" className="form-label">Name on Card</label>
              <input type="text" className="form-control" id="cardName" placeholder="Full Name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9101 1121" required />
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="expDate" className="form-label">Expiration Date</label>
                  <input type="text" className="form-control" id="expDate" placeholder="MM/YY" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="cvv" className="form-label">CVV</label>
                  <input type="text" className="form-control" id="cvv" placeholder="CVV" required />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">Place Order</button>
          </form>
        </div>

       
      </div>
    </div>
 
        

        </>
    )
}
export default Checkout