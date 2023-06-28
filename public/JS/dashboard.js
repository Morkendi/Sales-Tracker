
function listPicker() {  
  let mylist = document.getElementById("myList");  
  document.getElementById("client_name").value = mylist.options[mylist.selectedIndex].getAttribute('data-id'); 
}  

function salePicker() {  
  let mylist = document.getElementById("mySaleList");  
  document.getElementById("sale_name").value = mylist.options[mylist.selectedIndex].getAttribute('data-id'); 
}  



const newSaleHandler = async(event)=>{
    event.preventDefault();

    
    const client_id = document.getElementById('client_name').value.trim();

    if(client_id){
      const response = await fetch('/api/sales/', {
        method: 'POST',
        body: JSON.stringify({client_id}),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
      if (response.ok) {
        console.log('post')
        document.location.reload();
      } else { 
        alert('Failed to submit your sale');
      }
      }
    };

const newOrderHandler= async (event)=>{
  event.preventDefault();

  let product = document.getElementById('product').value.trim();
  let quantity = document.getElementById('quantity').value.trim();
  const sale_id = document.getElementById('sale_name').value.trim();

  let productArr = product.split(',')
    let quantityArr = quantity.split(',')

    let parsedProdArr = [];
    let parsedQuantArr = [];
    let parsedprod;
    let parsedquant;

    for(let i=0; i<productArr.length; i++){
      parsedprod = parseInt(productArr[i])
      parsedquant = parseInt(quantityArr[i])
      parsedProdArr.push(parsedprod)
      parsedQuantArr.push(parsedquant)
    }
  
    let prod;
    let quant;
    if(product && quantity && sale_id){
      for(let i=0; i<parsedProdArr.length;i++){
      prod= parsedProdArr[i];
      quant = parsedQuantArr[i];
      const response = await fetch('/api/saleProducts/', {
              method: 'POST',
              body: JSON.stringify({ prod, quant, sale_id}),
              headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
              document.location.replace('/dashboard');
            } else {
              alert('Failed to submit your Order');
            }
      }
    }
}
document.getElementById('newSale').addEventListener("click", newSaleHandler)
document.getElementById('newOrder').addEventListener("click", newOrderHandler)
