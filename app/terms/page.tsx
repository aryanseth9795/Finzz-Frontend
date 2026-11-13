import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { SUPPORT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  title: "Terms of Service · Finzz",
  description: "The terms for using the Finzz app.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      sections={[
        {
          heading: "Using Finzz",
          body: (
            <p>
              By using Finzz you agree to these terms. If you do not agree,
              please do not use the app.
            </p>
          ),
        },
        {
          heading: "Who can use Finzz",
          body: (
            <p>
              Finzz is for people aged 18 and over. If you are under 18, please
              do not create an account.
            </p>
          ),
        },
        {
          heading: "Your account",
          body: (
            <p>
              You are responsible for your account and for keeping your
              password safe. Tell us if you think someone else has access.
            </p>
          ),
        },
        {
          heading: "Your content",
          body: (
            <p>
              You are responsible for what you add to Finzz, including that it
              is accurate and that you may share it.
            </p>
          ),
        },
        {
          heading: "Not a financial service",
          body: (
            <p>
              Finzz records money but never moves, holds or lends it, and it is
              not financial advice.
            </p>
          ),
        },
        {
          heading: "Acceptable use",
          body: (
            <p>
              Do not abuse the service, try to break or overload it, or use it
              for anything unlawful.
            </p>
          ),
        },
        {
          heading: "No warranty",
          body: (
            <p>
              The service is provided &ldquo;as is&rdquo;, with no warranty of
              any kind.
            </p>
          ),
        },
        {
          heading: "Limitation of liability",
          body: (
            <p>
              To the extent the law allows, we are not liable for any loss or
              damage arising from your use of Finzz.
            </p>
          ),
        },
        {
          heading: "Ending your use",
          body: (
            <p>
              You may stop at any time by deleting your account. We may suspend
              accounts that abuse the service.
            </p>
          ),
        },
        {
          heading: "Changes",
          body: <p>We may update these terms and will change the date above.</p>,
        },
        {
          heading: "Contact",
          body: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>,
        },
      ]}
    />
  );
}
