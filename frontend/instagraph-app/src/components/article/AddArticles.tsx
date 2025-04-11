import {  useState } from "react";
import { useMutation } from "@apollo/client";
import { ajoutArticle } from "../../queries/article";


const AddArticle = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [createArticle, { loading, error }] = useMutation(ajoutArticle);
  const userIdLocal = localStorage.getItem("userId")


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userIdLocal) {
        alert("Vous devez être connecté pour publier un article.");
        return;
      }

    if (!titre || !description) {
      alert("Merci de remplir tous les champs.");
      return;
    }

    try {
      const { data } = await createArticle({
        variables: {
          titre,
          description,
          userId: userIdLocal! 
        }
      });

      if (data?.createArticle) {
        console.log("Article créé :", data.createArticle);
      }

      setTitre("");
      setDescription("");
    } catch (err) {
      console.error("Erreur lors de la création de l'article :", err);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Créer un article</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre de votre article"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            fontSize: "18px",
            marginBottom: "42px",
            backgroundColor: "transparent",
          }}
        />
        <textarea
          placeholder="Décrivez votre idée..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
          style={{
            width: "100%",
            height: "150px",
            border: "none",
            outline: "none",
            resize: "none",
            fontSize: "16px",
            backgroundColor: "transparent",
            marginBottom: "12px",
          }}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Publication en cours..." : "Publier"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>Erreur lors de la création de l'article.</p>}

      <hr style={{ margin: "20px 0" }} />
    </div>
  );
}

export default AddArticle
