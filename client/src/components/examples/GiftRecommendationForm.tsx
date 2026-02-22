import GiftRecommendationForm from "../GiftRecommendationForm";

export default function GiftRecommendationFormExample() {
  const handleSubmit = (formData: any) => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-md">
      <GiftRecommendationForm onSubmit={handleSubmit} isLoading={false} />
    </div>
  );
}
