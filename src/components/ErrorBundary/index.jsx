import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        hasError: false, 
        ErrorMessage: "" 
    };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true, ErrorMessage: error.message };
    }
  
    componentDidCatch(error) {
      // You can also log the error to an error reporting service
      console.log("Component did catch: ", error.message);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <>
         <h1>Hubo un error vuelve a la pagina de <a href="/" className=" text-blue-700">Inicio</a></h1>;
        
        </> 
      }
  
      return this.props.children; 
    }
}
export default ErrorBoundary;