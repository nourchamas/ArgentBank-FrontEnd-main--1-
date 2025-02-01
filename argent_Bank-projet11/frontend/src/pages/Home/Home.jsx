import React from "react";
import Banner from "../../components/Banner.jsx";
import Item from "../../components/Item.jsx";
import FeaturesItemData from "../../data/FeaturesItemData.json";
import iconChat from "../../assets/icons/icon-chat.webp";
import iconMoney from "../../assets/icons/icon-money.webp";
import iconSecurity from "../../assets/icons/icon-security.webp";

function Home() {
  const imageData = {
    "icon-chat.webp": iconChat,
    "icon-money.webp": iconMoney,
    "icon-security.webp": iconSecurity,
  };

  return (
    <div className="homepage">
      <main>
        <Banner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {FeaturesItemData.map((data) => (
            <Item
              key={data.id}
              image={imageData[data.image]}
              descriptionImage={data.descriptionImage}
              title={data.title}
              description={data.description}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Home;
