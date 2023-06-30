import React from 'react';

const Item = ({item}) => {
    return (
        <div id={"Item_" + item} className="Item_container">
            <img src="https://images.pexels.com/photos/17328461/pexels-photo-17328461/free-photo-of-stairway-to-a-heavenly-view.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>

        </div>

    );
};

export default Item;