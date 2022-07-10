import React from 'react';
import './SidebarFunction.css'

interface SidebarFunctionProps {
    text: string
    Icon: React.FC
    active: boolean
}

function SidebarFunction(props: SidebarFunctionProps) {
    return (
        <div className={`sidebarFunction ${props.active && 'sidebarFunction--active'}`}>
            <props.Icon/>
            <h2>
                {props.text}
            </h2>
        </div>
    );
}

export default SidebarFunction;