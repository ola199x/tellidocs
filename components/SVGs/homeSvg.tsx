import React from "react";

const HomeSvg = ({ active }: { active: any }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.55 7.79399C17.5495 7.79358 17.5491 7.79303 17.5487 7.79262L10.2061 0.450303C9.89309 0.137192 9.47698 -0.0351562 9.03437 -0.0351562C8.59175 -0.0351562 8.17565 0.137192 7.86254 0.450303L0.523793 7.78891C0.521321 7.79138 0.518711 7.79399 0.516377 7.79646C-0.126325 8.44287 -0.125226 9.49166 0.519535 10.1364C0.814107 10.4311 1.20302 10.6017 1.61899 10.6197C1.63602 10.6213 1.65305 10.6222 1.67022 10.6222H1.96273V16.0255C1.96273 17.0949 2.83285 17.9649 3.90223 17.9649H6.77489C7.06616 17.9649 7.30223 17.7287 7.30223 17.4375V13.2012C7.30223 12.7133 7.69925 12.3164 8.18718 12.3164H9.88155C10.3695 12.3164 10.7664 12.7133 10.7664 13.2012V17.4375C10.7664 17.7287 11.0024 17.9649 11.2937 17.9649H14.1664C15.2359 17.9649 16.1059 17.0949 16.1059 16.0255V10.6222H16.3772C16.8197 10.6222 17.2358 10.4498 17.5491 10.1366C18.1945 9.49083 18.1948 8.44013 17.55 7.79399ZM16.8032 9.39086C16.6894 9.5047 16.538 9.56746 16.3772 9.56746H15.5785C15.2872 9.56746 15.0512 9.80353 15.0512 10.0948V16.0255C15.0512 16.5133 14.6543 16.9102 14.1664 16.9102H11.8211V13.2012C11.8211 12.1318 10.9511 11.2617 9.88155 11.2617H8.18718C7.11766 11.2617 6.24754 12.1318 6.24754 13.2012V16.9102H3.90223C3.41444 16.9102 3.01742 16.5133 3.01742 16.0255V10.0948C3.01742 9.80353 2.78135 9.56746 2.49007 9.56746H1.7051C1.69686 9.56691 1.68876 9.5665 1.68038 9.56636C1.52328 9.56362 1.37592 9.50127 1.26551 9.39072C1.03068 9.15589 1.03068 8.7737 1.26551 8.53873C1.26537 8.53887 1.26565 8.53873 1.26551 8.53873L8.60851 1.196C8.72222 1.08216 8.87342 1.01953 9.03437 1.01953C9.19518 1.01953 9.34638 1.08216 9.46023 1.196L16.8009 8.53653C16.802 8.53763 16.8032 8.53873 16.8043 8.53983C17.0379 8.77507 17.0375 9.15644 16.8032 9.39086Z"
        fill={active === "white" ? "#fff" : "#1E3354"}
      />
    </svg>
  );
};

export default HomeSvg;