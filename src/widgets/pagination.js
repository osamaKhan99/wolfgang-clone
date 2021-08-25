import React,{ useState, useEffect} from 'react'
import { Pagination } from '@material-ui/lab';
import Gallery from "../pages/gallery" 

export default function PageChnager() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      //const res = await fetch('https://mocki.io/v1/ac264e45-b0d4-4f06-a093-550b73d13451');
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
      const data = await res.json()
      console.log(data)
      setPosts(data);
      setLoading(false);
      
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const count = posts.length / postsPerPage

  // Change page
 // const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <Gallery post={currentPosts} />
            <div className="pagination">
                <Pagination 
                    count={count}
                    onChange={(e,value)=>setCurrentPage(value)}
                    color="primary"
                    variant="text"
                    size="large"
                />
            </div>
        </div>
    )
}
