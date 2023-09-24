
class CommentRepository {
    constructor() {
        this.comments = [];
        this.idComment = 0;
    }

    addComment(postId,text_comment) {

        const post_id = parseInt(postId)
        this.comments.push({ postId: post_id, comment: text_comment, id_comment: this.idComment });

        this.idComment += 1;

        return "success";
    }

    deleteComment(id) {

        const id_comment = parseInt(id)
        const commentToDelete = this.comments.find(comment => comment.id_comment === id_comment);

        if (!commentToDelete) {
            return "error: comment undefined";
        }

        this.comments = this.comments.filter(comment => comment !== commentToDelete);
        return "success";
    }

    update(id, new_description) {

        const id_comment = parseInt(id)
        const commentIndex = this.comments.findIndex(comment => comment.id_comment === id_comment);

        if (commentIndex === -1) {
            return "error: comment undefined";
        }

        this.comments[commentIndex].comment = new_description;
        return "success";
    }

    read(post, numberCommets) {

        const post_id = parseInt(post);
        const commentsForPost = this.comments.filter(comment => comment.postId === post_id);
    
        if (commentsForPost.length === 0) {
            return "error: not enough comments";
        }
    
        if (numberCommets === 0) {
            return "error: not enough comments";
        }

        if(numberCommets > 5){
            numberCommets = 5
        }

        if (commentsForPost.length < numberCommets) {
            numberCommets = commentsForPost.length
        }

        let selectedComments = commentsForPost.slice(0, numberCommets);
    
        return selectedComments;
    }
}

module.exports = {CommentRepository}