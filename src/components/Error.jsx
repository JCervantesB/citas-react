const Error = ({children}) => {
  return (
    <div className="text-red-500 text-center border border-red-500 bg-red-100 p-3 mb-5 font-bold uppercase rounded">
        {children}
    </div>
  )
}

export default Error