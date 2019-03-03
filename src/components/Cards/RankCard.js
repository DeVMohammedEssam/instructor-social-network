import React, { Component } from 'react'

export default ({
  icon="fas fa-star",

  ...props

})=> (
   
          <div className="card__rank">
            <table className="table card__rank__table">
            <thead>
              <tr>
              {props.heads.map(head=>(<th>{head}</th>))}
              </tr>
            </thead>
            <tbody>
                  {props.data_row.map((data,index_row)=>(
                    <tr className={`${index_row<props.top_index?"card__rank__table__top":""}`}>
                   <td>{index_row+1}</td>
                      {data.map(inside_data=>(
                        <td>  
                          {inside_data}
                        </td>
                      ))}
                         {icon&&index_row<props.top_index?<i className={`${icon}`}></i>:""}
                    </tr>
                  ))}
            </tbody>
              
            </table>
          </div>

    )

