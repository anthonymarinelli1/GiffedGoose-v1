# Gift Matcher Design Guidelines

## Design Approach
**Selected Approach:** Hybrid - Modern SaaS Interface with E-commerce Inspiration

Drawing from Etsy's warm, approachable aesthetic combined with Linear's clean typography and Stripe's restrained color use. The interface should feel helpful and delightful while maintaining professional clarity.

**Core Principles:**
- Approachable warmth balanced with professional cleanliness
- Clear visual hierarchy guiding users through the gift discovery process
- Delight through subtle interactions without overwhelming the utility

## Color Palette

**Light Mode:**
- Primary: 280 65% 60% (Warm purple - inviting, gift-appropriate)
- Primary hover: 280 65% 50%
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Border: 220 13% 91%
- Text primary: 220 15% 15%
- Text secondary: 220 10% 45%

**Dark Mode:**
- Primary: 280 60% 65%
- Primary hover: 280 60% 75%
- Background: 220 15% 10%
- Surface: 220 13% 14%
- Border: 220 13% 23%
- Text primary: 0 0% 95%
- Text secondary: 220 10% 65%

**Accent Colors:**
- Success (for recommended badges): 142 71% 45%
- Warning (budget alerts): 38 92% 50%

## Typography

**Font Families:**
- Primary: Inter (Google Fonts) - For all UI elements
- Use font-weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Scale:**
- Headings: text-3xl (hero), text-2xl (section), text-xl (cards), text-lg (subsections)
- Body: text-base (primary), text-sm (secondary), text-xs (metadata)
- Line heights: leading-tight (headings), leading-relaxed (body)

## Layout System

**Spacing Primitives:** Consistently use Tailwind units: 2, 4, 6, 8, 12, 16, 24
- Micro spacing (p-2, gap-2): Between related small elements
- Component spacing (p-4, p-6): Card padding, form field gaps
- Section spacing (p-8, p-12, py-16): Major layout blocks
- Page margins (p-24, px-32): Outer container spacing

**Grid System:**
- Desktop: Two-column layout (grid-cols-2) with 60/40 split - form takes 40%, recommendations 60%
- Tablet: Stack to single column (grid-cols-1) at md breakpoint
- Max container width: max-w-7xl
- Column gap: gap-8 (desktop), gap-6 (mobile)

## Component Library

**Form Column (Left):**
- Container: Sticky positioning (sticky top-8) to remain visible during scroll
- Card wrapper: Surface background, rounded-xl, shadow-lg, p-8
- Form layout: Vertical stack with gap-6
- Input fields:
  - Background: Surface with subtle border
  - Rounded: rounded-lg
  - Padding: px-4 py-3
  - Focus state: Ring with primary color (ring-2 ring-primary)
  - Labels: text-sm font-medium mb-2
- Select dropdowns: Match input styling with chevron icon
- Budget slider: Custom range input with primary color track
- Submit button: w-full, bg-primary, text-white, py-3, rounded-lg, font-semibold, shadow-md

**Recommendations Column (Right):**
- Card grid: grid grid-cols-1 gap-6
- Gift cards:
  - Surface background, rounded-xl, overflow-hidden, shadow-md
  - Hover: Subtle lift (hover:shadow-xl, transition-shadow duration-300)
  - Image placeholder: aspect-square or aspect-video, bg-gradient-to-br from primary/10 to primary/5
  - Content padding: p-6
  - Gift name: text-xl font-semibold mb-2
  - Description: text-sm text-secondary leading-relaxed mb-4
  - Price badge: Inline-flex, px-3 py-1, rounded-full, bg-primary/10, text-primary, font-medium
  - Purchase link: mt-4, text-primary, font-medium, underline decoration-2 underline-offset-4
- Empty state: Centered illustration placeholder with helpful text

**Navigation/Header:**
- Fixed or static header: px-8 py-6
- Logo/title: text-2xl font-bold with gradient text (from primary to primary-dark)
- Optional tagline: text-sm text-secondary
- Clean, minimal with no clutter

**Loading States:**
- Skeleton screens for gift cards: Animate pulse on surface background
- Button loading: Spinner icon with "Finding perfect gifts..." text

**Error States:**
- Alert banner: bg-red-50 dark:bg-red-900/20, border-l-4 border-red-500, p-4, rounded-r

## Images

**Hero Section (Optional Small Header):**
No large hero image - this is a utility tool that should get users to the form immediately. Instead:
- Small decorative header with gift-themed illustration or icon
- Could use simple SVG illustration of wrapped gifts (200-300px height)
- Position: Center-aligned above the main content

**Gift Recommendation Cards:**
- Each gift card should display a product image
- Placeholder: Use subtle gradient backgrounds (from-purple-100 to-pink-100 for light, from-purple-900/20 to-pink-900/20 for dark)
- Image dimensions: Square or 16:9 aspect ratio
- Position: Top of each card, full-width
- Border radius: Inherit card's rounded-xl on top corners

## Animations

**Minimal Motion:**
- Hover transitions: transition-all duration-300 on cards
- Button interactions: Native browser defaults (no custom animations)
- Loading spinner: Simple rotating circle
- No scroll-triggered animations
- No parallax effects

---

**Final Note:** The design should feel warm and helpful - like a knowledgeable friend helping you find the perfect gift. Prioritize clarity and usability over decorative elements. The form should be immediately accessible, and recommendations should be scannable at a glance with clear pricing and purchase pathways.