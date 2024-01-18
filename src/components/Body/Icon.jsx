import React from "react";

function Icon(props)
{
      return(<svg
        xmlns={props.icon.xmlns}
        fill={props.icon.fill}
        viewBox={props.icon.viewBox}
        strokeWidth={props.icon.strokeWidth}
        stroke={props.icon.stroke}
        className={props.icon.class}
      >
        <path
          strokeLinecap={props.icon.strokeLinecap}
          strokeLinejoin={props.icon.strokeLinejoin}
          d={props.icon.d}
        />
      </svg>);
}

export default Icon;