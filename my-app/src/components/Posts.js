import React, {Component} from 'react';
import Post from './Post';
export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="asd" src="http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg"/>
                <Post  alt="new nature" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlOx1_3bW6I6OVAbMaVZghAaz0LAQa3H4C2T4xJPy_qHvVfOxyg"/>
            </div>
        )
    }
}