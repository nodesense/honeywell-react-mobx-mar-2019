// Footer.tsx
import React from 'react';

interface FooterProps {
    year: number;
    company: string;
}

// functional/presentation component
// Create and Return V.dom
function Footer(props: FooterProps) {
    return (
        <div>
            <hr />
            <p>Copyrights @{props.year}, {props.company} </p>
        </div>
    )
}

export default Footer;