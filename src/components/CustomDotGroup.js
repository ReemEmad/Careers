import React from "react"
import propTypes from "prop-types"
import { Dot } from "pure-react-carousel"
import { Button, Container } from "semantic-ui-react"
function CustomDotGroup({ slides, size }) {
  return (
    <Button.Group size={size}>
      {[...Array(slides).keys()].map((slide) => (
        <Button as={Dot} key={slide} icon="circle" slide={slide} />
      ))}
    </Button.Group>
  )
}

CustomDotGroup.defaultProps = {
  size: "mini",
}

CustomDotGroup.propTypes = {
  slides: propTypes.number.isRequired,
  size: propTypes.string,
}

export default CustomDotGroup
