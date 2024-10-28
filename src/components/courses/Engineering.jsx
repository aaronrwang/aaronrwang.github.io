import './courses.css';
import { eg } from '../data/courses/eg.js'
import { useEffect, useState, React } from 'react';
export default function ComputerScience({ onClick, globalActiveID }) {
    const [activeId, setActiveId] = useState(globalActiveID);
    useEffect(() => {
        setActiveId(globalActiveID);
    }, [globalActiveID]);
    function onSelect(id) {
        setActiveId(id);
        onClick(id);
    }
    return (
        <div className="qwe qws">
            <div className="course-box">
                <ul>
                    {eg.map((item, index) => (
                        <li key={item.id} className={`${activeId === item.id ? 'active' : ''} ${item.grade === 'IP' ? 'current' : item.grade === 'N/A' ? 'future' : item.grade === 'Pass' ? 'tested' : ''} ${'abroad' in item ? 'london' : ''}`} ><a id={item.id} onClick={(event) => onSelect(event.target.id)}>{item.name}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}