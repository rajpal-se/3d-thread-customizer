const  FallbackRender = ({ error, resetErrorBoundary, message="" }) => {
  console.log('Message from Component:', message)
  console.log(error)

  return (
    <div role="alert">
      <p>Something went wrong.</p>
      {/* <pre style={{ color: "red" }}>{error.message}</pre> */}
    </div>
  );
}

export default FallbackRender