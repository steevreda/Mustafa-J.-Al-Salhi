import React from 'react';
import Header from '../Header/Header'
import Welcome from '../Welcom/Welcom'
class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Welcome/>
            </div>
        )
    }
}
export default Home;