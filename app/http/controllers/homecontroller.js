const Digital = require('../../models/digital');


function homecontroller()
{
  return {
        async index(req,res)
      {
const products=await Digital.find()
//console.log(products);
return res.render('home',{ products: products})


        // Digital.find().then(function(products){
        //     console.log(products)
        //     res.render('home',{products:products})
        // })
          
      }
  }
}

module.exports=homecontroller