// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span').innerText
  subtotal = parseFloat(price) * parseFloat(quantity)
  product.querySelector('.subtotal span').innerText = subtotal
  
  return subtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
/*   const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  count = []
  const ninja = document.querySelectorAll('.product').forEach((product) => {
    count.push(updateSubtotal(product)) 
  })
  
  // ITERATION 3
 
  document.querySelector('#total-value span').innerText = count.reduce((accumulator, element) => accumulator + element, 0);
 
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove()
  calculateAll();


}
console.log(document.getElementById('create'))
// ITERATION 5

function createProduct() {
  //... your code goes here
  const cart = document.querySelector("#cart tbody");
  const product = document.querySelector("#cart tbody tr");
  const newProduct = product.cloneNode(true);

  const name = newProduct.querySelector(".name span");
  const newName = document.querySelector(".create-product td input");
  name.innerText = newName.value;

  const price = newProduct.querySelector(".price span");
  const newPrice = document.querySelectorAll(".create-product td input")[1];
  price.innerText = newPrice.value;

  // const newPrice;
  cart.appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn-remove').forEach((element) => {
    element.addEventListener('click', removeProduct);
  });
  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);

});
