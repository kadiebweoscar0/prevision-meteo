import React from 'react'
import ParagraphDefault from './paragraphDefault'
import ImageDefaul from './imageDefaul'

export default function PrevisionComponent() {
  return (
    <>
        previsionComponent
        <div>
          <span>
            <ParagraphDefault valueText='karachi' paraDefaultStyle='style-title-city' />
          </span>
          <span>
            <ParagraphDefault valueText='Monday' paraDefaultStyle='style-day' />
            <ParagraphDefault valueText='7:00 AM' paraDefaultStyle='style-times' />
          </span>
        </div>
        <span>
          <ImageDefaul urlImage='#' />
        </span>

        <div>
          <span>
            <ParagraphDefault valueText='22° C' paraDefaultStyle='style-degre' />
          </span>
          <span>
            <ParagraphDefault valueText='GOOD MORNING' paraDefaultStyle='style-salutaions' />
          </span>
          <span>
            <ParagraphDefault valueText='WASIM' paraDefaultStyle='style-WASIM' />
          </span>
        </div>
        <footer>
          <div>
            <ImageDefaul urlImage='#' />
            <ParagraphDefault valueText='SUNRISE' paraDefaultStyle='style-sunrise' />
            <ParagraphDefault valueText='7:00' paraDefaultStyle='style-times-foot' />
          </div>
          <div>
            <ImageDefaul urlImage='#' />
            <ParagraphDefault valueText='WIND' paraDefaultStyle='style-wind' />
            <ParagraphDefault valueText='4m/s' paraDefaultStyle='style-m/s-foot' />
          </div>
          <div>
            <ImageDefaul urlImage='#' />
            <ParagraphDefault valueText='TEMPERATURE' paraDefaultStyle='style-sunrise' />
            <ParagraphDefault valueText='23°' paraDefaultStyle='style-degre-foot' />
          </div>
        </footer>



        
    </>
  )
}
