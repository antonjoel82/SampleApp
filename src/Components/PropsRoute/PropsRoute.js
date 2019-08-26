import React from 'react';
import { Route } from 'react-router-dom';

function renderMergedProps (component, ...rest) {
  return (
    React.createElement(component, Object.assign({}, ...rest))
  );
}

export default function PropsRoute ({ component, ...rest }) {
  return (
    <Route
      {...rest} render={(routeProps) => {
        return renderMergedProps(component, routeProps, rest);
      }}
    />
  );
}
