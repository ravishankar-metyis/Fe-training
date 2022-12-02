
 async function getProducts(){
   return await fetch('https://fakestoreapi.com/products')
                              .then(res=>res.json())
                              //.then(json=> console.log(json));  
}

async function dispProducts(){
   const currentList = await getProducts(); //Fetched products
    let showDiv = $("#showdata");
    for(i=0;i<currentList.length;i++){
    const product = (currentList[i]);
    let category =  product.category;
    let description =  product.description;
    let id =  product.id;
    let image =  product.image;
    let price =  product.price;
    let rating =  product.rating;
    let title =  product.title;

    showDiv.append(`Title: ${title} \n 
                    Image: <img src="${image}"></img> \n 
                    Description: ${description} \n
                    Product-ID: ${id} \n
                    `  )
    }
}
         $(document).ready(function() {
         	$('#clickme').click(function(){
                console.log('Click registered');
                dispProducts();
                console.log('function has been executed');
          	});
          });