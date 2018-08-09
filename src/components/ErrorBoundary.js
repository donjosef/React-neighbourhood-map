import React from 'react'

class ErrorBoundary extends React.Component {
  
    state = { hasError: false };
  

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={{color: 'red'}}>Something went wrong. Cannot load the map...</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary