function cartcontroller()
{
  return {
      index: function(req,res)
      {
        res.render('customer/cart')
      },
      update(req,res){

// for the fisrst time creating cart and adding basic objct structure

if(!req.session.cart)
{
  req.session.cart={
    items:{},
    totalQuty:0,
    totalprice:0
  }
}
  let cart= req.session.cart
 
  // check if items does not exist in cart

  if(!cart.items[req.body._id])
  {
    cart.items[req.body._id]={
      items:req.body,
      qty:1
    }
    cart.totalQuty=cart.totalQuty+1;
    cart.totalprice=cart.totalprice+req.body.price
  }
     else{
       cart.items[req.body._id].qty= cart.items[req.body._id].qty+1
       cart.totalQuty=cart.totalQuty+1
       cart.totalprice=cart.totalprice+req.body.price
     }


        return res.json({totalQuty:req.session.cart.totalQuty})
      }
  }
}

module.exports=cartcontroller