import React from 'react'

import countPercent from '../../lib/percentage'

const sequence = [
    'bar-chart first',
    'bar-chart second',
    'bar-chart third',
    'bar-chart fourth',
    'bar-chart fifth',
    'bar-chart sixth',
    'bar-chart seventh',
    'bar-chart eighth',
    'bar-chart ninth',
    'bar-chart tenth'
];

const BarChart = ({results, answered}) => (
    <div className="survey-results__graph">

    {results.map((result, i) => 
        <div className="bar-chart__container" key={i + ':' + countPercent(result.value, answered) + '-' + Math.random(1000)}>
            <div className={sequence[i]} data-total={countPercent(result.value, answered)} >
			    <span className="bar-chart__inner" style={{'width':countPercent(result.value, answered) + '%'}}>
                    <span className="bar-chart__text">{countPercent(result.value, answered)}%</span>
                </span>				
		    </div>  
        </div>    
    )}

	</div>
)

export default BarChart;