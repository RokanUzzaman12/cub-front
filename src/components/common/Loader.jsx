// export default function Spinner() {
//   return (
//     <div
//       style={{
//         width: '100%',
//         height: '100%',
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         marginTop: '2rem',
//       }}
//     >
//       <div className='lds-ring'>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>

//       <style jsx>{`
//         .lds-ring,
//         .lds-ring div {
//           box-sizing: border-box;
//         }
//         .lds-ring {
//           display: inline-block;
//           position: relative;
//           width: 80px;
//           height: 80px;
//         }
//         .lds-ring div {
//           display: block;
//           position: absolute;
//           width: 64px;
//           height: 64px;
//           margin: 8px;
//           border: 8px solid var(--rt-primary);
//           border-radius: 50%;
//           animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
//           border-color: var(--rt-primary) transparent transparent transparent;
//         }
//         .lds-ring div:nth-child(1) {
//           animation-delay: -0.45s;
//         }
//         .lds-ring div:nth-child(2) {
//           animation-delay: -0.3s;
//         }
//         .lds-ring div:nth-child(3) {
//           animation-delay: -0.15s;
//         }
//         @keyframes lds-ring {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

const Loader = () => {
  return (
    <div className="book-loader">
      <div className="shelf">
        <div className="book book-1"></div>
        <div className="book book-2"></div>
        <div className="book book-3"></div>
      </div>
      <p className="loader-text">
        Loading knowledge
        <span className="dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </p>

      <style>{`
        .book-loader {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 250px;
          background: #f0f4f9;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .shelf {
          display: flex;
          gap: 10px;
          align-items: flex-end;
        }

        .book {
          width: 15px;
          height: 35px;
          background-color: #7a0b0b;
          animation: slideUp 1.2s ease-in-out infinite;
          border-radius: 3px;
          box-shadow: 0 2px 8px rgba(122, 11, 11, 0.15);
        }

        .book-1 {
          animation-delay: 0s;
          background-color: #8b1414; /* deep red */
        }

        .book-2 {
          animation-delay: 0.2s;
          background-color: #c42b2b; /* medium red */
        }

        .book-3 {
          animation-delay: 0.4s;
          background-color: #ff5a5a; /* light red */
        }

        .loader-text {
          margin-top: 12px;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #0b5a3b;
          background: linear-gradient(90deg, #0b5a3b, #1fa97a, #7be6b3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: fadeInText 2.5s ease forwards;
          opacity: 0;
          text-transform: uppercase;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.04);
          display: block;
          width: 100%;
          text-align: center;
        }

        .dots {
          display: inline-flex;
          gap: 3px;
          margin-left: 5px;
        }

        .dots span {
          font-weight: 900;
          font-size: 22px;
          color: #1fa97a;
          opacity: 1;
          animation-name: blink;
          animation-duration: 1.4s;
          animation-iteration-count: infinite;
          animation-fill-mode: forwards;
        }

        .dots span:nth-child(1) {
          animation-delay: 0s;
        }
        .dots span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dots span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes slideUp {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeInText {
          to {
            opacity: 1;
          }
        }

        @keyframes blink {
          0%,
          20% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
