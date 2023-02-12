import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/contextProvider';

const stacked = ({width,height}) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      id = "stack chart"
      chartArea={{border:{ width:0 }}}
      tooltip={{ enable : true }}
      legendSettings={{ background:'white' }}
    > 
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]}  />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index) => 
          <SeriesDirective key={index}{...item}/>
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
    // <p>Stacked</p>
  )
}

export default stacked