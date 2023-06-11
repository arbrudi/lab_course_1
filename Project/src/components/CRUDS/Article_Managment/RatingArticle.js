import React from 'react'

  


function RatingArticle() {
  return (
    <> 

    <div>Rate This Article!!!</div>
    <div className=' '>
            <div className=''>
                <form >
                    <h2>Add Rating</h2>
                    <div className='mb-2'>
                        <label htmlFor="A_Rating">Rate us</label>
                        <input type='number' placeholder='Enter rating' className='form-control'
                  
                        />
                    </div>
                   <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
   

 
    </>
  )
}

export default RatingArticle