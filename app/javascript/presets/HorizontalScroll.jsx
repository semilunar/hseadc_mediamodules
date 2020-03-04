import React from 'react'
import Cover1 from '../../assets/images/cover1.png'
import Cover2 from '../../assets/images/cover2.png'
import Cover3 from '../../assets/images/cover3.png'
import Cover4 from '../../assets/images/cover4.png'
import Cover5 from '../../assets/images/cover5.png'

// export default class HorizontalScroll extends React.Component {
//   render() {
//     return (
//       <div className="Preset HorizontalScroll">
//         <div className="horizontal-scroll-wrapper rectangles">
//           <div>
//             <img src={Cover1} className="cover" />
//           </div>
//           <div>
//             <img src={Cover2} className="cover" />
//           </div>
//           <div>
//             <img src={Cover3} className="cover" />
//           </div>
//           <div>
//             <img src={Cover4} className="cover" />
//           </div>
//           <div>
//             <img src={Cover5} className="cover" />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

const HorizontalScroll = props => {
  return (
    <div className="Preset HorizontalScroll">
      <div className="horizontal-scroll-wrapper rectangles">
        <div>
          <img src={Cover1} className="cover" />
        </div>
        <div>
          <img src={Cover2} className="cover" />
        </div>
        <div>
          <img src={Cover3} className="cover" />
        </div>
        <div>
          <img src={Cover4} className="cover" />
        </div>
        <div>
          <img src={Cover5} className="cover" />
        </div>
      </div>
    </div>
  )
}

export default HorizontalScroll
