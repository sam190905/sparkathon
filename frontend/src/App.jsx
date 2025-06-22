import React, { useState } from "react";
import "./App.css";

function App() {
  const [dish, setDish] = useState("");
  const [data, setData] = useState({
  "ingredients": [
    {
      "listings": [
        {
          "currency_symbol": "$",
          "image_url": "https://i5.walmartimages.com/seo/De-Cecco-Penne-Rigate-No-41-Pasta-16-oz_29d67798-36a1-49e3-91f6-db96c4bbb67b.64e57b4712e36532189bfb9f2839b9fd.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
          "price": 2.82,
          "product_url": "https://www.walmart.com/sp/track?bt=1&eventST=click&plmt=sp-search-middle~desktop~primary-exact&pos=1&tax=976759_976794&rdf=1&rd=https%3A%2F%2Fwww.walmart.com%2Fip%2FDe-Cecco-Penne-Rigate-No-41-Pasta-16-oz%2F10318568%3FclassType%3DVARIANT%26adsRedirect%3Dtrue&adUid=1a17f976-9c33-4411-a0f1-a97dc181a76b-0-0&mloc=sp-search-middle&pltfm=desktop&pgId=Pasta%20(Spaghetti%20or%20Penne)&pt=search&spQs=CQq8tqVtTsxXqs4helAIBml8-ZU5ofur-tYc82ybB4STOKRWPJ9jc9HDAczNhS3bgvf85oNxaCqwQNwum6Teh-yNMgpGfqcCZjb1z-seb650tCb6LcnlZ4EMpMyxObJR2F70pNI_vq_urPCyj7NxesQzkdpi9fNrWkCrrv6LvZQNxxUlM-ZZeJ9qaE0lexmPUabJ18hvdFK9Zg0r1Ja-p92lXXBjL2hRi8Z3G9PWqIJAQmyN_7A79hH6dbYNeCuwXYYCjM656y_inA2jBouMCjpYWCu3O7wF62cHVmX9zos&storeId=3081&specificity=broad&specificityScore=0.7008999&couponState=na&bkt=ace1_11746%7Cace2_default%7Cace3_default%7Ccoldstart_on%7Csearch_item_PT_title_desc_xe&classType=VARIANT",
          "rating": null
        },
        {
          "currency_symbol": "$",
          "image_url": "https://i5.walmartimages.com/seo/Great-Value-Penne-Pasta-16-oz-Box-Shelf-Stable_44255c22-1361-4b4b-9a70-c7a87bd101b6.861d9b1f2947a2832aeb17a37d85ba31.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
          "price": 1.18,
          "product_url": "https://www.walmart.com/ip/Great-Value-Penne-Pasta-16-oz-Box-Shelf-Stable/10534084?classType=VARIANT&from=/search",
          "rating": null
        },
        {
          "currency_symbol": "$",
          "image_url": "https://i5.walmartimages.com/seo/Great-Value-Penne-32-oz_41386caa-d486-4f8f-b157-023472d12f00.1bd5cda1aa7ccd9811beb71cd96156d2.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
          "price": 2.12,
          "product_url": "https://www.walmart.com/ip/Great-Value-Penne-32-oz/5144705712?classType=VARIANT&from=/search",
          "rating": null
        }
      ],
      "name": "Pasta (Spaghetti or Penne)",
      "quantity": "1 pound"
    },
    {
      "listings": [
        {
          "currency_symbol": "$",
          "image_url": "https://i5.walmartimages.com/seo/Pure-Life-Purified-Water-16-9-Fl-Oz-500-mL-Plastic-Bottled-Water-35-Pack_da081097-79e5-4c85-bacf-0d5ab685e8ad.b2356a6b64950986278058142cf098da.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
          "price": 5.34,
          "product_url": "https://www.walmart.com/sp/track?bt=1&eventST=click&plmt=sp-search-middle~desktop~primary-primary&pos=1&tax=976759_7128585_5705317_3445737&rdf=1&rd=https%3A%2F%2Fwww.walmart.com%2Fip%2FPure-Life-Purified-Water-16-9-Fl-Oz-500-mL-Plastic-Bottled-Water-35-Pack%2F17248230%3FclassType%3DREGULAR%26athbdg%3DL1300%26adsRedirect%3Dtrue&adUid=98b12eac-029e-42b3-9a59-e85a5705c746-0-1&mloc=sp-search-middle&pltfm=desktop&pgId=Water&pt=search&spQs=OIdkgvxAQMY03dLcZxNw0vulOiaz8z0DrPXusioJmNXsV6fWCesCDQosy7InNa-Mwnj8PxRsKkuvCOS14Y1ZcP7h03_wJXpvxXi0TXMDZ0AI3VArUTIZ4MQfE6mwJKLhjWaV2_UE6HrToO8akUOaPI_GWRxDJK0iAq45Uy_6AeXw0jrvvJLJRCYddHuAn1FqixXBa9YcR4byl-ZQzF4MVQKeg9Nx8TIauX_rX5Cgyt_V8Mrd-ScfP7--2qM7MmHBPtRWJieyBiEtygWiBll-CIW1J7zGCk2OcC6PjvkXgRw&storeId=3081&specificity=broad&specificityScore=0.26884633&couponState=na&bkt=ace1_11708%7Cace2_11897%7Cace3_default%7Csearch_cassandra-first%7Ccoldstart_off%7Csearch_IU_BRAND_APPLICATION&classType=REGULAR&athbdg=L1300",
          "rating": null
        },
        {
          "currency_symbol": "$",
          "image_url": "https://i5.walmartimages.com/seo/POLAND-SPRING-Brand-100-Natural-Spring-Water-16-9-ounce-plastic-bottles-Pack-of-35_d50efd7e-3adf-4132-a5be-6562b1031590.58c59c19501836a09e1e25fbed372aaa.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
          "price": 19.41,
          "product_url": "https://www.walmart.com/sp/track?bt=1&eventST=click&plmt=sp-search-middle~desktop~primary-primary&pos=2&tax=976759_7128585_5705317_3445737&rdf=1&rd=https%3A%2F%2Fwww.walmart.com%2Fip%2FPOLAND-SPRING-Brand-100-Natural-Spring-Water-16-9-ounce-plastic-bottles-Pack-of-35%2F171831342%3FclassType%3DVARIANT%26athbdg%3DL1600%26adsRedirect%3Dtrue&adUid=98b12eac-029e-42b3-9a59-e85a5705c746-0-1&mloc=sp-search-middle&pltfm=desktop&pgId=Water&pt=search&spQs=NUkRLR4_Sn2_F3ZZhmhMBKTbGAPepKHbA4EY0HJSg1_wXyuw9t59hup1yCc3DM6akQndH3uwa2XDByrUkU_D4ldVblFpl7jihCDHEd9mIXzbdUayChdzxJem1RkdP6qSyqsWU9PeItC7ODSwKYPUgTKEv7sby_dxHaE-hMWa4Frn8kxcVnHMGjWHMSGpqgCMuH1ttaHcNCKitFdS80gh8i4rfOwoiufWvdkIBFlRhX4gMnbG-OppiTZ3yjotQIBPUnF8xRsoRHv_37Ul5QrxYmCDgIzlW38Eak-HO6vevfo&storeId=3081&specificity=broad&specificityScore=0.26884633&couponState=na&bkt=ace1_11708%7Cace2_11897%7Cace3_default%7Csearch_cassandra-first%7Ccoldstart_off%7Csearch_IU_BRAND_APPLICATION&classType=VARIANT&athbdg=L1600",
          "rating": null
        },
        {
          "currency_symbol": "$",
          "image_url": "https://i5.walmartimages.com/seo/ARROWHEAD-Brand-100-Mountain-Spring-Water-16-9-ounce-plastic-bottles-Pack-of-35_5c6fa5b0-115a-4be3-b74e-891d8ea42a15.ccaa33dff80d8e5f1f25c93497afb7e6.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
          "price": 6.98,
          "product_url": "https://www.walmart.com/sp/track?bt=1&eventST=click&plmt=sp-search-middle~desktop~primary-primary&pos=3&tax=976759_7128585_5705317_3445737&rdf=1&rd=https%3A%2F%2Fwww.walmart.com%2Fip%2FARROWHEAD-Brand-100-Mountain-Spring-Water-16-9-ounce-plastic-bottles-Pack-of-35%2F43240608%3FclassType%3DREGULAR%26adsRedirect%3Dtrue&adUid=98b12eac-029e-42b3-9a59-e85a5705c746-0-1&mloc=sp-search-middle&pltfm=desktop&pgId=Water&pt=search&spQs=0oGfnpBTmBv0pHO6AWzMFi31Z6kkFRKSLZTrj8l166z6L-M2N0Z-eEyycoUmpsPu6wjTCZI6wjYuu1KAShqqEOMNoWrbBc0SZxy5lY8tX9qM-IxrL6dtg_u54vJHEwCdPo6ioSDzD6Of5jgmBUu1QtpWlTj9AXmDVo_Oud5ZMiUmmoCtRmhXxpHU4nEcDiYleJctsyW9gYONHsolqS2H7BPvuRp2wemmOfD_auk3Y1KXlpXC5SMKiFDMmgD104a2OYiE3NKa97Br6PAAE_hswsNTl62ubbhc8wQo7uHqEp0&storeId=3081&specificity=broad&specificityScore=0.26884633&couponState=na&bkt=ace1_11708%7Cace2_11897%7Cace3_default%7Csearch_cassandra-first%7Ccoldstart_off%7Csearch_IU_BRAND_APPLICATION&classType=REGULAR",
          "rating": null
        }
      ],
      "name": "Water",
      "quantity": "6 cups"
    },
    {
      "listings": [
        {
          "currency_symbol": "$",
          "image_url": "https://i5.walmartimages.com/seo/Morton-All-Purpose-Iodized-Sea-Salt-26-Ounce-Pour-Spout_c55c9587-800a-4b64-ae88-45e1087c80c2.a8b5739c310eb14c7162c71e886780a0.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
          "price": 3.62,
          "product_url": "https://www.walmart.com/sp/track?bt=1&eventST=click&plmt=sp-search-middle~desktop~primary-primary&pos=1&tax=976759_976794_3029941_5999535_1878334&rdf=1&rd=https%3A%2F%2Fwww.walmart.com%2Fip%2FMorton-All-Purpose-Iodized-Sea-Salt-26-Ounce-Pour-Spout%2F19476939%3FclassType%3DVARIANT%26adsRedirect%3Dtrue&adUid=be410c72-81d4-4eba-b851-fb7f32a4f6a8-0-1&mloc=sp-search-middle&pltfm=desktop&pgId=Salt&pt=search&spQs=AYv1I4_OlUHoXyCboeRfo-xJhU1rO-alG_SP_vEnfvSq2jsMsZYrGj6MW4GQDGEq6nfDZ4oC9SNoR95tWQiazJC3ufuBZ2dltpo6V067he1cA_Z1Y1Rm4Z-d3xQbODpjm7myBmItvFc3k1IGR-BuvZfX1dCi8A6ApdtDsBnrZ04oA5SmeE1foRG5xXVUGmXd3xQPjxNUSUoN8FIF12fxJmTlSlTe4makoj1s2NoubYTqnlJLs3pohowJCRFT76Vl&storeId=3081&specificity=broad&specificityScore=0.29224324&couponState=na&bkt=ace1_11748%7Cace2_default%7Cace3_default%7Ccoldstart_on%7Csearch_GLASS_SBE_Size_Filter_Syn_Title_rWeb%7Csearch_cassandra-first&classType=VARIANT",
          "rating": null
        },
        {
          "currency_symbol": "$",
          "image_url": "https://i5.walmartimages.com/seo/Morton-Salt-Fine-Sea-Salt-Fast-Dissolving-for-Marinades-Soups-and-Dressings-17-6-oz-Canister_54d080f1-8566-44f2-8e16-4cff65588cf2.b9b10e53a9cb639ac972f0bc3ee190ab.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
          "price": 3.27,
          "product_url": "https://www.walmart.com/sp/track?bt=1&eventST=click&plmt=sp-search-middle~desktop~primary-primary&pos=2&tax=976759_976794_3029941_5999535_1878334&rdf=1&rd=https%3A%2F%2Fwww.walmart.com%2Fip%2FMorton-Salt-Fine-Sea-Salt-Fast-Dissolving-for-Marinades-Soups-and-Dressings-17-6-oz-Canister%2F10849552%3FclassType%3DVARIANT%26athbdg%3DL1600%26adsRedirect%3Dtrue&adUid=be410c72-81d4-4eba-b851-fb7f32a4f6a8-0-1&mloc=sp-search-middle&pltfm=desktop&pgId=Salt&pt=search&spQs=nnXVxCOG69YfiVgYlNf-DexJhU1rO-alG_SP_vEnfvSq2jsMsZYrGj6MW4GQDGEq7gIeIPAVcwrVmRs_oHvLA5C3ufuBZ2dltpo6V067he1cA_Z1Y1Rm4Z-d3xQbODpjeUEBfkfNwaX06Z5iOJIITPOjPGcrfVg1Y7DyJtgdMYuMVf9qCkZeiqJv5wAZ_iJKZwnKtgi23KnnYsfwtmBShm-nziNto-aUQZW3KKnjQ3j_QltLH1CWZ6gNJs04MXOC&storeId=3081&specificity=broad&specificityScore=0.29224324&couponState=na&bkt=ace1_11748%7Cace2_default%7Cace3_default%7Ccoldstart_on%7Csearch_GLASS_SBE_Size_Filter_Syn_Title_rWeb%7Csearch_cassandra-first&classType=VARIANT&athbdg=L1600",
          "rating": null
        },
        {
          "currency_symbol": "$",
          "image_url": "https://i5.walmartimages.com/seo/Morton-Salt-Sea-Salt-Natural-All-Purpose-26-Ounce_2126fd07-6321-4c5a-8c3e-9f6d2da1fb95.41ea7cd33db87168c5c9500d7e9210e7.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
          "price": 3.62,
          "product_url": "https://www.walmart.com/sp/track?bt=1&eventST=click&plmt=sp-search-middle~desktop~primary-primary&pos=3&tax=976759_976794_3029941_5999535_1878334&rdf=1&rd=https%3A%2F%2Fwww.walmart.com%2Fip%2FMorton-Salt-Sea-Salt-Natural-All-Purpose-26-Ounce%2F17283321%3FclassType%3DVARIANT%26adsRedirect%3Dtrue&adUid=be410c72-81d4-4eba-b851-fb7f32a4f6a8-0-1&mloc=sp-search-middle&pltfm=desktop&pgId=Salt&pt=search&spQs=IWg9mNr8xowDj8x3N61-u-xJhU1rO-alG_SP_vEnfvSq2jsMsZYrGj6MW4GQDGEq6F3oCNy9L759f8mFk11_w5C3ufuBZ2dltpo6V067he2hZENfvbcRt1DoMr_Mn5M-RQoU_jLvYIX67OUbHuIFrdS4Ku5Db8c1nhKXORTYLazbRKCqCU4qbzGkY5f2SyAF3xQPjxNUSUoN8FIF12fxJmTlSlTe4makoj1s2NoubYTqnlJLs3pohowJCRFT76Vl&storeId=3081&specificity=broad&specificityScore=0.29224324&couponState=na&bkt=ace1_11748%7Cace2_default%7Cace3_default%7Ccoldstart_on%7Csearch_GLASS_SBE_Size_Filter_Syn_Title_rWeb%7Csearch_cassandra-first&classType=VARIANT",
          "rating": null
        }
      ],
      "name": "Salt",
      "notes": "for pasta water",
      "quantity": "1 tablespoon"
    }
  ],
  "recipe": "Basic Pasta with Water\n\nIngredients:\n- 1 pound Pasta (Spaghetti or Penne)\n- 6 cups Water\n- 1 tablespoon Salt (for pasta water)\n\nInstructions:\n1. Bring a large pot of salted water to a boil.\n2. Add the pasta and cook according to package directions.\n3. Drain the pasta, reserving some of the pasta water if desired."
});
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setData(null);
    
    try {
      const response = await fetch("http://localhost:5000/api/recipe_listings/"+encodeURIComponent(dish) );
      
      const result = await response.json();
      console.log(result);
      setData(result);
      console.log(result)
    } catch (error) {
      console.log(error);
      alert("Error fetching recipe.");
    }
    
    setLoading(false);
  };
  
  
  const DropdownMenu = ({item , index}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => setIsOpen((prev) => !prev);
    
    return (
      <div style={{  fontFamily: "Arial, sans-serif" }}>
        <div style={{display: "inline-block", height: "20px"}}>

      <div
        onClick={toggleMenu}
        style={{
          cursor: "pointer",
          padding: "1px",
          backgroundColor: "#f2f2f2",
          border: "1px solid #ccc",
          textAlign: "center",
          userSelect: "none",
          display: "inline-block",
          fontSize: "10px"
        }}
        >
        {isOpen ? "▲" : "▼"}

        
      </div>
        <strong>{item}</strong> {" - " + data.ingredients[index].quantity + " - "}
                    <a
                      href={`https://www.walmart.com/search?q=${encodeURIComponent(
                        item
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      Buy on Walmart
                    </a>
        </div>
      <div>
      {isOpen && (
        <div
        style={{
          border: "1px solid #ccc",
          backgroundColor: "white",
          padding: "10px",
          marginTop: "5px",
          width : "490px"
        }}
        >
          
            {data.ingredients[index].listings.map((listing) => (
              <div
              style={{
              border: "1px solid #ccc",
              backgroundColor: "white",
              padding: "5px",
              marginTop: "5px",
              width : "150px",
              display : "inline-block",
              height : "150px"
            }}
              >
                <a href={listing.product_url}>
                <img src={listing.image_url} alt="Image" style={{width : "130px", display : "block"}} ></img>

                <strong>{listing.currency_symbol} {listing.price}</strong>
                <strong>{listing.rating}</strong>
                </a>
              </div>
            ))}
          
        </div>
      )}
      </div>
    </div>
      
  );
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
              
                {data.ingredients.map((item, index) => (
                  <div>
                    <DropdownMenu item={item.name} index={index}/>
                    
                  </div>
                ))}
              
            </div>

            <div className="section">
              <h2>Recipe</h2>
                {data.recipe.split('\n').map((step, index) => (
                  <div>
                    {step}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
