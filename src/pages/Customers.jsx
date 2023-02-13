import React from 'react'
import{ GridComponent, ColumnsDirective, ColumnDirective, 
  Page, Selection, Inject, Toolbar, Edit, Sort, Filter} from '@syncfusion/ej2-react-grids'
import { customersGrid, customersData } from '../data/dummy'
import {Header} from "../components"
const customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers" />
      <GridComponent
        width="auto"
        toolbar = {['Delete']}
        editSettings={{allowDeleting:true,allowEditing: true}}
        dataSource={customersData} 
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {customersGrid.map((item,index)=>(
            <ColumnDirective key = {index}{...item}/>
            
          ))}
        </ColumnsDirective>
        <Inject services={[ Page , Toolbar, Selection, Edit, Sort, Filter ]}/>
      </GridComponent>
    </div>
  )
}

export default customers