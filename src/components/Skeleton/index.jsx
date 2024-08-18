import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
    {...props}
  >
    <rect x="0" y="415" rx="15" ry="15" width="85" height="50" /> 
    <rect x="35" y="245" rx="15" ry="15" width="187" height="40" /> 
    <rect x="130" y="415" rx="25" ry="25" width="140" height="50" /> 
    <rect x="0" y="300" rx="15" ry="15" width="270" height="90" /> 
    <circle cx="125" cy="114" r="115" />
  </ContentLoader>
)

export default Skeleton