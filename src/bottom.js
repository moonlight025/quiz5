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
    // changeText=(event)=>{
    //     console.log(event.target)
    //     event.target.innerText=event.target.innerText+"被點了"
    //     this.handleClick();
    //   }
    multiButton=(num)=>{
        var text=this.state.counter;
        var output=[];
            output.push(<button onClick={this.handleClick}>按鍵 你點了{text}次</button>)
        return output;
      }
    render() {     
        return (       
        <div> 
            {this.multiButton(10)};                      
        </div>     
        );   
    }    
    }  
    
    export default Bottom;