// import React from "react";

// export default ({ videoId }) => {
//   if (!videoId) {
//     return (
//       <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
//         Search for a video
//       </p>
//     );
//   }
//   return (
//     <div className="video-player">
//       <iframe
//         title={videoId}
//         className="video-iframe"
//         src={`https://www.youtube.com/embed/${videoId}`}
//       />
//     </div>
//   );
// };


// import React from 'react';
// import YouTube from 'react-youtube';
 
// export default (props) => {
//     const _onReady = (event) => {
//         // access to player in all event handlers via event.target
//         event.target.pauseVideo();
//       }

//     const opts = {
//       height: '390',
//       width: '640',
//       playerVars: {
//         // https://developers.google.com/youtube/player_parameters
//         autoplay: 1,
//       },
//     };
 
//     return <YouTube videoId={props} opts={opts} onReady={_onReady} />;
//   }

// import HoverVideoPlayer from 'react-hover-video-player';
 
// export default () => {
//   return (
//     <HoverVideoPlayer
     
//       pausedOverlay={
//         <img src="thumbnail-image.jpg" alt="" />
//       }
//       loadingOverlay={
//         <div className="loading-spinner-overlay" />
//       }
//     />
//   );
// }


// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
 
// export default ({ videoId }) => {
//   return(
//     <Popup trigger={<button> Trigger</button>} position="right center">
//       <iframe width="560px" height="315px" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     </Popup>
// );
//   }

// export default () => (
//   <Popup
//     trigger={<button className="button"> Open Modal </button>}
//     modal
//     nested
//   >
//     {close => (
//       <div className="modal">
//         <button className="close" onClick={close}>
//           &times;
//         </button>
//         <div className="header"> Modal Title </div>
//         <div className="content">
//           {' '}
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
//           Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
//           delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
//           <br />
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
//           commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
//           explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
//         </div>
//         <div className="actions">
//           <Popup
//             trigger={<button className="button"> Trigger </button>}
//             position="top center"
//             nested
//           >
//             <span>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
//               magni omnis delectus nemo, maxime molestiae dolorem numquam
//               mollitia, voluptate ea, accusamus excepturi deleniti ratione
//               sapiente! Laudantium, aperiam doloribus. Odit, aut.
//             </span>
//           </Popup>
//           <button
//             className="button"
//             onClick={() => {
//               console.log('modal closed ');
//               close();
//             }}
//           >
//             close modal
//           </button>
//         </div>
//       </div>
//     )}
//   </Popup>
// );


// USE FROM HERE IF HOVER DOES NOT WORK
import React from "react";
const Videoplayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        No project ideas yet... :(
      </p>
    );
  }
  return (
    <div className="video-player">
       <iframe 
        width="inherit" 
        height="180px" 
        src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen="allowfullscreen">
       </iframe>
    </div>
  );
};

export default Videoplayer;

// import 'node_modules/react-modal-video/scss/modal-video.scss';
// import React,{useState} from 'react'
// import ReactDOM from 'react-dom'
// import ModalVideo from 'react-modal-video'
 
// const App = ({ videoId, index, snippet, changeModalState }) => {
//   function getCss(imageurl) {
//     const _styles = {
//       backgroundImage: `url(${imageurl})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center center",
//       height: "180px",
//       position: "relative"
//     };
//     return _styles;
//   }
 
    
 
//     return (
//         <>
//             <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
//             <div className="video-player" >
//               <div style={getCss(snippet)} key={index} onClick={()=> setOpen(true)}></div>
//             </div>
            
//         </>
//     )
// }
 
// ReactDOM.render(
//   <App />,
//     document.getElementById('root')
// )
 
// export default App;
  
