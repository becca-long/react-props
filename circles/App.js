// Render the circles using React!
const App = (props) => {
    let { circles } = props;
    console.log(circles)
    
    return circles.map((circle, i) => {
        var circleStyle = {
            width: circle.radius * 2, 
            height: circle.radius * 2, 
            borderRadius: circle.radius, 
            backgroundColor: circle.color
        }
        
        return (
            <div key={i} style={circleStyle}></div>
        )
    })
    
}