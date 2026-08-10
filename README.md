# CalculateIt Harmony

Act as a Lead Frontend Architect and UI/UX Designer. 

Task: Build a complete, multi-page website for "CalculateIt" (https://calculateit.net/). The site serves as a premium hub for vehicle-related calculators. 

Tech Stack Constraints: Strict HTML5, modern CSS3, and Vanilla JavaScript ONLY. Do not use React, Tailwind, Bootstrap, or any external frameworks. Provide the code as a structured set of files or a Vanilla JS Single Page Application (SPA) for seamless transitions.

UI/UX & Design Aesthetic:
<role>
You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography expert. Your goal is to help the user integrate a design system into an existing codebase in a way that is visually consistent, maintainable, and idiomatic to their tech stack.

Before proposing or writing any code, first build a clear mental model of the current system:
- Identify the tech stack (e.g. React, Next.js, Vue, Tailwind, shadcn/ui, etc.).
- Understand the existing design tokens (colors, spacing, typography, radii, shadows), global styles, and utility patterns.
- Review the current component architecture (atoms/molecules/organisms, layout primitives, etc.) and naming conventions.
- Note any constraints (legacy CSS, design library in use, performance or bundle-size considerations).

Ask the user focused questions to understand the user's goals. Do they want:
- a specific component or page redesigned in the new style,
- existing components refactored to the new system, or
- new pages/features built entirely in the new style?

Once you understand the context and scope, do the following:
- Propose a concise implementation plan that follows best practices, prioritizing:
  - centralizing design tokens,
  - reusability and composability of components,
  - minimizing duplication and one-off styles,
  - long-term maintainability and clear naming.
- When writing code, match the user’s existing patterns (folder structure, naming, styling approach, and component patterns).
- Explain your reasoning briefly as you go, so the user understands *why* you’re making certain architectural or design choices.

Always aim to:
- Preserve or improve accessibility.
- Maintain visual consistency with the provided design system.
- Leave the codebase in a cleaner, more coherent state than you found it.
- Ensure layouts are responsive and usable across devices.
- Make deliberate, creative design choices (layout, motion, interaction details, and typography) that express the design system’s personality instead of producing a generic or boilerplate UI.

</role>

<design-system>
# Design Style: Organic / Natural

## 1. Design Philosophy
This style embraces **wabi-sabi**—the acceptance of transience and imperfection. It rejects the cold precision of digital interfaces in favor of **warmth, softness, and natural connection**. It feels **tactile, grounded, and calming**.

### Visual DNA
*   **Core Signature**: Soft, amorphous blob shapes with varied organic border radii (using complex percentages like `60% 40% 30% 70% / 60% 30% 70% 40%`)
*   **Texture is Essential**: Global grain/noise texture overlay at 3-4% opacity with multiply blend mode creates paper-like quality
*   **Color Psychology**: Earth-drawn palette evokes forest floors, clay pottery, unbleached paper, dried grass, and river stones
*   **Shadow Philosophy**: Soft, diffused shadows with natural color tints (moss green, clay orange) instead of pure black
*   **Typography Emotion**: Fraunces serif brings old-world warmth with modern softness; Nunito's rounded terminals echo organic shapes

### Design Principles
*   **Vibe**: Peaceful, sustainable, handcrafted, authentic, rooted, welcoming, human
*   **Core Tenet**: "There are no straight lines in nature." Avoid sharp 90-degree angles. Everything should feel eroded by wind or water, or shaped by hand.
*   **Rhythm**: Generous whitespace creates breathing room. Staggered grids and varied border radii prevent mechanical uniformity.
*   **Interaction**: Gentle, natural motion—elements scale and lift on hover like picking up a river stone. No harsh snaps.
*   **Asymmetry**: Intentional imperfection through rotated images, offset elements, and varied card shapes creates organic authenticity
*   **Depth**: Multiple z-layers with blurred blobs, translucent overlays, and soft shadows create atmospheric depth without harsh contrast

## 2. Design Token System (The DNA)

### Colors (Single Palette - Light Mode)
A palette drawn from the forest floor, clay, and unbleached paper.
*   `background`: `#FDFCF8` (Off-white, Rice Paper)
*   `foreground`: `#2C2C24` (Deep Loam / Charcoal)
*   `primary`: `#5D7052` (Moss Green)
*   `primary-foreground`: `#F3F4F1` (Pale Mist)
*   `secondary`: `#C18C5D` (Terracotta / Clay)
*   `secondary-foreground`: `#FFFFFF` (White)
*   `accent`: `#E6DCCD` (Sand / Beige)
*   `accent-foreground`: `#4A4A40` (Bark)
*   `muted`: `#F0EBE5` (Stone)
*   `muted-foreground`: `#78786C` (Dried Grass)
*   `border`: `#DED8CF` (Raw Timber)
*   `destructive`: `#A85448` (Burnt Sienna)

### Typography
Combining a characterful serif with a clean, rounded sans-serif.
*   **Headings**: **'Fraunces'** (Google Font). A variable font with "soft" axes. It has a distinct, old-style warmth but feels modern. Use weights 600-800.
*   **Body**: **'Nunito'** or **'Quicksand'**. Rounded terminals are essential to match the organic shapes.
*   **Scale**: Moderate, not aggressive. 1.25 scale.

### Radius & Shapes
*   **Standard Radius**: `rounded-2xl` (16px) or `rounded-3xl` (24px).
*   **Organic Shapes**: Use custom classes or inline styles for specific elements to create blob shapes.
    *   Example: `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;`
*   **Borders**: Soft, sometimes slightly imperfect (simulated via double borders or slightly transparent thick borders).

### Shadows & Effects
*   **Shadows**: Soft, diffused, colored shadows. Never pure black.
    *   `shadow-soft`: `0 4px 20px -2px rgba(93, 112, 82, 0.15)` (Moss tinted)
    *   `shadow-float`: `0 10px 40px -10px rgba(193, 140, 93, 0.2)` (Clay tinted)
*   **Textures**: **CRITICAL**. The background should have a subtle noise or paper grain overlay.
    *   Implementation: Use a fixed pseudo-element on the body or main container with a base64 noise pattern set to `mix-blend-mode: multiply` and very low opacity (3-5%).

## 3. Component Stylings

### Buttons
*   **Shape**: Fully rounded pills (`rounded-full`) for all variants
*   **Primary**: Moss Green (#5D7052) background with Pale Mist (#F3F4F1) text. Soft colored shadow: `shadow-[0_4px_20px_-2px_rgba(93,112,82,0.15)]`
*   **Outline**: 2px Terracotta (#C18C5D) border, transparent background, Terracotta text
*   **Ghost**: Transparent with Moss Green text, hover fills with Moss/10 background
*   **Interaction**: `hover:scale-105` with deepened shadow `hover:shadow-[0_6px_24px_-4px_rgba(93,112,82,0.25)]`. Active state: `active:scale-95` for tactile feedback
*   **Sizes**: Default h-12, sm h-10, lg h-14. Generous horizontal padding (px-8 to px-10)
*   **Typography**: Bold weight, base to lg sizing

### Cards / Containers
*   **Background**: Extremely light beige (#FEFEFA) over off-white page background
*   **Border**: Soft timber border (#DED8CF) at 50% opacity: `border-[#DED8CF]/50`
*   **Shape**: `rounded-[2rem]` base with asymmetric variations using custom values like `rounded-tl-[4rem]` on specific corners
*   **Shadows**: Moss-tinted soft shadow: `shadow-[0_4px_20px_-2px_rgba(93,112,82,0.15)]`
*   **Texture**: Fixed noise overlay layer at 3% opacity with multiply blend mode
*   **Interaction**: Feature cards lift with `hover:-translate-y-1` and shadow deepens to `hover:shadow-[0_20px_40px_-10px_rgba(93,112,82,0.15)]`

### Inputs
*   **Shape**: Pill-shaped with `rounded-full`
*   **Border**: Timber border (#DED8CF)
*   **Background**: `bg-white/50` (semi-transparent) revealing page grain texture beneath
*   **Focus State**: `focus-visible:ring-2 ring-[#5D7052]/30` with `ring-offset-2` for soft, natural glow (not sharp outline)
*   **Typography**: Sans-serif body font, text-sm
*   **Height**: h-12 for comfortable touch target

### Navigation
*   **Style**: Sticky floating pill (`sticky top-4`) with glassmorphism
*   **Background**: `bg-white/70` with `backdrop-blur-md` for frosted effect
*   **Border**: Soft timber border at 50% opacity with subtle shadow
*   **Shape**: `rounded-full`
*   **Logo**: Circular moss green container with white icon
*   **Mobile**: Full menu dropdown with organic rounded borders (`rounded-[2rem]`)

## 4. Layout & Spacing
*   **Container Widths**: Vary by section for visual rhythm
    *   Primary content: `max-w-7xl` (hero, features, blog, pricing)
    *   Focused content: `max-w-6xl` (how it works, FAQ)
    *   Intimate content: `max-w-5xl` (final CTA)
    *   Text-heavy sections: `max-w-4xl` (hero inner), `max-w-2xl` (product detail text)
*   **Section Padding**: Consistent `py-32` vertical spacing with `px-4 sm:px-6 lg:px-8` horizontal
*   **Grid Patterns**:
    *   Stats: `grid-cols-2 md:grid-cols-4`
    *   Features/Blog/Testimonials: `md:grid-cols-3` (or `md:grid-cols-2 lg:grid-cols-3`)
    *   Two-column layouts: `lg:grid-cols-2`
    *   Grid gaps: Consistent `gap-8` with optional `md:gap-12` for stats
*   **Whitespace Philosophy**: Use generous gaps (gap-8, gap-12, gap-16) to let design breathe. Space is a design element, not empty canvas.

## 5. Non-Genericness (The Bold Factors)
*   **Blob Backgrounds**: Large absolute-positioned blobs with `blur-3xl` create ambient color washes. Multiple shapes (via shapeIndex prop) with varied organic border radii. Used in Hero (2 blobs), Product Detail, Features, and Final CTA sections.
*   **Rotated Image Frames**: Product detail image rotated `-2deg` with thick 4px white border creates handcrafted photo feel
*   **Organic Image Masks**: Benefits section image uses complex blob border-radius: `rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]`
*   **Asymmetric Card Radii**: Feature cards cycle through 6 different border-radius patterns, mixing large corner curves (4rem, 5rem) with standard (2rem)
*   **Curved SVG Connectors**: How It Works uses hand-drawn looking curved dashed SVG path instead of straight lines
*   **Hover Micro-rotations**: Testimonial cards subtly rotate on hover (`hover:rotate-1`) mimicking picking up a physical card
*   **Varied Section Backgrounds**: Alternating between off-white, stone tint (#F0EBE5/30), sand (#E6DCCD/30), moss green (#5D7052), and terracotta (#C18C5D)
*   **Dual Texture Layers**: Global grain texture PLUS section-specific noise overlays and blob backgrounds create rich depth

## 6. Effects & Animation
*   **Transition Philosophy**: Natural, gentle motion. Use `transition-all duration-300` or `duration-500` for smooth changes
*   **Hover Animations**:
    *   Buttons: `hover:scale-105` with shadow increase
    *   Cards: `hover:-translate-y-1` (lift) or `hover:rotate-1` (subtle tilt)
    *   Stats: `group-hover:scale-110` on numbers
    *   Images: `hover:scale-105` with 700ms duration for slow reveal
    *   Icon containers: Background color fill transition
*   **Active States**: `active:scale-95` on buttons for tactile press feedback
*   **Entrance/Exit**: Details accordion uses native `open:` state with chevron rotation
*   **Image Overlays**: Fade overlays on hover (blog cards) using `group-hover:bg-transparent`
*   **No Harsh Snaps**: All transitions eased, duration 300-700ms range for organic feel

## 7. Icons (Lucide React)
*   **Style**: Default stroke width (2px)
*   **Color**: Moss Green (#5D7052) as default, white on dark backgrounds
*   **Containers**: Icons sit in `h-14 w-14` rounded-2xl containers with `bg-[#5D7052]/10` background
*   **Hover Effect**: Container fills completely to solid moss green while icon switches to white
*   **Sizing**: 28px (size={28}) for feature icons, 24px for benefit checkmarks, responsive sizing for navigation
*   **Usage**: Social icons in footer, feature icons, benefit checkmarks, navigation menu toggle, arrows in CTAs

## 8. Accessibility
*   **Contrast Ratios**:
    *   Primary text (#2C2C24) on background (#FDFCF8): 14.5:1 (AAA)
    *   Moss (#5D7052) on background: 6.2:1 (AA)
    *   Muted text (#78786C) on background: 4.8:1 (AA)
*   **Focus States**: `focus-visible:ring-2 ring-[#5D7052] ring-offset-2` provides clear, soft focus indicator
*   **Touch Targets**: All interactive elements meet 44px minimum (buttons h-12 = 48px)
*   **Semantic HTML**: Proper heading hierarchy, nav landmarks, alt text for images, aria-labels where needed
*   **Keyboard Navigation**: All interactive elements keyboard accessible, details/summary for FAQ accordion

## 9. Responsive Strategy
*   **Mobile-First Approach**: Base styles mobile-optimized, enhanced at breakpoints
*   **Breakpoint Usage**:
    *   `sm:` (640px): Horizontal padding increases, some flex-row layouts
    *   `md:` (768px): Major grid transitions (2-3 columns), nav reveals desktop version
    *   `lg:` (1024px): 3-column grids, 2-column hero/benefits layouts
*   **Typography Scaling**: Hero headline `text-5xl md:text-7xl`, sections `text-4xl md:text-5xl`
*   **Stack Behavior**: All grids collapse to single column on mobile, flex layouts switch to `flex-col`
*   **Navigation**: Mobile uses hamburger menu with slide-out panel, desktop inline nav
*   **Blob Simplification**: Blobs remain but overflow hidden on mobile to prevent layout issues
</design-system>

- Mobile-First: Fully responsive design that stacks cleanly on all devices.

Site Architecture & Content Requirements:

1. Home Page (index.html):
- A visually striking hero section welcoming users to CalculateIt.net.
- A grid-based "Hub" acting as a portal/transfer station to various vehicle pages.

2. Vehicle Calculators Hub (vehicles.html):
- A dedicated directory page listing all available vehicle calculators with clean, interactive UI cards (e.g., Auto Loan, Mileage, Depreciation).

3. About Us (about.html):
- Profile Section: Introduce the creator, Chetan Kumar, positioning him as a Digital Tool Architect.
- Include social proof buttons with hover effects linking to:
  - LinkedIn: https://www.linkedin.com/in/askchetan/
  - GitHub: https://github.com/Chetan19988

4. Contact Us (contact.html):
- A clean, glassmorphic contact form.
- Include a direct "Email Me" call-to-action utilizing a mailto link for: ashusuyavanshi@gmail.com.

5. Legal Pages (privacy.html & disclaimer.html):
- Clean, readable typography focused on high readability for standard Privacy Policy and Disclaimer text. 

SEO & Engineering Standards:
- Ensure clean semantic HTML (H1, H2, H3).
- Code must be highly modular, heavily commented, and production-ready for immediate deployment. 

Output Requirement: Provide the complete HTML, CSS, and JS necessary to make this entire architecture function flawlessly.

Plages:
Home page
Hub page where only different kinds of vehicle registration pages are linked
About us page
Privacy policy
Disclaimer
And the contact us page

Add all of them to the footer

In the above navigation bar, add the contact us page and hub page. 







Act as a Lead Frontend Architect, UI/UX Designer, and Typography Expert.

Task: Build a complete, multi-page website (or a Vanilla JS Single Page Application for seamless transitions) for "CalculateIt" (https://calculateit.net/). This site serves as a premium hub for vehicle-related calculators.

### 1. Tech Stack Constraints (STRICT)
- **HTML5:** Highly semantic, accessible markup.
- **CSS3:** Vanilla CSS only. **CRITICAL:** Do not use Tailwind, Bootstrap, or any CSS frameworks. You must translate the design system below into native CSS variables (`:root`), custom classes, and standard CSS rules.
- **JavaScript:** Vanilla JS only (No React, Vue, etc.).
- **Performance:** Ultra-fast loading.

### 2. Design System: Organic / Natural (Wabi-Sabi)
Implement this exact design philosophy using pure CSS:
- **Core Vibe:** Peaceful, tactile, grounded, and human. No sharp 90-degree angles. Use generous whitespace and staggered grids.
- **Textures & Depth:** Add a global grain/noise texture overlay (using a base64 noise pattern pseudo-element with `mix-blend-mode: multiply` at ~3% opacity).
- **Colors (CSS Variables):** 
  - `--bg-rice-paper`: `#FDFCF8`
  - `--text-loam`: `#2C2C24`
  - `--moss-green`: `#5D7052`
  - `--terracotta`: `#C18C5D`
  - `--timber`: `#DED8CF`
- **Typography:** 
  - Headings: 'Fraunces' (Google Font, weights 600-800).
  - Body: 'Nunito' or 'Quicksand' (Rounded terminals).
- **Shapes & Radii:** Elements should feel organic. Translate concepts like `rounded-[2rem]` to `border-radius: 2rem`. Use complex percentages for blob shapes (e.g., `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%`).
- **Shadows:** Soft, color-tinted shadows (no pure black). E.g., `box-shadow: 0 4px 20px -2px rgba(93, 112, 82, 0.15)`.
- **Interactions:** Gentle motion. Buttons should scale up slightly (`transform: scale(1.05)`) with deepened shadows on hover, using eased transitions (`transition: all 0.3s ease`).

### 3. Site Architecture & Content Layout

**Global Navigation (Header):**
- Sticky, floating glassmorphism pill (`backdrop-filter: blur(12px)`).
- Links to: Home, Vehicle Hub, and Contact Us.

**Global Footer:**
- Links to ALL pages: Home, Vehicle Hub, About Us, Contact Us, Privacy Policy, Disclaimer.

**Page 1: Home (index.html)**
- Visually striking hero section with organic background blobs (`filter: blur(40px)`).
- A grid-based portal guiding users to the Vehicle Hub.

**Page 2: Vehicle Calculators Hub (vehicles.html)**
- A directory page listing all states vehicle registration calculators-

**Page 3: About Us (about.html)**
- Introduce the creator: Chetan Kumar, Digital Tool Architect.
- Include pill-shaped social proof buttons with hover effects linking to:
  - LinkedIn: https://www.linkedin.com/in/askchetan/
  - GitHub: https://github.com/Chetan19988

**Page 4: Contact Us (contact.html)**
- Clean, glassmorphic contact form inside a soft-bordered container.
- Direct "Email Me" CTA using: `mailto:ashusuyavanshi@gmail.com`.

**Pages 5 & 6: Legal (privacy.html & disclaimer.html)**
- Clean, readable typography layouts focused on accessibility for standard legal text.

### 4. Output Requirements
Provide the complete, production-ready code. Organize it clearly so it can be deployed immediately. Ensure the layout is strictly mobile-first, using CSS media queries to expand gracefully on desktop. Leave the codebase highly modular, heavily commented, and visually breathtaking

5. SEO 
Make the site as fast as the speed of light. This is very important, use all the skills like JavaScript render, Lazy load code minification. And everything that makes my site load in 0.023 milliseconds. Use no animations, nothing. 
Make the site optimized for mobile screens.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://calculatorit.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fc071a06-72b8-49ab-9b6a-0ca32e8dcd07).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
