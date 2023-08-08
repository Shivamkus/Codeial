const User = require('../models/user');


module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title:'user profile'
    })
}


// render to signup page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: 'codial | sign Up'
    })
}


// render to sign In page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
      title:'codial | Sign In'
    })
}

// get the sign up data
module.exports.create = async function(req, res){
    console.log("We are at sign up");
    if (req.body.password != req.body.confirm_password){
        console.log(req.body.password + " " + req.body.confirm_password);
        return res.redirect('back');
  
    }
    try{
        const user = await User.findOne({email: req.body.email});
        if(user){
            console.log("User already exist")
            return res.redirect('back');
        }else{
            const newUser = await User.create(req.body);
            if(!newUser){
              console.error("Error in creating new User")
              return res.redirect('back');  
            }
            
            return res.redirect('/users/sign-in');
        }
    }catch(err){
        console.log(err)
    }
}







// // sign in
// module.exports.createSession = async function(req, res){
//      console.log('we are siging in');

//     // steps authanticate
//     // find user
//     User.findOne({email: req.body.email}, function(err, user){
//       if(err){console.log('error in finding user in siging in'); return}
//       // handele user find
//       if(user){
//         // handle password whic does'nt match
//         if(user.password != req.body.password){
//             return res.redirect('back');
//         }
//         // handle session creation
//         res.cookie('user_id', user.id);
//         return res.redirect('/users/profile');
//       }
//       else{
//         // handle user not found
//         return res.redirect('back')
//       }

//     });
// }


// second part

// sign in
module.exports.createSession = async function(req, res){
    console.log('we are siging in');

   // steps authanticate
   // find user
   try{
    const user =  await User.findOne({email: req.body.email});
    if(user){
        if(user.password != req.body.password){
            return res.redirect('back');
        }

        res.cookie('user_id', user.id);
        console.log('you are logged in sucessfully');
        return res.redirect('/users/profile');

    }
    else{
        return res.redirect('back');
    }

   }

   catch(err){
          console.log(err);
   }
}