import React, { useState } from "react";
import { isHoverEnabled } from "./HoverState";

interface HoverProps {
  onHoverIn?: any;
  onHoverOut?: any;
  children: any;
}

const Hoverable: React.FC<HoverProps> = ({
  onHoverIn,
  onHoverOut,
  children,
}) => {
  const [state, setState] = useState({
    isHovered: false,
    showHover: true,
  });
  const { isHovered, showHover } = state;
  const _handleMouseEnter = (e: any) => {
    if (isHoverEnabled() && !isHovered) {
      if (onHoverIn) onHoverIn();
      setState({ ...state, isHovered: true });
    }
  };

  const _handleMouseLeave = (e: any) => {
    if (isHovered) {
      if (onHoverOut) onHoverOut();
      setState({ ...state, isHovered: false });
    }
  };

  const _handleGrant = (e: any) => {
    setState({ ...state, showHover: false });
  };
  const _handleRelease = (e: any) => {
    setState({ ...state, showHover: true });
  };

  const child =
    typeof children === "function"
      ? children(showHover && isHovered)
      : children;

  return React.cloneElement(React.Children.only(child), {
    onMouseEnter: _handleMouseEnter,
    onMouseLeave: _handleMouseLeave,
    // prevent hover showing while responder
    onResponderGrant: _handleGrant,
    onResponderRelease: _handleRelease,
    // if child is Touchable
    onPressIn: _handleGrant,
    onPressOut: _handleRelease,
  });
};

export default Hoverable;
