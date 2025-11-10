// 
export default function PrivacyPolicy() {
    return (
        <article className="text-center p-4 max-w-3xl mx-auto leading-relaxed">
            <h2 className="text-secondary font-semibold text-3xl mb-4">Privacy Policy</h2>

            <p className="mb-3">
                This Privacy Policy explains how <strong className="text-primary">RankedPlaces</strong> collects,
                uses, stores, and protects information when you use our platform. We are committed to transparency
                and to protecting your personal data.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">1. Information We Collect</h3>
            <p className="mb-3">
                When you authenticate using <strong>Google OAuth</strong>, RankedPlaces collects the following information:
            </p>
            <ul className="text-left list-disc pl-6 mb-3">
                <li><strong>Google unique ID</strong> — used to identify your account within our system.</li>
                <li><strong>Full name</strong> — used to display your contributions (e.g., place submissions, tags).</li>
                <li><strong>Email address</strong> — used for account-related notifications and to help prevent abuse.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">2. How We Use and Process Your Data</h3>
            <p className="mb-3">
                The combination of your Google unique ID, name, and email is used to:
            </p>
            <ul className="text-left list-disc pl-6 mb-3">
                <li>Authenticate and manage your account securely.</li>
                <li>Ensure fair voting (one vote per authenticated user per place) and prevent duplicate or fraudulent activity.</li>
                <li>Attribute content (places, tags, reviews) to the correct user and display author information where appropriate.</li>
                <li>Send essential account notifications (e.g., moderation messages, important updates).</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">3. Data Storage and Retention</h3>
            <p className="mb-3">
                We store the Google unique ID, name, and email in our database for as long as your account exists or as needed
                to support platform functionality (voting history, content ownership, moderation). If you request account deletion,
                we will remove or anonymize personal data according to our deletion procedures.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">4. Cookies and Local Storage</h3>
            <p className="mb-3">
                RankedPlaces may use cookies or local storage to maintain your authenticated session and save non-sensitive preferences
                (for example, UI theme). Cookies do not contain your password or any other secret credentials.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">5. Data Security</h3>
            <p className="mb-3">
                We take reasonable technical and organizational measures to protect your data, including encrypted HTTPS transport
                and secure storage practices. Access to stored personal data is limited to authorized personnel and services
                that require it to operate or support the application.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">6. Third-Party Sharing</h3>
            <p className="mb-3">
                Apart from Google (as the identity provider), RankedPlaces does not sell, rent, or share your personal information
                with third-party advertisers. We may disclose data if required by law or to respond to lawful requests from public
                authorities, or to protect the rights, property, or safety of RankedPlaces and its users.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">7. Your Rights and Choices</h3>
            <p className="mb-3">
                You can sign out at any time. To delete your account or request data removal, contact us (see below) and we will
                follow our account-deletion procedure to remove or anonymize identifiable information. You may also manage Google-side
                permissions through your Google account settings.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">8. Early-Stage Notice</h3>
            <p className="mb-3">
                RankedPlaces is an early-stage product. As features evolve, this policy may be updated. Any material changes will
                be posted here with an updated effective date.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">9. Contact</h3>
            <p className="mb-3">
                If you have questions, requests about your data, or concerns about this policy, please contact
                <a
                    href=""
                    className="text-primary underline ml-1"
                >
                </a>.
            </p>

            <p className="text-sm text-gray-500 mt-6">
                Effective Date: November 10, 2025 — RankedPlaces is committed to protecting your privacy and will
                continue to improve our practices as the platform grows.
            </p>
        </article>
    );
}
