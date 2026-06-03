import { privacyPolicyBlocks } from "./privacyPolicyContent";

type PrivacyPolicyPageProps = {
  onBack: () => void;
};

export default function PrivacyPolicyPage({ onBack }: PrivacyPolicyPageProps) {
  return (
    <main className="bg-[#FAFAFA] min-h-screen px-[32px] py-[32px] text-[#393939]">
      <div className="mx-auto w-full max-w-[720px]">
        <button
          className="font-['SF_Pro_Rounded',ui-rounded,system-ui,sans-serif] font-medium leading-[21.6px] text-[#BFBFBF] text-[18px]"
          onClick={onBack}
          type="button"
        >
          Back
        </button>
        <section className="pt-[128px]">
          <h1 className="font-['SF_Pro_Rounded',ui-rounded,system-ui,sans-serif] font-semibold leading-[43.2px] text-[36px]">
            Privacy Policy
          </h1>
          <div className="font-['SF_Pro_Rounded',ui-rounded,system-ui,sans-serif] mt-[32px] text-[18px]">
            {privacyPolicyBlocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    className="font-semibold leading-[24px] mt-[40px] text-[#393939] whitespace-pre-line"
                    key={`${block.type}-${index}`}
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "divider") {
                return <div className="bg-[#E4E4E4] h-px mt-[32px]" key={`${block.type}-${index}`} />;
              }

              if (block.type === "listItem") {
                return (
                  <p
                    className="font-medium leading-[24px] mt-[14px] pl-[20px] relative text-[#686868] whitespace-pre-line before:absolute before:left-0 before:top-0 before:content-['-']"
                    key={`${block.type}-${index}`}
                  >
                    {block.text}
                  </p>
                );
              }

              return (
                <p
                  className={`font-medium leading-[24px] text-[#686868] whitespace-pre-line ${
                    block.type === "meta" ? "mt-[24px]" : "mt-[16px]"
                  }`}
                  key={`${block.type}-${index}`}
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
