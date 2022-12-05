
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

    showDiv.append(`<div class="card col-4 product shadow p-3 mb-5 bg-body rounded" id="${id}" style="width: 18rem;">
                      <img  src="${image}" class="card-img-top "></img>  
                      <div class="card-body">
                        <h5 class="card-title overflow-hidden ">${title}</h5>
                        <!--<p class="card-text overflow-hidden " style="text-overflow: ellipsis;">${description}</p>-->
                        <span>Rating - ${JSON.stringify(rating.rate)}</span> </br> 
                        <span>Reviews - ${JSON.stringify(rating.count)}</span>  
                      </div>
                    </div>`  )
    }
}

//Show Description on mouse HOVER
/*function hoverDesc{
let a ='sfsf';
}*/
         $(document).ready(function() {
                dispProducts();
         	      $('#clickme').click(function(){
                console.log('Click registered');
                dispProducts();
                console.log('function has been executed');
          	});


          });