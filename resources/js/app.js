import axios from 'axios'
import Noty from  'noty'

let addTocart=document.querySelectorAll('.add-to-cart')
let cartcounter=document.querySelector('#cartcounter')

function updatecart(product)
{
    axios.post('/update-cart',product).then(res=>{
        console.log(res)
        cartcounter.innerText=res.data.totalQuty;
        new Noty({
            type:'success',
            timeout:1000,
            text:'Item Added To Cart',
            progressBar:false
    
        }).show();
    }).catch(err=>{
        new Noty({
            type:'error',
            timeout:1000,
            text:'something went wrong',
            progressBar:false
    
        }).show();
    })
}


addTocart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
     

        let product=JSON.parse( btn.dataset.product)
        //console.log(product);
        updatecart(product)
    })

})