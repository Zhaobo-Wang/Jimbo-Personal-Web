import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './blog.css';
import BlogpicNotFound from '../Image/MySelf/Blog-image-not-found.png'

const Blog_detail = () => {
    const [detail, setDetail] = useState(null)
    const { id } = useParams()
    const [article_array, setArticle_array] = useState(null)
    const [CodeImage, setCodeImage] = useState(null)
    const [codeExample, setCodeExample] = useState(true)

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/blog/${id}`).then(
            (response) => {
                setDetail(response.data)
                setArticle_array(response.data?.articles.split('\n')) 
                // 处理后端字段，把它们放入array中
                setCodeImage(response.data?.image)
                console.log(response.data?.image)
                console.log(CodeImage)
            }
        ).catch((e) => {
            console.log(e)
        })
    }, [])

    return (
        <div className='blog-detail-panel'>
            <h1>{detail?.title}</h1>
            <div className="detail-article">

                {
                    codeExample ?
                        <>
                            <div className="detail-article-body">
                                <h4 className='detail-article-title'>Article</h4>
                                {article_array?.map(eachLine => {
                                    return <h4>{eachLine}</h4>
                                })}
                                {/* 一行一行render出来 */}
                            </div>
                            <h5 className='margin-left-5vw'>Post Date: {detail?.post_date}</h5>
                            <h5 className='margin-left-5vw'>Tags: {detail?.tags}</h5>
                        </>
                        :
                        <>
                            <div className="blog-image-box">
                                <img src={BlogpicNotFound} alt="no example" className='blog-image-not-found'></img>
                            </div>
                        </>
                }
            </div>
            <Button type="button" className="detail-button" onClick={() => { setCodeExample(!codeExample) }}>
                Code Example
            </Button>
            <button className="detail-button">
                <Link to=".." relative='path' className='detail-link'>Back to All</Link>
            </button>
        </div>
    )
}

export default Blog_detail