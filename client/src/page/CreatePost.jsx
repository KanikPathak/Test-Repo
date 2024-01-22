import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios';


// const CreatePost = () => {
//   const [title, setTitle]= useState('')
//   const [category, setCategory]= useState('Uncategorized')
//   const [ description, setDescription] = useState('')
  // const [thumbnail, setThumbnail] = useState(null);
  

  // const handleFileChange = (event) => {
  //   console.log("apna bana le");
  //   setThumbnail(event.target.files[0]);
  // };

  // const handleUpload = async () => {
  //   const formData = new FormData();
  //   formData.append('image', thumbnail);

  //   try {
  //     const response = await axios.post('http://localhost:8000/upload', formData);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Error uploading image', error);
  //   }
  // };


  const UploadComponent = () => {
  const [title, setTitle]= useState('')
  const [category, setCategory]= useState('Uncategorized')
  const [ description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState(null);
  const [file, setFile] = useState(null);
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleUpload = async () => {
      const formData = new FormData();
      formData.append('image', file);
      
      let name;
      try {
        const response = await axios.post('http://localhost:8000/upload', formData);
        console.log(response.data);
        name = response.data.name;
      } catch (error) {
        console.error('Error uploading image', error);
      }

      try{

      const respo = await fetch('http://localhost:8000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ 
          title : title,
          category : category,
          description : description,
          imgname : name
        })
      });

    } catch (error) {
      console.log("it is not working for some issue");
      console.error('Error making API call:', error.message);
    }
    };
  

  const modules = {
    toolbar: [
      [{'header':[1,2,3,4,5,6, false]}],
      ['bold','italic','underline','strike','blockquote'],
      [{'list':'order'},{'list':'bullet'},{'indent':'-1'},{'indent':'-1'}],
      ['link','image'],
      ['clean'],
    ],
  }


const formats = [
  'header',
  'bold','italic','underline','strike','blockquote',
  'list','bullet','indent',
  'link','image',
]

const POST_CATEGORIES = ["Agriculture","Business","Education","Entertainment","Art","Investment",
"Weather", "Uncategorized"]

  return (
        <section className='create-post'>
          <div className='container'>
            <h2>CreatePost</h2>
            <p className='form__error-message'>
              This is an error message 
            </p>
            <div className='form create-post__form'>
              <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
              <select name='category' value={category} onChange={e => setCategory(e.target.value)}>
                {
                    POST_CATEGORIES.map(cat =><option key={cat}>{cat}</option>)
                }
              </select>
              <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
                <input type='file' onChange={handleFileChange} accept='png, jpg, jpeg'/>
                <button  onClick={handleUpload} className='btn primary'>CreatePost</button>
            </div>
          </div>
        </section>
  )
}

export default UploadComponent