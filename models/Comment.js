
class CommentRepository {
    constructor() {
        this.comments = [];
        this.idComment = 0;
    }

    addComment(postId,comment) {

        const post_id = parseInt(postId)
        this.comments.push({post_id,idComment: this.idComment,comment});

        this.idComment += 1;

        return "success";
    }

    deleteComment(id) {

        const id_comment = parseInt(id)
        const commentToDelete = this.comments.find(comment => comment.idComment === id_comment);

        if (!commentToDelete) {
            return "error: comment undefined";
        }

        this.comments = this.comments.filter(comment => comment !== commentToDelete);
        return "success";
    }

    update(id, new_description) {

        const id_comment = parseInt(id)
        const commentIndex = this.comments.findIndex(comment => comment.idComment === id_comment);

        if (commentIndex === -1) {
            return "error: comment undefined";
        }

        this.comments[commentIndex].comment = new_description;
        return "success";
    }

    read(postId, numberCommets) {

        const post_id = parseInt(postId)
        const commentsForPost = this.comments.filter(comment => comment.postId === post_id);

        if (commentsForPost.length === 0) {
            return "error: not enough comments";
        }

        if (numberCommets === 0) {
            return "error: not enough comments";
        }

        let selectedComments = commentsForPost.slice(0, numberCommets);

        if(5 > commentsForPost.length){
            selectedComments = commentsForPost.slice(0, 5);
        }

        return selectedComments;
    }
}

module.exports = {CommentRepository}