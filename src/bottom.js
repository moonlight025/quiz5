import React from 'react';
class Bottom extends React.Component {   
    constructor(props) {     
        super(props);     
        this.state = {counter:0};
        this.handleClick=this.handleClick.bind(this)
    }   
    handleClick(event){
        this.setState({counter:this.state.counter+1});
        console.log(this.state);
    }
    changeText=(event)=>{
        console.log(event.target)
        event.target.innerText=event.target.innerText+"被點了"
        this.handleClick();
      }
    multiButton=(num)=>{
        var output=[];
        output.push(<button onClick={this.changeText}>按鍵</button>)
        return output;
      }
    render() { 
        var text=this.state.counter;    
        return (       
        <div> 
            {this.multiButton(10)};                
            <p>
                你點了{text}次.
            </p>       
        </div>     
        );   
    }    
    }  
    
    export default Bottom;