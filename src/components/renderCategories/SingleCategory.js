import { Card, Col, Container, Row } from "react-bootstrap";
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { categoryDelete } from "../../redux/action/categoryActions";
const SingleCategory = ({ category }) => {
    const dispatch = useDispatch()
    const handleClick =()=>{
        dispatch(categoryDelete(category))
    }
    return (
        <div>
            {
                category !== 'Create New Category...' && (
                    <Card>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col xs={4}>{category}</Col>
                                    <Col xs={4}></Col>
                                    <Col style={{cursor:'pointer'}} xs={4}>
                                    <AiFillDelete onClick={handleClick} className="mr-4"/>
                                    <Link to={`/update-categories/${category}`}> <AiFillEdit className="ml-4" /></Link>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    )
}

export default SingleCategory;