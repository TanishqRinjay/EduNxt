import React from 'react'
import { useForm } from 'react-hook-form'

const index = () => {

    const {register, handleSubmit, setValue, getValues} = useForm()
    const {course} = useSelector((state)=>state.course)

  return (
    <div>

    </div>
  )
}

export default index