import React, {Component} from 'react';

class PredictionRow extends Component
{
    constructor(props)
    {
        super(props);
        this.changedText=this.changedText.bind(this);
    }
    changedText()
    {
        console.log("Hello you clicked me");

    }

    render()
    {
            
        return(
              
              
               <tr class="table-active text-center text-uppercase font-weight-bold text-black" style={{"width":"100%"}}>
                   <td style={{'background-color': "white"}}> <label>{this.props.fixture.home} </label>
                    </td>
                   <td style={{'background-color': "white"}}>
                        <img src={'../images/'+this.props.fixture.league+'/'+this.props.fixture.home+'.png'} class="rounded-circle club-logo" width="30px" height="40px" />
                   </td>
                   <td style={{'background-color': "white"}}>
                       <input type='submit'
                       size="3" required="true" placeholder="H:A"  title="The score must be in this format [2:1]" class="bg-red bold text-center" id="juvi" disabled={this.props.fixture.played} value={this.props.score}
                       onClick={this.changedText}/>
                         
                    </td>
                   <td style={{'background-color': "white"}}>
                       <span class="text-uppercase">  <img src={'../images/'+this.props.fixture.league+'/'+this.props.fixture.away+'.png'} width="30px" height="40px" /> </span>
                   </td>
                    <td style={{'background-color': "white"}}> <label >{this.props.fixture.away} </label>
                       
                    </td>

                </tr>
                  
             )}
        
        

}

export default PredictionRow;