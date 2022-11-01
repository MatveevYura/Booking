var stripeElements = function(publicKey, saloon_id, customer_id) {
  var stripe = Stripe(publicKey);
  var elements = stripe.elements();

  // Element styles
  var style = {
    base: {
      fontSize: "16px",
      color: "#32325d",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "rgba(0,0,0,0.4)"
      }
    }
  };

  // var card = elements.create("card", { style: style });
  var card = elements.create("card", {hidePostalCode: true, style: style });

  card.mount("#card-element");

  // Element focus ring
  card.on("focus", function() {
    var el = document.getElementById("card-element");
    el.classList.add("focused");
  });

  card.on("blur", function() {
    var el = document.getElementById("card-element");
    el.classList.remove("focused");
  });

  // Handle payment submission when user clicks the pay button.
  var button = document.getElementById("submit");
  button.addEventListener("click", function(event) {
    event.preventDefault();
    changeLoadingState(true);
    var cardHolderName = document.getElementById("card-holder-name").value;

    var saloon_id = jQuery('#saloon_id').val();
    var email_to_test = jQuery('#email1').val();
    if(email_to_test.length < 1)
    {
      var email_to_test = jQuery('#email').val();
    }

    var orderData = {
      name: cardHolderName,
      customer: customer_id,
      saloon_id: saloon_id,
      email: email_to_test,
    };

    fetch('https://crm.biocoiff.com/stripecapture.php', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(orderData)
      }).then(function(result) {
        
        return result.json();
      }).then(function(data) {
        

        var amount = data.response.amount;
        var stripecustomer = data.response.customer;
        var paymentid = data.response.paymentid;

        // Complete payment when the submit button is clicked
        // var stripe = Stripe(data.response.publicKey);
        payWithCard(stripe, card, data.response.clientSecret, stripecustomer, amount, paymentid);
      });
    
  });
};


var payWithCard = function(stripe, card, clientSecret, stripecustomer, amount, paymentid) {
      // loading(true);
      stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card
        }
      }).then(function(result) {
        if (result.error) {
          // Show error to your customer
          showError(result.error.message);
        } else {
          // The payment succeeded!

          jQuery('#customer_id').val(stripecustomer);
            jQuery('#payment_id').val(amount);
            jQuery('#paymentid').val(paymentid);
          jQuery('#booking_btn').trigger('click');

          

          
        }
      });
    };

var orderComplete = function( clientSecret) {

    document.querySelector(".result-message").classList.remove("hidden");
    document.querySelector("button#submit").disabled = true;

    changeLoadingState(false);
  
};

var getPublicKey = function(saloon, customer_id) {
  var inputData = {
      saloon: saloon,
    };
  return fetch("https://crm.biocoiff.com/publickey.php", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(inputData)
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      stripeElements(response.publicKey, saloon, customer_id)
    });
};


var changeLoadingState = function(isLoading) {
  if (isLoading) {
    document.querySelector("button#submit").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("button#submit").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
};


jQuery('#stripe_btn').on('click', function(){
    var saloon_id = jQuery('#saloon_id').val();
    var customer_id = jQuery('#contact_record_id').val();
    getPublicKey(saloon_id, customer_id);
});