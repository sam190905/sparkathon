import React, { useState } from "react";
import "./App.css";

function App() {
  const [dish, setDish] = useState("");
  const [data, setData] = useState({
    ingredients: [
      { name: "Pasta (Spaghetti or your favorite shape)", quantity: "200g" },
      { name: "Olive Oil", quantity: "2 tbsp" },
      { name: "Garlic", notes: "minced", quantity: "2 cloves" },
      { name: "Cherry Tomatoes", notes: "halved", quantity: "250g" },
      { name: "Fresh Basil", notes: "chopped", quantity: "1/4 cup" },
      { name: "Parmesan Cheese", notes: "grated", quantity: "To taste" },
      { name: "Salt", quantity: "To taste" },
      { name: "Black Pepper", quantity: "To taste" },
    ],
    recipe: [
      "Bring a large pot of salted water to a boil. Add the pasta and cook according to package directions until al dente.",
      "While the pasta is cooking, heat olive oil in a large skillet over medium heat.",
      "Add the minced garlic and sauté for 1-2 minutes, until fragrant. Be careful not to burn it.",
      "Add the halved cherry tomatoes to the skillet and cook for 5-7 minutes, until they start to soften and burst.",
      "Drain the pasta, reserving about 1/2 cup of pasta water.",
      "Add the drained pasta to the skillet with the tomatoes. Add a little pasta water if needed to create a light sauce.",
      "Stir in the chopped fresh basil.",
      "Season with salt and black pepper to taste.",
      "Serve immediately with grated Parmesan cheese.",
    ],
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setData(null);

    try {
      const response = await fetch(`http://127.0.0.1:5000/api/recipe/${dish}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      alert("Error fetching recipe.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="header">🍽️ Dish to Recipe & Walmart Helper</div>

      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Enter dish name (e.g., Butter Chicken)"
            value={dish}
            onChange={(e) => setDish(e.target.value)}
            className="input"
            required
          />
          <button type="submit" className="button">
            Get Recipe
          </button>
        </form>

        {loading && <p className="loading-text">Loading...</p>}

        {data && (
          <div className="card">
            <div className="section">
              <h2>Ingredients</h2>
              <ul>
                {data.ingredients.map((item, index) => (
                  <li key={index}>
                    <strong>{item}</strong> {" - "}
                    <a
                      href={`https://www.walmart.com/search?q=${encodeURIComponent(
                        item.name
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy on Walmart
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="section">
              <h2>Recipe</h2>
              <ol>
                {data.recipe.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
