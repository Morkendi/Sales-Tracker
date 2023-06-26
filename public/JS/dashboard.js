


const newSaleHandler = async(event)=>{
    event.preventDefault();

    const product = document.getElementById('product')
    const quantity = document.getElementById('quantity')
    const client = document.getElementById('client_name')
    
    if (product && quantity && client) {
        const response = await fetch('/api/post/', {
            method: 'POST',
            body: JSON.stringify({ product, quantity, client }),
            headers: { 'Content-Type': 'application/json' },
          });

          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to submit your sale');
          }
      }
    };








document.getElementById('newSale').addEventListener("click", newSaleHandler)