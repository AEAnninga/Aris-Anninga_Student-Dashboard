import React from 'react';
import PieChart from './PieChart/PieChart';

const PersonalData = ({ studentData, index }) => {
    return ( 
        <div className='student-content-info-personal'>
            <h1>{studentData.name} {studentData.surname}</h1>
            
            <div className='student-content-info-personal-chart'>
                <div>
                    <img src={studentData.photo} alt='person'/>
                </div>
                <div className='student-content-info-personal-chart-pie'>
                    <div id='pie'>
                        <PieChart assignments={studentData.assignments} index={index}/>
                    </div>
                </div>
            </div>

            <section>
                <pre>
                    Phone:    {studentData.phone}
                </pre>
                <pre>
                    Email:    {studentData.email}
                </pre>
                <pre>
                    Jobtitle: {studentData.jobtitle}
                </pre>
                <pre>
                    Country:  {studentData.country}
                </pre>
            </section>
        </div> 
    );
};

export default PersonalData;