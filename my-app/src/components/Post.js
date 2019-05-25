import React, {Component} from 'react';
import User from './User';
export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
                    alt="prince"
                    name="harry_the_prince"
                    min
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    console lorem go alt helo lorem ipus                   
                </div>
            </div>
        )
    }
}