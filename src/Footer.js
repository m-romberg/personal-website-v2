import React from 'react';
import { CDBContainer, CDBBox } from 'cdbreact';

// export const Footer = () => {
//   return (
//     <CDBContainer className="shadow">
//       <CDBBox
//         display="flex"
//         justifyContent="between"
//         alignItems="center"
//         className="mx-auto py-4 flex-wrap"
//         style={{ width: '80%' }}
//       >
//         <CDBBox display="flex" alignItems="center">
//           <a href="/" className="d-flex align-items-center p-0 text-dark">
//             <img
//               alt="logo"
//               src="https://fontmeme.com/permalink/230522/19188199589ae0a39c5b1f7eda6bd879.png"
//               width={"200px"}
//             />
//             <span className="ms-4 h5 mb-0 font-weight-bold">
//               Software Engineer.
//             </span>
//           </a>
//           <small className="ms-2">
//             &copy; Designed and built by Madelyn Romberg
//           </small>
//         </CDBBox>
//       </CDBBox>
//     </CDBContainer>
//   );
// };

export const Footer = () => {
  return (
    <CDBContainer className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '100%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <small className="ms-2">
            &copy; Designed and built by Madelyn Romberg
          </small>
        </CDBBox>
      </CDBBox>
    </CDBContainer>
  );
};