import React from 'react';
import HomeCarousel from './HomeCarousel';


class Home extends React.Component{



    render(){
        return(
            <div style={{marginTop: '20px'}}>
                <h1>Welcome to a better way of eating!</h1>
                <HomeCarousel/>
            </div>
        )
    }
}

export default Home;