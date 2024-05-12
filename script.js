function toggledropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.menubutton')) {
    var dropdowns = document.getElementsByClassName("menucontent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


  let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
}

function showCart() {
    const cartItems = document.getElementById("cart-items");
    const totalCost = document.getElementById("total-cost");
    cartItems.innerHTML = "";
    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rs.${item.price}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });
    totalCost.textContent = `Total: Rs.${totalPrice}`;
    const cartDiv = document.getElementById("cart");
    if (cart.length > 0) {
        cartDiv.style.display = "block";
    } else {
        cartDiv.style.display = "none";
    }
}

function placeOrder() {
  var form = document.getElementById("order-form");
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var number = document.getElementById("pnumber").value;
  var messageDiv = document.getElementById("ormessage");

  if (form.checkValidity()) {
      showMessageorder("Order successful!.Your order will arive at the given location within 30 minutes", "success");
  } else {
      if (name.trim() === "") {
          showMessageorder("Please enter your name.", "error");
      } else if(address.trim()===""){
          showMessageorder("Please enter your address.", "error");
      }else{
        showMessageorder("Please Enter your phone number.","error");
      }
  }
}

function showMessageorder(message, type) {
  var messageDiv = document.getElementById("ormessage");
  messageDiv.textContent = message;
  messageDiv.style.display = "block";
}

function submitfeedback() {
  var form = document.getElementById("feedback-form");
  var name = document.getElementById("fname").value;
  var address = document.getElementById("faddress").value;
  var number = document.getElementById("feedback").value;
  var messageDiv = document.getElementById("ftmessage");

  if (form.checkValidity()) {
      showMessage("Thank you for your feedback!!", "success");
  } else {
      if (name.trim() === "") {
          showMessage("Please enter your name.", "error");
      } else if(address.trim()===""){
          showMessage("Please enter your Email address.", "error");
      }else{
        showMessage("Please Enter your Feedback.","error");
      }
  }
}

function showMessage(message, type) {
  var messageDiv = document.getElementById("ftmessage");
  messageDiv.textContent = message;
  messageDiv.style.display = "block";
}
 

document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;

  function showSlide(n) {
      slides.forEach(function(slide) {
          slide.classList.remove("active");
      });
      slides[n].classList.add("active");
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  showSlide(currentSlide);

  setInterval(nextSlide, 2000);
});

function showCalories(calories) {
  var caloriesDisplay = document.getElementById("caloriedisplay");
  caloriesDisplay.textContent = "Total Calories: " + calories;
}
