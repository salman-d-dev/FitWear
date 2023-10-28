"use client"
import Form from '../dashboard/ui-components/Form'

const AddProduct = () => {
  return (
    <div className='min-h-screen'>
      <style jsx global>{`
      footer{
        display:none;
      }
      nav{
        display:none;
      }
      `}</style>
      <Form/>
    </div>
  )
}

export default AddProduct
