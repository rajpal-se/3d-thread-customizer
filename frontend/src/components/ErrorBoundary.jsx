import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import FallbackRender from "./FallbackRenderer";


const ErrorBoundary = ({children, message = ""}) => {
  return (
    <ReactErrorBoundary fallbackRender={(props) => {
      return <FallbackRender message={message} {...props}/>
    }}
    onReset={(details) => {
      //
    }}>
      {children}
    </ReactErrorBoundary>
  )
}

export default ErrorBoundary