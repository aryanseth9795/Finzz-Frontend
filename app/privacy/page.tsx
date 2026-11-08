import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";
import { SUPPORT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy · Finzz",
  description:
    "What Finzz collects, how it is used, who sees it and how to delete it.",
};

const contact = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={
        <p>
          This policy explains how Finzz (&ldquo;we&rdquo;) handles your
          information. Questions? Write to {contact}.
        </p>
      }
      sections={[
        {
          heading: "What we collect",
          body: (
            <ul>
              <li>
                Account details: name, phone number and email. Your password is
                stored only as a hash.
              </li>
              <li>An optional profile photo, stored with Cloudinary.</li>
              <li>
                What you add: transactions with friends, pool entries, personal
                expenses and income with category, payment mode and remarks,
                and notes.
              </li>
              <li>Friend connections.</li>
              <li>Your device&apos;s push notification token.</li>
              <li>
                Daily usage counts (app opens and requests per day, kept 180
                days) for capacity and abuse protection.
              </li>
              <li>IP addresses in server logs and rate limits, for security.</li>
            </ul>
          ),
        },
        {
          heading: "What we don't collect",
          body: (
            <ul>
              <li>
                Password Vault contents. They are encrypted on your phone only;
                we can&apos;t read or recover them.
              </li>
              <li>Your contacts, location, SMS or advertising ID.</li>
              <li>There are no ads, and we never sell your data.</li>
            </ul>
          ),
        },
        {
          heading: "How we use it",
          body: (
            <ul>
              <li>To run the service.</li>
              <li>To show shared records to the friends involved.</li>
              <li>To send notifications.</li>
              <li>To send account emails (one-time codes, password reset).</li>
              <li>For security.</li>
            </ul>
          ),
        },
        {
          heading: "Who sees it",
          body: (
            <ul>
              <li>
                The friends you share with (shared transactions, shared notes).
              </li>
              <li>
                Service providers who process data for us: hosting (Render),
                our cloud database, Cloudinary (images), Resend (email), and
                Expo and Google Firebase Cloud Messaging (notifications).
              </li>
              <li>Authorities, when the law requires it.</li>
            </ul>
          ),
        },
        {
          heading: "Retention",
          body: (
            <ul>
              <li>Kept while your account exists.</li>
              <li>Deleted when you delete your account.</li>
              <li>Push delivery records are kept 3 days.</li>
              <li>Usage counts are kept 180 days.</li>
            </ul>
          ),
        },
        {
          heading: "Security",
          body: (
            <p>
              HTTPS everywhere, hashed passwords and session tokens, and access
              checks on every request.
            </p>
          ),
        },
        {
          heading: "Your choices",
          body: (
            <ul>
              <li>Edit your profile in the app.</li>
              <li>
                Delete your account in the app or through{" "}
                <Link href="/delete-account">/delete-account</Link>.
              </li>
              <li>Turn notifications off in Android settings.</li>
            </ul>
          ),
        },
        {
          heading: "Children",
          body: <p>Finzz is not intended for anyone under 18.</p>,
        },
        {
          heading: "Changes",
          body: <p>We update this page and the date above when this changes.</p>,
        },
        { heading: "Contact", body: <p>{contact}</p> },
      ]}
    />
  );
}
