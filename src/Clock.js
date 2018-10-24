import React,{Component} from 'react';
import Switch from './Switch';
import Display from './Display';

class Clock extends Component{
    state = {
        currentTime : '__:__:__',
        currentDate : '___ ___ __ ____',
        isChecked : true
    }

    refreshTime= () => {
        var date = new Date();
        this.setState({
            currentTime : date.toLocaleTimeString(),
            currentDate : date.toDateString()
        });
    }

    handleChange = () => {
        this.setState({ isChecked : !this.state.isChecked})
    }

    timeInterval = setInterval(this.refreshTime,1000);

    render(){
        const{currentTime,currentDate,isChecked} = this.state;

        return(
            <div>
                <Switch isChecked={isChecked} handleChange={this.handleChange} />
                <Display currentTime={currentTime} currentDate={currentDate} isChecked={isChecked} />   
            </div>
        )
    }
}

export default Clock;