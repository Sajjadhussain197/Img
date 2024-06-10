import React from 'react'

const page = () => {
  return (
    <div>here is your type of transformation</div>
  )
}

export default page
// import React from 'react'
// import Header from '@/components/shared/Header'
// import { transformationTypes } from '@/constants'
// // import TransformationForm from '@/components/shared/TransformationForm'
// import TransformationForm from '@/components/shared/TransformationForm'
// import { auth } from '@clerk/nextjs/server'
// import { getUserById } from '@/lib/actions/user.actions'
// import { redirect } from 'next/dist/server/api-utils'

// const AddTransformationTypePage = async ({ params  :{type}}: SearchParamProps) => {
//   const Transformation = transformationTypes[type];
//   const userId=auth();
//   if(!userId) redirect('/sign-in')
//   const user= await getUserById(userId)
//   return (
    
//     <>
//       <Header title={Transformation.title} 
//       subtitle={Transformation.subTitle}/>
//       <TransformationForm
//       action='Add' 
//       userId={user._id}
//       type={Transformation.type as TransformationTypeKey}
//       creditBalance={user.creditBalance}
//             />
//     </>
//   )
// }

// export default AddTransformationTypePage