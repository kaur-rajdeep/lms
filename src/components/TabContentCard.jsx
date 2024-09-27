import React from 'react'
import './TabContentCard.css'

const HexagonGridItem = ({ backgroundImage, title, description }) => (
    
      <div className="hexagon" style={{ backgroundColor: '#11181a'}}>
            <img src={backgroundImage} style={{margin:'-10px -20px', height:'40%'}}/>
          <span style={{height:'60%'}}>
            <h4>{title}</h4>
            <p style={{ padding: '20px 40px', fontSize:'12px' }}>{description}</p>
          </span>
      </div>
    
  );

export const TabContentCard = (props) => {
    return (
        <div id={props.id} className="tab-pane fade">
          <h1>{props.title}</h1>
          <div className="intro-sec">
            <p>{props.intro}</p>
          </div>
          <div className="items-section" >
            <h1>Tools and resources</h1>
            <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', alignItems:'center', justifyItems:'center'
            }}>
              {props.tools.map((tool, index) => (
                <HexagonGridItem key={index} {...tool} />
              ))}
            </div>
          </div>
        </div>
      )
}
