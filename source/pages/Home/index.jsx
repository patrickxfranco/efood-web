import { Container, Detach } from "./styles";

import { HomeSection } from "../../components/HomeSection";
import { FoodCard } from "../../components/FoodCard";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import food2 from "../../assets/Mask group-2.png";
import food1 from "../../assets/Mask group.png";

import food from "../../assets/food.png";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Detach>
          <img src={food} alt="Imagem de ingredientes" />
          <div>
            <span>Sabores inigualáveis</span>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </Detach>
      </main>
      <HomeSection title="Refeições">
        <FoodCard foodName="Salada Ravanello" foodPrice={49.97} foodPicture={food1} />
        <FoodCard foodName="Spaguetti Gambe" foodPrice={79.97} foodPicture={food2} />
        <FoodCard foodName="Spaguetti Gambe" foodPrice={79.97} foodPicture={food2} />
      </HomeSection>
      <HomeSection title="Sobremesas">
        <FoodCard foodName="Spaguetti Gambe" foodPrice={79.97} foodPicture={food2} />
        <FoodCard foodName="Salada Ravanello" foodPrice={49.97} foodPicture={food1} />
        <FoodCard foodName="Spaguetti Gambe" foodPrice={79.97} foodPicture={food2} />
      </HomeSection>
      <HomeSection title="Bebidas">
        <FoodCard foodName="Salada Ravanello" foodPrice={49.97} foodPicture={food1} />
        <FoodCard foodName="Spaguetti Gambe" foodPrice={79.97} foodPicture={food2} />
        <FoodCard foodName="Spaguetti Gambe" foodPrice={79.97} foodPicture={food2} />
      </HomeSection>
      <Footer />
    </Container>
  );
}
