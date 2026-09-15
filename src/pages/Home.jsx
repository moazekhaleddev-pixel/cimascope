import HeroSection from "../features/home/components/heroSection/HeroSection";
import ListSlder from "../components/listSlider/ListSlider";
import Loader from "../components/comon/Loader";
import ErrorMessage from "../features/home/components/ErrorMessage";
import FeaturedBanner from "../features/home/components/FeaturedBanner";
import useRenderHome from "../hooks/useRenderHome";

export default function Home() {
  const { isLoading, isNetworkErr, sectionsErrors, sectionsConfig } =
    useRenderHome();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main>
          {isNetworkErr ? (
            <ErrorMessage message={sectionsErrors.trendingToday} />
          ) : (
            <>
              <HeroSection />
              <div className="container">
                {sectionsConfig.map((section, index) => {
                  if (section.type === "custom-banner") {
                    if (section.error) {
                      return (
                        <ErrorMessage key={index} message={section.error} />
                      );
                    }

                    return <FeaturedBanner data={section.list} />;
                  }

                  return section.error ? (
                    <ErrorMessage key={index} message={section.error} />
                  ) : (
                    <ListSlder
                      key={index}
                      category={section.category}
                      list={section.list}
                      label={section.label}
                    />
                  );
                })}
              </div>
            </>
          )}
        </main>
      )}
    </>
  );
}
