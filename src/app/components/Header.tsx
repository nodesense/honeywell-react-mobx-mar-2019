// Header.tsx
import React from 'react';

interface HeaderProps {
    title: string;
}
 
// SFC Stateless Functional component

// ES6 style
// functional component
// props are passed as function argument
const Header: React.SFC<HeaderProps> = (props) => {
    // props are immutable
    // error props.title = 'test'; 
    return (
        <div>
            <h2>{props.title}</h2>
            <hr />
        </div>
    )
}

export default Header;