import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { SUPPORT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  title: "Delete your Finzz account · Finzz",
  description: "How to delete your Finzz account and what happens to your data.",
};

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete your Finzz account"
      sections={[
        {
          heading: "In the app",
          body: (
            <p>
              Account &rarr; <strong>Delete account</strong> &rarr; enter your
              password &rarr; type DELETE &rarr;{" "}
              <strong>Delete my account</strong>.
            </p>
          ),
        },
        {
          heading: "What is deleted",
          body: (
            <ul>
              <li>Your profile and login.</li>
              <li>Personal expenses, categories and reports.</li>
              <li>Your 1:1 chats and their transactions, for both people.</li>
              <li>Notes you own.</li>
              <li>Pool entries you added.</li>
            </ul>
          ),
        },
        {
          heading: "What stays",
          body: (
            <ul>
              <li>
                The Password Vault on your phone. It never left your device;
                uninstall the app to remove it.
              </li>
              <li>Notes friends shared with you stay with their owners.</li>
              <li>Pools keep their other members.</li>
            </ul>
          ),
        },
        {
          heading: "Deletion is immediate",
          body: (
            <p>
              <strong>Deletion is immediate and can&apos;t be undone.</strong>
            </p>
          ),
        },
        {
          heading: "Can't open the app?",
          body: (
            <p>
              Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> from
              the email address on your account, with the subject
              &ldquo;Delete my Finzz account&rdquo; and your registered phone
              number. We verify it&apos;s you and delete the account within 30
              days, usually much sooner.
            </p>
          ),
        },
      ]}
    />
  );
}
