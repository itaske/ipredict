import React, { Component } from 'react'

class SignupForm extends Component
{

    constructor(props)
    {
        super(props);
        
        this.state={
            name:"Hello",
            username:"",
            email:"",
            phoneNumber:"",
            country:"Nigeria"

        }
        this.submitForm=this.submitForm.bind(this);

    }

    submitForm()
    {
        console.log('Started Submitting...');
        console.log(this.state.name);
        console.log(this.state.email);


    }

    render(){
        return(
            <div class="row">
            <div class="col-sm-12 col-md-4 mx-auto d-block  margin-bottom-5"> 
                <label>{this.state.name}
                </label>
                    <input type="text" class="form-control margin-bottom-1" placeholder="Name" id="name" name="name" value={this.state.name}  onChange={e=>this.setState({name:e.target.value}).name}/>
                    <input type="text" class="form-control margin-bottom-1" placeholder="Username" id="username" name="username" onChange={this.state.username} />
                    <input type="text" class="form-control margin-bootom-1" placeholder="Email" id="email" name="email" onChange={this.state.email}/>
                    <input type="text" class="form-control margin-bottom-1" placeholder="Phone Number" id="phoneNumber" name="phoneNumber" onChange={this.state.phoneNumber}/>
                    <select class="form-control margin-bottom-1" id="country" name="country" value={this.state.country}>
                    <option>Nigeria</option>
                    <option>Ghana</option>
                    </select>
                    <input type="password" class="form-control margin-bottom-1" placeholder="Password" onChange={this.state.password} />
                    <input type="password" class="form-control margin-bottom-1" placeholder="Confirm Password" />
                    <input type="submit" class="btn btn-block btn-purple" value="SIGN UP" onclick={this.submitForm} />
                

            </div>
        </div>



        )
    }

}

export default SignupForm;