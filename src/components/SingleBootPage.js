import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../stylesheets/singlebootpage.css';
import axios from "axios";
import { useLanguage } from "./LanguageContext";
import { useTranslation } from "react-i18next";





const SingleBootPage = () => {

  const {t} = useTranslation();
  const {id} = useParams();
  const [boot, setBoot]=useState();
  const lang = useLanguage();
  const [images, setImages]=useState();
  const [imgNumber, setImgNumber]=useState(0);
  const [showAddCommentBox, setShowAddCommentBox]= useState(false);
  const [commentUsername, setCommentUsername] = useState('');
  const [commentContent, setCommentContent] = useState('');

  useEffect(() => {
    if(id){
      fetchBoot();
    }
    
    
  }, [id])

  const fetchBoot = ()=> {
    axios.get("http://localhost:3050/api/shoe/", {  params: {_id: parseInt(id)}  }).then(response => {
      setBoot(response.data)
      setImages(response.data[0].imgs)
    });
  }


  const openAddComment =() => {
    setShowAddCommentBox(!showAddCommentBox);
  }

  const addComment =() => {
    if(commentUsername.length >= 3 && commentContent.length >= 3){
      axios.post("http://localhost:3050/api/shoeup/", {_id: id, comment: { name: commentUsername, comment: commentContent}}).then(
        response => {
          console.log(response);
          setShowAddCommentBox(!showAddCommentBox);
          fetchBoot();
        }
      )
    }
    console.log(commentUsername + commentContent)
  }


  return (
    <div className="singlebootpage">
     {boot && <div className="singlebootpage-container">
        <div className="singlebootpage-leftside">
          <img  className="singlebootpage-bigImg" src={boot[0].imgs[imgNumber]} alt="cos" />
          <div className="singlebootpage-smallImage-container">
            {images && images.map((img, index)=>(
              <img key={index} onClick={()=> setImgNumber(index)} className="singlebootpage-smallImg" src={img} alt="cos"/>
            ))}
          </div>
        </div>
        <div className="singlebootpage-rightside">
          <h1>{boot[0].language.en.name}</h1>
          <p>{boot[0].language[lang].description}</p>
        </div>
      </div>}
      {boot &&  boot[0].comments.map((comment, index) => (
          <div key={index} className="singlebootpage-comment">
            <p className="singlebootpage-name">{comment.name}</p>
            <p>{comment.comment}</p>
         </div>
          
        ))}
       {boot && !showAddCommentBox && <button onClick={() => openAddComment()} className="singlebootpage-add">{t('SingleBootPage.addComment')}</button>} 
       {showAddCommentBox && <div  className="singlebootpage-comment-add">
         <label>{t('SingleBootPage.name')}</label>
         <input placeholder={t('SingleBootPage.name')} value={commentUsername} onChange={(e)=> setCommentUsername(e.target.value)} />
         <label>{t('SingleBootPage.comment')}</label>
         <textarea placeholder={t('SingleBootPage.comment')} value={commentContent} onChange={(e)=> setCommentContent(e.target.value)}></textarea>
         <button onClick={()=> addComment()} className="singlebootpage-add">{t('SingleBootPage.submitComment')}</button>
         </div>}
    </div>
  )
}

export default SingleBootPage;