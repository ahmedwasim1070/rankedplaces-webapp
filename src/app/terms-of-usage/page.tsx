// 
export default function TermsOfUsage() {
    return (
        <article className="text-center p-4 max-w-3xl mx-auto leading-relaxed">
            <h2 className="text-secondary font-semibold text-3xl mb-4">How to Use RankedPlaces</h2>

            <p className="mb-3">
                <strong className="text-primary">RankedPlaces</strong> is designed to make discovering and ranking places simple, transparent,
                and community-driven. Here’s how the platform works and what you can do once you land on the site.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">1. Explore and Discover</h3>
            <p className="mb-3">
                When you first arrive, you’ll immediately see trending tags, search options, and featured places shared by other users.
                Each place is categorized under specific tags — such as cafés, parks, viewpoints, or local shops — allowing you to easily browse
                based on what interests you most.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">2. Sign In for Personalized Access</h3>
            <p className="mb-3">
                To ensure fair and secure participation, voting and content creation require signing in through
                <strong> Google OAuth</strong>. This sign-in process uses a unique Google ID solely to verify identity
                for voting purposes — <strong>no personal information is collected, stored, or shared</strong> with any third parties.
                Your privacy remains fully protected.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">3. Vote on Places You Love</h3>
            <p className="mb-3">
                Once signed in, you can upvote or downvote places based on your genuine opinion. Each vote helps surface
                the best-rated and most authentic locations in every tag category. This community-based ranking ensures
                fairness and helps users quickly identify top-rated local spots.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">4. Create Tags and Add New Places</h3>
            <p className="mb-3">
                As a registered user, you can also create new tags or add places that others might have missed.
                For now, the platform remains flexible — allowing users to freely experiment by adding tags and places
                without strict restrictions during this early phase. The goal is to grow the community naturally and
                see where creativity takes it.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">5. Understand Tag Behavior</h3>
            <p className="mb-3">
                The default tag <strong>“All”</strong> displays a global leaderboard of top-ranked places from all categories.
                While you can’t vote directly within this tag, it offers a quick overview of which places are currently leading overall.
                To vote, simply select a tag from the carousel — showcasing the top 25 trending tags — or search for a specific one
                using the search bar. If a tag doesn’t exist, you can create it instantly.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-secondary">6. Our Early Stage Commitment</h3>
            <p className="mb-3">
                <strong>RankedPlaces</strong> is still in its early development stage, and we’re testing how users engage
                with the system before applying stricter content rules. Your feedback and interaction help shape how
                the platform evolves — making it a space where discovery and community truly matter.
            </p>

            <p className="text-sm text-gray-500 mt-6">
                By using RankedPlaces, you agree to participate responsibly — voting fairly, avoiding spam,
                and respecting the community spirit that keeps this platform thriving.
            </p>
        </article>
    );
}
