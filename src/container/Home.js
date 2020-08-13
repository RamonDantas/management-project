import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';

class Home extends Component {
    
    homeCardReleases = {
        title: 'Releases',
        text: 'Manage Releases',
        action: () => alert('Releases Clicked')
    }
    homeCardBacklog = {
        title: 'Backlog',
        text: 'Manage Backlog',
        action: () => alert('Backlog Clicked')
    }
    homeCardSprints = {
        title: 'Sprints',
        text: 'Manage Sprints',
        action: () => alert('Sprints Clicked')
    }

    render() { 
        return ( 
            <div className="text-center mt-3">
                <div className="row">
                    <HomeCard {...this.homeCardReleases} />
                    <HomeCard {...this.homeCardBacklog} />
                    <HomeCard {...this.homeCardSprints} />
                </div>
            </div>
         );
    }
}
 
export default Home;