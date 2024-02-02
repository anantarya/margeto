
document.addEventListener('DOMContentLoaded', function () {
  // Fetch data from API
  fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json')
    .then(response => response.json())
    .then(data => {
      let product = data.product;

      // Update HTML content with fetched data
      document.getElementById('product-title').innerText = product.title;
      document.getElementById('product-description').innerHTML = product.description;
     // document.getElementById('vendor').innerText = "Vendor: " + product.vendor;
      //document.getElementById('product-type').innerText = "Product Type: " + product.product_type;
      document.getElementById('price').innerText = "Price: " + product.price;
      document.getElementById('compare-at-price').innerText = "Compare At Price: " + product.compare_at_price;

      // Update Color Options
      let colorOptions = product.options.find(option => option.name === 'Color').values;
      
     
     let yellow=colorOptions[0].Yellow;
     let green=colorOptions[1].Green;
     let blue=colorOptions[2].Blue;
     let pink=colorOptions[3].Pink;
     let colorOptionsContainer = document.querySelectorAll('.rectangle-container');
     for(let i=0;i<4;i++)
     {
        if(i===0)
        {
            console.log(typeof(yellow))
            colorOptionsContainer[i].style.backgroundColor=`${yellow}`; 
        }
        if(i===1)
        {
            
            colorOptionsContainer[i].style.backgroundColor=`${green}`; 
        }
        if(i===2)
        {
            console.log(typeof(yellow))
            colorOptionsContainer[i].style.backgroundColor=`${blue}`; 
        }
        if(i===3)
        {
            console.log(typeof(yellow))
            colorOptionsContainer[i].style.backgroundColor=`${pink}`; 
        }
     }
    

     
      // Update Size Options
    //   let sizeOptions = product.options.find(option => option.name === 'Size').values;
    let sizeOptions=product.options[1].values;
    
    console.log(sizeOptions);
   
      let sizeOptionsContainer = document.querySelectorAll('.choose-a-size');
      
      //console.log(sizeOptionsContainer);
      for(let i=0;i<5;i++)
      {
       //console.log(sizeOptions[i]);
        sizeOptionsContainer[i].innerHTML =  sizeOptions[i];
       // console.log(sizeOptionsContainer[i]);
      }
      

      // Update Images
      let imagesContainer = document.getElementById('product-images');
      product.images.forEach(image => {
        let imgElement = document.createElement('img');
        imgElement.src = image.src;
        imagesContainer.appendChild(imgElement);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
