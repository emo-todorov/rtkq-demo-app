import React, { useState } from 'react';

const ExpandablePanel = ({ children, header }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <div className="panel-header">
                {header}
                <button className='expandable-button' onClick={() => setExpanded(!expanded)}>
                    {expanded ? <span>🔻</span> : <span>◀</span>}
                </button>
            </div>
            {
                expanded && <div className="panel-body">
                    {children}
                </div>
            }
        </div>
    );
};

export default ExpandablePanel;