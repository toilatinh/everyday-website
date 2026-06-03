import Frame1321313990 from "../../imports/Frame1321313990/Frame1321313990";

type HomePageProps = {
  onNavigatePrivacyPolicy: () => void;
};

export default function HomePage({ onNavigatePrivacyPolicy }: HomePageProps) {
  return <Frame1321313990 onPrivacyPolicyClick={onNavigatePrivacyPolicy} />;
}
