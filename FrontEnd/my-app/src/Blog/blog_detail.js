import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const Blog_detail = () => {
    const [detail, setDetail] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/blog/${id}`).then(
            (response) => {
                setDetail(response.data)
                console.log(detail)
            }
        ).catch((e) => {
            console.log(e)
        })
    }, [])
    return (
        <div>
            <h3>{detail?.title}</h3>
            <h5>{detail?.articles}</h5>
            <h6>{detail?.post_date}</h6>
            <h6>{detail?.tags}</h6>
            <Link to=".." relative='path'>Back to All</Link>
        </div>
    )
}

export default Blog_detail