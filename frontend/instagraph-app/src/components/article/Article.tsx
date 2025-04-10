import { useState } from "react";
import "../components.css";
import { Link } from "react-router";
import { useLazyQuery, useMutation } from "@apollo/client";
import { ChatDotsFill, HeartFill } from "react-bootstrap-icons";
import { getCommentairesByArticle, incrementLike } from "../../queries/article";

interface ArticleProps {
  id: string;
  titre: string;
  description: string;
  date: string;
  nombreDeLike: number;
  username: string;
  userId: string;
}

const Article = ({
  id,
  titre,
  description,
  date,
  nombreDeLike,
  username,
  userId,
}: ArticleProps) => {
  const fullDate: number = Number(date) * 60 * 1000;
  const readable = new Date(fullDate).toLocaleDateString("fr-FR");
  const [likeCount, setLikeCount] = useState(nombreDeLike);
  const [addLike] = useMutation(incrementLike);
  const [showComments, setShowComments] = useState(false);
  const [fetchComments, { data: commentsData, loading }] = useLazyQuery(
    getCommentairesByArticle
  );

  const handleToggleComments = () => {
    if (!showComments) {
      fetchComments({ variables: { getCommentaireByArticleId: id } });
    }
    setShowComments(!showComments);
  };
  const handleLike = async () => {
    try {
      const { data } = await addLike({
        variables: { incrementNombreDeLikeId: id },
      });

      if (data?.incrementNombreDeLike.success) {
        setLikeCount(
          data.incrementNombreDeLike.article?.nombreDeLike ?? likeCount + 1
        );
      }
    } catch (error) {
      console.error("Erreur lors du like :", error);
    }
  };
  return (
    <div key={id} className="article-card">
      <div className="article-card-header">
        <Link className="article-card-user" to={`/user/${userId}/${username}`}>
          <div className="article-card-icon"></div>
          {username}
        </Link>
        <div className="article-card-date">{readable}</div>
      </div>
      <div className="article-card-body">
        <div>
          <h2>{titre}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="article-card-footer">
        <span>{likeCount}</span>
        <HeartFill
          style={{
            cursor: "pointer",
            marginLeft: "4px",
            marginTop: "4px",
            color: "red",
          }}
          onClick={handleLike}
        />
        <ChatDotsFill
          style={{ cursor: "pointer", marginLeft: "10px" }}
          onClick={handleToggleComments}
        />
      </div>
      {showComments && (
        <div className="article-card-comments">
          {loading ? (
            <p>Chargement des commentaires...</p>
          ) : (
            <>
              {commentsData?.getCommentaireByArticleId ? (
                commentsData.getCommentaireByArticleId.map((comment) => (
                  <div key={comment?.id} className="comment">
                    <strong>{comment?.auteur.username}</strong> :{" "}
                    {comment?.contenu}
                  </div>
                ))
              ) : (
                <p>Aucun commentaire pour le moment.</p>
              )}

              {/* Champ pour ajouter un commentaire */}
              <form
                style={{ marginTop: "10px" }}
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Ajouter un commentaire..."
                  className="form-control"
                />
                <button type="submit" className="btn btn-primary btn-sm mt-2">
                  Envoyer
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Article;
