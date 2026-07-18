---
name: Atelier Footwear Management
colors:
  surface: '#fff7f9'
  surface-dim: '#ecd3e1'
  surface-bright: '#fff7f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f6'
  surface-container: '#ffe8f4'
  surface-container-high: '#fbe1ef'
  surface-container-highest: '#f5dce9'
  on-surface: '#251721'
  on-surface-variant: '#544245'
  inverse-surface: '#3b2c36'
  inverse-on-surface: '#ffecf5'
  outline: '#867275'
  outline-variant: '#d9c1c4'
  surface-tint: '#984258'
  primary: '#984258'
  on-primary: '#ffffff'
  primary-container: '#e8839a'
  on-primary-container: '#671c32'
  inverse-primary: '#ffb1c1'
  secondary: '#7b580b'
  on-secondary: '#ffffff'
  secondary-container: '#fdcd78'
  on-secondary-container: '#785508'
  tertiary: '#78555d'
  on-tertiary: '#ffffff'
  tertiary-container: '#c196a0'
  on-tertiary-container: '#4e2f37'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9df'
  primary-fixed-dim: '#ffb1c1'
  on-primary-fixed: '#3f0017'
  on-primary-fixed-variant: '#7a2b41'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#eebf6c'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#ffd9e1'
  tertiary-fixed-dim: '#e8bbc5'
  on-tertiary-fixed: '#2e131b'
  on-tertiary-fixed-variant: '#5f3d46'
  background: '#fff7f9'
  on-background: '#251721'
  surface-variant: '#f5dce9'
  bg-light: '#FDE2E7'
  status-success: '#16A34A'
  status-warning: '#EAB308'
  status-error: '#EF4444'
  border-soft: '#E5E7EB'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.3'
  tab-label:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
  table-header:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  price-display:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin: 24px
  gutter: 16px
  section-gap: 32px
  stack-sm: 4px
  stack-md: 12px
---

## Brand & Style

The design system is defined by a "Sophisticated Professionalism" narrative, tailored for high-end footwear management. It bridges the gap between luxury retail aesthetics and industrial-grade inventory control. The personality is elegant and organized, evoking a sense of calm efficiency for the user.

The chosen style is **Modern Corporate with Glassmorphism accents**. It utilizes a clean, structured layout inspired by luxury editorial design but incorporates functional translucency for overlays and modals to maintain context. The visual language emphasizes clarity through generous white space, soft shadows, and a refined "rose and gold" palette that softens the technical nature of stock management.

**Core Principles:**
- **Refinement:** Every interaction should feel intentional and polished.
- **Urgency through Precision:** Critical alerts (stock shortages) use high-contrast status colors that cut through the soft brand palette.
- **Tactile Softness:** Elements use medium-to-high roundedness to feel approachable and high-end.

## Colors

The palette is anchored by **Accent Rose (#E8839A)** as the primary driver of action and brand identity, supported by **Accent Gold (#D4A857)** for secondary hierarchy and premium accents. 

**Functional Color Usage:**
- **Surface Strategy:** Use `bg-light` for the main application background and `tertiary_color_hex` for subtle section nesting.
- **Typography:** Use the neutral `Text (#32232D)` for all primary reading experiences to ensure high legibility against the pink-tinted backgrounds.
- **Semantic Feedback:** The Success, Warning, and Error colors are non-negotiable for inventory status. They should be used primarily in badges and status indicators to provide immediate cognitive mapping for stock levels.
- **Glassmorphism:** Modals and overlays should use a semi-transparent version of white (`#FFFFFFBF`) with a 12px-20px backdrop-blur.

## Typography

The typography system relies exclusively on **Inter** to provide a systematic, neutral, and highly legible experience across dense data environments. 

**Implementation Guidelines:**
- **Contrast:** Use font weight (400 vs 600/700) to distinguish between labels and data values. 
- **Scale:** Large headlines are reserved for global page titles. In data tables, use the `table-header` style with slight letter spacing and uppercase transformation for professional categorization.
- **Hierarchy:** The SKU and Model names should always carry more visual weight (Medium/Semi-Bold) than secondary metadata like "Category" or "Notes".

## Layout & Spacing

The layout follows a **8px linear scale** and a **12-column fluid grid system**.

**Layout Principles:**
- **Desktop (1280px+):** Employs a fixed-width container centered with 24px side margins. Data tables expand to full width.
- **Tablet (768px - 1279px):** Content reflows to a single column for dashboards; tables implement horizontal overflow with frozen columns for SKUs.
- **Mobile (<768px):** Switches from the Detailed Table view to the Product Grid (Cards) view automatically to prioritize touch targets and scanning.
- **Rhythm:** Use `section-gap` between the Header and Navigation Tabs. Use `stack-md` for internal card padding and `stack-sm` for spacing between labels and input fields.

## Elevation & Depth

Hierarchy is established through a combination of **tonal layering** and **ambient shadows**. 

- **Surface 0 (Background):** `bg-light` (#FDE2E7).
- **Surface 1 (Cards/Containers):** Solid white (#FFFFFF) with a very soft, diffused shadow (0px 4px 20px rgba(50, 35, 45, 0.05)).
- **Surface 2 (Interactive/Hover):** When a card or row is hovered, elevation increases slightly (0px 8px 30px rgba(50, 35, 45, 0.1)).
- **Overlay Layer (Modals):** Glassmorphism effect. Use a frosted glass surface with a 1px white border at 20% opacity to define the container edge against the background blur.

## Shapes

The design system adopts a **Rounded** shape language to reflect the brand's elegant and soft persona.

- **Standard Components:** Buttons, Input fields, and Badges use the base `0.5rem (8px)` radius.
- **Containers:** Large UI blocks like Cards and Modals must use the `rounded-lg` equivalent of `1rem (16px)` to create a friendly, premium appearance.
- **Full Rounds:** Status dots and small icon containers may use pill-shaping (circular) for distinctiveness.

## Components

### Buttons
- **Primary:** Background `Accent Rose`, Text White. No border.
- **Secondary:** Background `Accent Gold`, Text White.
- **Ghost:** No background, `Accent Rose` border and text.
- **Sizing:** Minimum height of 44px for accessibility.

### Cards
- Fixed 16px radius.
- Padding: 24px for desktop, 16px for mobile.
- Use `Surface 1` shadow styles. Includes a internal grid for "Size/Stock" quick-view.

### Data Tables
- Row height: 56px.
- Border-bottom: 1px solid `border-soft`.
- Hover state: Change background to `tertiary_color_hex` at 20% opacity.
- **Stock Badges:** Solid background with white text for "Critical", "Low", and "Good" status.

### Input Fields
- White background with 1px `border-soft`.
- Focused state: Border changes to `primary_color` with a soft rose glow (2px outer shadow).

### Modals
- Centers on screen with a backdrop blur of 16px.
- Glassmorphic header and footer sections to maintain visual lightness.