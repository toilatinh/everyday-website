import Frame1321313990 from "../../imports/Frame1321313990/Frame1321313990";

type HomePageProps = {
  onNavigatePrivacyPolicy: () => void;
  onNavigateTermsOfService: () => void;
};

export default function HomePage({ onNavigatePrivacyPolicy, onNavigateTermsOfService }: HomePageProps) {
  return (
    <Frame1321313990
      onPrivacyPolicyClick={onNavigatePrivacyPolicy}
      onTermsOfServiceClick={onNavigateTermsOfService}
    />
  );
}
