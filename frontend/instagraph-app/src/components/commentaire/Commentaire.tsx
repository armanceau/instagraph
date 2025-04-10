import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  createCommentaire,
  getCommentairesByArticle,
} from "../../queries/commentaire";

interface CommentaireProps {
  articleId: string;
  userId: string;
}

const Commentaire = ({ articleId, userId }: CommentaireProps) => {
  const [contenu, setContenu] = useState("");

  const {
    data: commentsData,
    loading,
    refetch,
  } = useQuery(getCommentairesByArticle, {
    variables: { getCommentaireByArticleId: articleId },
    fetchPolicy: "network-only",
  });

  const [createCOMMENTAIRE, { loading: adding }] = useMutation(
    createCommentaire,
    {
      onCompleted: () => {
        setContenu("");
        refetch(); // recharge les commentaires après ajout
      },
    }
  );

  // ⚠️ Temporaire, à sécuriser plus tard
  userId = "27c55fdf-f9d3-4572-9ab0-29894ca97910";

  const handleAddCommentaire = async (e: React.FormEvent) => {
    e.preventDefault();
    if (contenu.trim() === "") return;

    try {
      await createCOMMENTAIRE({
        variables: {
          contenu,
          userId,
          articleId,
        },
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout du commentaire :", error);
    }
  };

  return (
    <div className="article-card-comments">
      <hr />
      {loading ? (
        <p>Chargement des commentaires...</p>
      ) : commentsData?.getCommentaireByArticleId?.length ? (
        commentsData.getCommentaireByArticleId.map((comment) => (
          <div key={comment?.id} className="comment">
            <strong>{comment?.auteur.username}</strong> : {comment?.contenu}
          </div>
        ))
      ) : (
        <p>Aucun commentaire pour le moment.</p>
      )}

      <form onSubmit={handleAddCommentaire} style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Ajouter un commentaire..."
          className="form-control"
          value={contenu}
          onChange={(e) => setContenu(e.target.value)}
          disabled={adding}
        />
        <button
          type="submit"
          className="btn btn-primary btn-sm mt-2"
          disabled={adding}
        >
          {adding ? "Envoi..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
};

export default Commentaire;
