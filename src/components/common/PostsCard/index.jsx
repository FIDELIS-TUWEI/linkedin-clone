import './index.scss'

const PostsCard = ({posts}) => {
    return ( 
        <div className='posts-card'>
            <p className='status'>{posts.status}</p>
        </div>
     );
}
 
export default PostsCard;