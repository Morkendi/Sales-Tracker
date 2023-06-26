


const newSaleHandler = async(event)=>{
    event.preventDefault();

    const product = document.getElementById('product')
    const quantity = document.getElementById('quantity')
    const client = document.getElementById('client_name')

    //todo esto para quantity y product
    //filtras los products, split(,)
    //parsear pasar de string a numero,
    //pushear los valores numericos a un nuevo array 

    //hacer un for loop para postear cada sale product individualmente

    //array
  
    
    if (product && quantity && client) {
        //for arr
        const response = await fetch('/api/saleproduct/', {
            method: 'POST',
            body: JSON.stringify({ product, quantity}),
            headers: { 'Content-Type': 'application/json' },
          });

          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to submit your sale');
          }
      }
    };

    //el otro post a sale


document.getElementById('newSale').addEventListener("click", newSaleHandler)

get