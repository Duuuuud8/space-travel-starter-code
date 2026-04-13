import React from 'react'


// ErrorBoundary only works with class style
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    // this tracks if something breaks
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }
//   if something does crash this will grab it

  componentDidCatch(error, info) {
    console.error("Error caught by boundary", error, info);
  }
//   logs the error for debugging purposes 

  render() {
    if (this.state.hasError) {
        return <h2>Oops....Something went wrong, try refreshing.</h2>
    }
    // if it crashes show the fallback UI

    return this.props.children;
    // render what is inside this component
  }
}

export default ErrorBoundary;