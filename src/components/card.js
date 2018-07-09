imoprt React, { component } 'react';

import Input from './input'; 

class Card extends Component {
    render() {
        return (
            <div className="card">
                { input('Color') }
                { input('Plural Noun') }
            </div>
        )
    }
}

export default Card;