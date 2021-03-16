import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { categoryModalClose, categorySave } from "../../redux/action/categoryActions";
import { useForm } from "react-hook-form";
const Category = () => {
    const show = useSelector(state => state ?state.categoryReducer.categoryToggle: false)
    const dispatch = useDispatch()
    const handleClose = () =>{
        dispatch(categoryModalClose())
        window.location.reload()
    }
    const { register, handleSubmit,errors } = useForm();
    const onSubmit = data => {
      dispatch(categorySave(data.title))
      dispatch(categoryModalClose())
      window.location.reload()
    }
    return (
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create A New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-group">
                            <label htmlFor="title">Category Name</label>
                            <input name="title" type="text" className="form-control" id="post-title" placeholder="Enter Category Name"  ref={register({ required: true })} />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
        </Modal.Body>
      </Modal>
    );
};

export default Category;