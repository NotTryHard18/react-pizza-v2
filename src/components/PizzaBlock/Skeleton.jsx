import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="138" cy="140" r="120" /> 
    <rect x="7" y="294" rx="10" ry="10" width="267" height="27" /> 
    <rect x="7" y="342" rx="10" ry="10" width="267" height="88" /> 
    <rect x="7" y="440" rx="10" ry="10" width="131" height="27" /> 
    <rect x="143" y="442" rx="10" ry="10" width="131" height="27" />
  </ContentLoader>
)

export default Skeleton

