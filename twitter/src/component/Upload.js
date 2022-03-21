// import React from 'react'

// const handleUploadFile = (e)=>{
// e.preventDefault()
// const file = e.target[0].file[0]
// uploadFiles(file)

// }
// function Upload() {
//     const [progress, setProgress]= useState('0')
//     const uploadFiles = (file) =>{
//      if(!file) return
//      const storageRef = ref(storage,`/file/${file.name}`)
//      const uploadTast = uploadBytesResumable(storageRef,file)

//      uploadTast.on('state_changed',(snapshot)=>{
//          const prog = Math.round(snapshot.bytesTransferred/snapshot.totalBytes * 100)
//          setProgress(prog)
//      }, err=>console.log(err),()=>{
//          getDownLoadUrl(uploadTast.snapshot.ref).then(url=>console.log(url))
//      })
//     }
//     return (
//         <div>

//         </div>
//     )
// }

// export default Upload
