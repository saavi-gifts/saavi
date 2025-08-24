import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { CatalogGrid } from "@/components/CatalogGrid";
import { CatalogFilters } from "@/components/CatalogFilters";

export default function Catalog() {
  return (
    <Container>
      <SectionTitle
        preTitle="Gift Catalog"
        title="Curated Collections for Every Occasion"
      >
        Discover our handpicked selection of artisan-crafted gifts. From elegant jewelry 
        to premium beauty products, each item supports rural artisans and remote manufacturers 
        while celebrating traditional Indian craftsmanship.
      </SectionTitle>

      <Container>
        <div className="flex flex-col justify-center py-6">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Supporting <span className="text-saavi-gold">50+</span> rural artisan{" "}
            businesses and remote manufacturers across India
          </div>
        </div>
      </Container>

      <CatalogFilters />
      <CatalogGrid />
    </Container>
  );
}