import React from 'react';


const Register =({onRouteChange})=>{
    return(
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <article className="pa4 black-80">
        <form action="sign-up_submit" method="get" accept-charset="utf-8">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlfor="name">Name</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="tex" name="name"  id="name"/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlfor="email-address">Email address</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlfor="password">Password</label>
              <input 
                className="b pa2 input-reset ba bg-transparent  hover-bg-black hover-white w-100" 
                type="password" name="password"  id="password" />
            </div>
          </fieldset>
          <div class="mt3">
            <input 
                onClick={()  => onRouteChange('home')}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
                type="Submit" 
                value="Register"
              />
          </div>
          
        
        </form>

      </article>
      </article>
    
   
      );

  }



export default Register;