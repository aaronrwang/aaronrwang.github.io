import './courses.css';
import { math } from '../data/courses/math.js'
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
                    {math['column-1'].map((item, index) => (
                        <li key={item.id} className={`${activeId === item.id ? 'active' : ''} ${item.grade === 'IP' ? 'current' : item.grade === 'N/A' ? 'future' : item.grade === 'Pass' ? 'tested' : ''}`} ><a id={item.id} onClick={(event) => onSelect(event.target.id)}>{item.name}</a></li>
                    ))}
                </ul>
            </div>
            <div className="course-box">
                <ul>
                    {math['column-2'].map((item, index) => (
                        <li key={item.id} className={`${activeId === item.id ? 'active' : ''} ${item.grade === 'IP' ? 'current' : item.grade === 'N/A' ? 'future' : item.grade === 'Pass' ? 'tested' : ''}`} ><a id={item.id} onClick={(event) => onSelect(event.target.id)}>{item.name}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}