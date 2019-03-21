// Footer.tsx
import React from 'react';

import PropTypes from 'prop-types';

interface FooterProps {
    year?: any; // optional
    company: any;
}

// functional/presentation component
// Create and Return V.dom
// SFC - Stateless Functional Component
const  Footer: React.SFC<FooterProps> = (props) => {
    
    return (
        <div>
            <hr />
            <p >Copyrights @{props.year}, {props.company} </p>
            {props.children}
        </div>
    )
}


// defaultProps is a keyword
Footer.defaultProps = {
    // when the props are not passed from parent
    company: 'Product App'
}

// ES6, check the data type at runtime
// propTypes is a keyword
Footer.propTypes = {
    year: PropTypes.number.isRequired, // mandatory
    company: PropTypes.string // optional
}


export default Footer;