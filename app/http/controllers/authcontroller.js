const User=require('../../models/user')
function authcontroller()
{
  return {
      login: function(req,res)
      {
          res.render('auth/login')
      },

        register: function(req,res)
        {
            res.render('auth/register')
        },
        postregister:function(req,res)
        {
          const {name,email,password}=req.body
          //validate request
              if(!name || !email ||!password){
                req.flash('error','All Fields are required')
                req.flash('name',name)
                req.flash('email',email)
                return res.redirect('/register')
              }
               console.log(req.body)
        }
  }
}

module.exports=authcontroller