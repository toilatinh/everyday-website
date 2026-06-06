import type { PrivacyPolicyBlock } from "./privacyPolicyContent";

export const termsOfServiceBlocks: PrivacyPolicyBlock[] = [
  {
    type: "meta",
    text: "Version: 1.1 (Standard Enterprise Version)\nEffective Date: May 17, 2026\nLanguage: English",
  },
  {
    type: "divider",
    text: "",
  },
  {
    type: "paragraph",
    text: "Welcome to Everyday!",
  },
  {
    type: "paragraph",
    text: "These Terms of Service (referred to as \"Terms\") constitute a legally binding agreement between you (\"User\" or \"you\") and the Everyday development team (referred to as \"Everyday\", \"we\", \"us\", or \"our\"). Please read these Terms carefully before installing or using the Everyday mobile application.",
  },
  {
    type: "paragraph",
    text: "By registering an account via Google OAuth or Apple Sign-In, or by utilizing any features of the Everyday application (including GPS map recording, social sharing, live activities, or widgets), you acknowledge that you have read, understood, and agreed to be bound by these Terms and our accompanying Privacy Policy. If you do not agree to these Terms, you must immediately uninstall the application and cease all use of our services.",
  },
  {
    type: "heading",
    text: "1: ELIGIBILITY AND ACCOUNT REGISTRATION",
  },
  {
    type: "paragraph",
    text: "To use the Everyday application, you must satisfy the following criteria:",
  },
  {
    type: "paragraph",
    text: "1. Minimum Age Requirement: You must be at least 13 years old (or the minimum age required in your jurisdiction for online data processing, such as 16 years old in the European Union). Everyday strictly complies with international child safety regulations, including COPPA and GDPR.",
  },
  {
    type: "paragraph",
    text: "2. Legal Capacity: You must possess the full legal capacity to enter into binding agreements and perform your legal obligations.",
  },
  {
    type: "paragraph",
    text: "3. Valid Authentication: You must log in using supported third-party authentication services, including Google OAuth or Apple Sign-In. You are solely responsible for maintaining the security of your authentication credentials on those respective platforms.",
  },
  {
    type: "heading",
    text: "2: USER-GENERATED CONTENT AND LICENSING",
  },
  {
    type: "paragraph",
    text: "Everyday is a social platform that integrates personal fitness tracking. Users have the right to upload content including profile avatars, nicknames, physical activity records, GPS route maps, and feedback submissions.",
  },
  {
    type: "paragraph",
    text: "2.1 User Ownership\nYou retain full ownership of all content that you create and upload to the Everyday application (User-Generated Content or \"UGC\"). We do not claim ownership rights over your photos, route maps, or physical activity metrics.",
  },
  {
    type: "paragraph",
    text: "2.2 License Granted to Everyday\nTo enable the proper functioning of the Everyday application and to facilitate the distribution of your data to your friends as designed, you hereby grant Everyday a non-exclusive, royalty-free, worldwide, transferable, and sublicensable license to:",
  },
  {
    type: "listItem",
    text: "a. Host, store, reproduce, transmit, display, process, reformat, translate, and distribute your content across our database servers (Supabase PostgreSQL), image CDN (Cloudflare R2 Storage), and related technical infrastructure.",
  },
  {
    type: "listItem",
    text: "b. Display your activity logs, route maps, and speed metrics on the Feed of users whom you have accepted as friends within the application.",
  },
  {
    type: "listItem",
    text: "c. Utilize the feedback submissions you transmit through our settings panel to analyze and optimize our Google Sheets storage system, without any financial obligation or compensation to you.",
  },
  {
    type: "paragraph",
    text: "This license will automatically terminate when you delete your content or permanently erase your account from our systems.",
  },
  {
    type: "heading",
    text: "3: COMMUNITY STANDARDS AND USER CONDUCT (UGC SAFETY, REPORTING, AND BLOCKING)",
  },
  {
    type: "paragraph",
    text: "To comply with the operating policies of the Apple App Store (specifically Guideline 1.2 regarding User-Generated Content) and to ensure a safe environment for all users, Everyday maintains a Zero-Tolerance Policy against abusive behavior or objectionable content.",
  },
  {
    type: "paragraph",
    text: "3.1 Prohibited Content\nYou agree not to create, upload, or share any content that falls into the following categories:",
  },
  {
    type: "listItem",
    text: "a. Obscene, pornographic, sexually explicit, or indecent content.",
  },
  {
    type: "listItem",
    text: "b. Hate speech, threats, harassment, defamation, or content that incites violence against individuals or groups.",
  },
  {
    type: "listItem",
    text: "c. Content promoting self-harm, illegal drug use, or any unlawful activities.",
  },
  {
    type: "listItem",
    text: "d. Falsified GPS data or artificial workout records intended to manipulate physical metrics.",
  },
  {
    type: "paragraph",
    text: "3.2 Reporting and Blocking Mechanisms\nTo maintain a safe and supportive community, Everyday provides intuitive moderation tools:",
  },
  {
    type: "listItem",
    text: "a. Unfriending and Blocking: You have the right to unfriend or permanently block any user through their profile screen. Once blocked, the user will be entirely unable to view your activity feed or send you friend requests.",
  },
  {
    type: "listItem",
    text: "b. Administrative Moderation: Everyday reserves the right (but assumes no obligation) to screen, monitor, edit, or immediately remove any user profile information (such as avatars or nicknames) or activity records that violate our community standards or receive multiple abuse reports from other users, without prior notice.",
  },
  {
    type: "heading",
    text: "4: LOCATION SERVICES AND GPS DATA DISCLAIMER",
  },
  {
    type: "paragraph",
    text: "1. Mapping Infrastructure: The route recording feature in the Everyday application utilizes third-party map services provided by Apple MapKit. By using this feature, you agree to comply with the Apple Maps Terms of Use.",
  },
  {
    type: "paragraph",
    text: "2. GPS Accuracy: GPS maps, distances, and speed calculations depend heavily on your device hardware, weather conditions, and mobile network availability. Everyday does not warrant the absolute accuracy of the recorded routes or fitness metrics.",
  },
  {
    type: "heading",
    text: "5: HEALTH AND FITNESS SAFETY DISCLAIMER",
  },
  {
    type: "paragraph",
    text: "Everyday is designed strictly to record personal fitness logs and does not provide medical advice, professional training programs, or health diagnoses.",
  },
  {
    type: "paragraph",
    text: "The fitness metrics displayed within the application (including speed, distance, and duration) are for informational purposes only and should not replace medically certified diagnostic equipment.",
  },
  {
    type: "paragraph",
    text: "Before beginning any high-intensity physical activities (such as long-distance running or cycling), you should consult a qualified healthcare professional. Everyday is entirely exempt from liability for any physical injury, traffic accidents, or medical emergencies that occur while utilizing the application during outdoor workouts.",
  },
  {
    type: "heading",
    text: "6: LIMITATION OF LIABILITY",
  },
  {
    type: "paragraph",
    text: "To the maximum extent permitted by applicable law, Everyday and its technical infrastructure partners (including Supabase, Cloudflare, and Google Sheets APIs) shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:",
  },
  {
    type: "listItem",
    text: "a. Loss of workout records or GPS location history due to mobile network disruptions.",
  },
  {
    type: "listItem",
    text: "b. Authentication breaches arising from third-party login providers (Google/Apple).",
  },
  {
    type: "listItem",
    text: "c. Interruptions, technical downtime, or data loss associated with Supabase database servers or Cloudflare CDN services.",
  },
  {
    type: "listItem",
    text: "d. Uncivil, abusive, or unlawful behavior of other users on the Everyday platform.",
  },
  {
    type: "heading",
    text: "7: INDEMNIFICATION",
  },
  {
    type: "paragraph",
    text: "You agree to defend, indemnify, and hold harmless Everyday, its development team, and its contributors from and against any claims, lawsuits, legal fees, or liabilities arising out of or related to:",
  },
  {
    type: "listItem",
    text: "a. Your uploaded user content violating any third-party copyrights, intellectual property, or privacy rights.",
  },
  {
    type: "listItem",
    text: "b. Your violation of any provisions within these Terms.",
  },
  {
    type: "listItem",
    text: "c. Any traffic violations, negligence, or accidents occurring during outdoor workouts recorded via the Everyday application.",
  },
  {
    type: "heading",
    text: "8: GOVERNING LAW AND DISPUTE RESOLUTION (CLASS ACTION WAIVER)",
  },
  {
    type: "paragraph",
    text: "1. Governing Law: These Terms shall be governed by and construed in accordance with the laws of the Socialist Republic of Vietnam (or the standard international jurisdiction guidelines of the Apple App Store in the event of global disputes).",
  },
  {
    type: "paragraph",
    text: "2. Class Action Waiver: You agree that any disputes between you and Everyday will be resolved through good-faith negotiations or individual binding arbitration. You voluntarily waive your right to participate in class-action lawsuits or class-wide arbitration against Everyday.",
  },
  {
    type: "heading",
    text: "9: TERM, MODIFICATIONS, AND TERMINATION",
  },
  {
    type: "paragraph",
    text: "1. Modifications: We reserve the right to update these Terms at any time to accommodate new features or regulatory adjustments. You will be notified of changes directly within the application and must accept the revised Terms to continue using our services.",
  },
  {
    type: "paragraph",
    text: "2. Termination: You have the right to delete your account at any time through the Settings panel. Everyday also reserves the right to suspend or permanently delete your account on Supabase if you are found to be in material breach of the safety standards set forth in these Terms.",
  },
  {
    type: "paragraph",
    text: "If you have any questions regarding these Terms of Service, please contact us using the \"Feedback for us\" feature integrated directly within the Settings menu of the application.",
  },
];
