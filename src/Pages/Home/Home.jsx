

const Home = () => {
  return (
    <div id="content_section_wrapper">
             <div id="content_section">
                
             </div>
             <div id="content_sec_form_wrapper">
                   <div className="conten_form_container">
                           <h3>Add Transaction</h3>
                               <form >
                                      <label htmlFor="tran_name_field">
                                          Transaction name:
                                      </label>
                                      <input type="text"  id="tran_name_field" />

                                      <div className="">
                                            <label htmlFor="tran_amount_field">
                                               Amount ($):
                                            </label>
                                            <input type="number"  id="tran_amount_field" />
                                      </div>
                                      <button type="submit">
                                              Add Transaction
                                      </button>
                               </form>
                   </div>
             </div>
             
    </div>
  )
}

export default Home
