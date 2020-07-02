import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    onCommentSelect(comment) {
        this.setState({selectedComment: comment})
    }
    renderDish(dish) {
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <cardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <cardText>{dish.description}</cardText>
                        </cardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div>

                </div>
            );
        }
    }

    renderComments(comments) {
        if(comments!= null) {
        let commentList = this.props.dish.comments.map((comment) => {
            const c = new Date(comment.date)
            return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                    -- {comment.author}, {new Intl.DateTimeFormat('en', 
                    {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'

                    }).format(c)}  
                </p>
            </li>
            );
        })
        
            return(
                <div className="col-12 col-md-5 m-1">
                   <h4>comments</h4>
                   <ul className="list-unstyled">
                        {commentList}
                    </ul>
                </div>
            );
        }
        else{
            return (
                <div>
                   
                </div>
            );
        }
       
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
    
}
export default DishDetail;