import React from 'react';
import User from './User';

export default function Users() {
    return (
       <div className="right">
             <User 
                    src="https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
                    alt="prince"
                    name="harry_the_prince"
                />
           <div className="users__block">
                 <User 
                    src="https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
                    alt="prince"
                    name="harry_the_prince4"
                    min
                />
                 <User 
                    src="https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
                    alt="prince"
                    name="harry_the_prince3"
                    min
                />
                 <User 
                    src="https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
                    alt="prince"
                    name="harry_the_prince2"
                    min
                />
                 <User 
                    src="https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
                    alt="prince"
                    name="harry_the_prince1"
                    min
                />
           </div>
       </div>
    )
}