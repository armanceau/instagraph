import { useMutation } from "@apollo/client";
import "./articleUser.css";
import { useState } from "react";
import { incrementLike } from "../../queries/article";
import { HeartFill } from "react-bootstrap-icons";

interface ArticleUserProps {
  id: string;
  titre: string;
  description: string;
  date: string;
  nombreDeLike: number;
}

const ArticleUser = ({
  id,
  titre,
  description,
  date,
  nombreDeLike,
}: ArticleUserProps) => {
  const fullDate: number = Number(date) * 60 * 1000;
  const readable = new Date(fullDate).toLocaleDateString("fr-FR");
  const [likeCount, setLikeCount] = useState(nombreDeLike);
  const [addLike] = useMutation(incrementLike);
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
      </div>
    </div>
  );
};

export default ArticleUser;
