import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postDelete, postEditModalOpen } from "../../redux/action/postActions";

const SInglePost = (props) => {
    const { title, categories, body,date } = props.post
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(postDelete(date))
    }
    const handleOpen = () => {
        dispatch(postEditModalOpen())
    }
    return (
        <Card style={{ width: '90vw',margin:'20px 0px' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {
                    categories.map((category,index) =><Card.Subtitle key={index} className="mb-2 text-muted">{category}</Card.Subtitle>)
                }
                <Card.Text>
                   {body}
                </Card.Text>
                <Card.Link onClick={handleClick} href="#">Delete Post</Card.Link>
                <Card.Link onClick={handleOpen} href={`/update-post/${date}`} >Update Post</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default SInglePost;