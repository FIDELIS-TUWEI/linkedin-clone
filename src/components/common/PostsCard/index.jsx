import './index.scss'

const PostsCard = ({posts}) => {
    return ( 
        <div className='posts-card'>
            <p>{posts.status}</p>
        </div>
     );
}
 
export default PostsCard;