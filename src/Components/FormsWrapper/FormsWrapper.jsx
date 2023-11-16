import "./FormsWrapper.css"
const FormsWrapper = ({children}) => {
  return (
        <main  id="forms_container">
                 <div className="forms__wrapper">
                        {children}
                 </div>
        </main>
  )
}

export default FormsWrapper
