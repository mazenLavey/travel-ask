declare module '*.png' {
    const value: any;
    export default value;
}

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}


declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}