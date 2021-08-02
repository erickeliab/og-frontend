import CommentItem from './CommentItem';
import React from 'react';
import axios from 'axios';
import { backend } from '../../config';



class CommentList extends React.Component {
  state = {
    comments : this.props.post.comments,
    name: '',
    email: '',
    comment: '',
    sentMessage: ''

  }

  componentDidMount(){

	
	}


	onSubmit = (e) => {
		e.preventDefault();
		const {name,email,comment } = this.state
	
		  const newComment = {
			Name: name,
			Email: email,
			Body : comment,
      post: this.props.post.id
     
			
		  }
	

		//   send to the backend
    
		axios.post(`${backend}/comments`, newComment)
        .then(response => {

          let newcom = this.state.comments
          newcom.push(response.data)

			this.setState({ sentMessage: 'Thank you ! Your Message Is Successfully Sent',
      comments : newcom,
      name: '',
      email: '',
      comment: ''
    })
     
		})
   
			

	  };
	
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });


  render(){
    
  const { comments, comment, email, name }  = this.state
    

  return (

    <div class="pt-5 mt-5">
              <h3 class="mb-5">{comments.length} {comments.length > 1 ? 'Comments': 'Comment'}</h3>
              <ul class="comment-list">
                
              {comments.map((commenty) => (

                <CommentItem comment={commenty} />
                
            ))}
                 
              </ul>              
              <div class="comment-form-wrap pt-5">
                <h3 class="mb-5">Leave a Comment</h3>

                <form class="p-5 bg-light" onSubmit={this.onSubmit}>

                  <div class="form-group">
                    <label for="name">Name *</label>
                    <input type="text" class="form-control" id="name" name="name" onChange={this.onChange} value={name} required/>
                  </div>

                  <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" class="form-control" id="email" name="email" onChange={this.onChange} value={email} required/>
                  </div>

                  <div class="form-group">
                    <label for="message">Comment</label>
                    <textarea name="comment" id="message" cols="30" rows="10" class="form-control" onChange={this.onChange} value={comment}  required></textarea>
                  </div>

                  <div class="form-group">
                    <input type="submit" value="Post Comment" class="btn py-3 px-4 btn-primary" />
                  </div>

                </form>
              </div>
              <div>{this.state.sentMessage}</div>
            </div>

        )
    }
}


export default CommentList
