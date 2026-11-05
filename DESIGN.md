---
name: Care Verified
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3e4947'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6e7977'
  outline-variant: '#bdc9c6'
  surface-tint: '#006a63'
  primary: '#005c55'
  on-primary: '#ffffff'
  primary-container: '#0f766e'
  on-primary-container: '#a3faef'
  inverse-primary: '#80d5cb'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#005e40'
  on-tertiary: '#ffffff'
  tertiary-container: '#007954'
  on-tertiary-container: '#99ffce'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9cf2e8'
  primary-fixed-dim: '#80d5cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#00504a'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 46px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 38px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 30px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system establishes an empathetic, resilient, and deeply legible desktop-first healthcare navigation portal tailored for rural communities, multi-generational families, and newcomers. The brand voice balances civic dependability with human warmth—removing the cold clinical intimidation of institutional medical software while avoiding the frivolous decor of consumer wellness apps.

Visual aesthetic: **Modern Civic Tactility**. Built on crisp structured cards, high-contrast typography, generous click targets, and a rigorous information architecture that accommodates bilingual comprehension (English and Tamil). The interface avoids aggressive visual noise, relying instead on calm atmospheric teal backgrounds, explicit status iconography, and warm amber callouts for high-priority emergency or navigational actions.

## Colors

The palette is engineered to meet strict WCAG AAA guidelines for text content and WCAG AA for structural indicators.

### Key Roles
- **Primary (`#0F766E`)**: Deep medical teal anchoring primary actions, navigation headers, selected states, and structural tabs. Complemented by `#115E59` on hover/pressed states and `#F0FDFA` as a tinted calm background wash.
- **Secondary / Warm Action (`#D97706`)**: Reassuring warm amber used for critical assistance, direct provider triage, and urgent contextual buttons. Complemented by deep burnt amber (`#B45309`) for hover states.
- **Neutral Core (`#0F172A` & `#1E293B`)**: Slate black and deep charcoal providing maximum typographic legibility across various screen qualities and direct sunlight conditions.
- **Surface & Borders (`#FFFFFF`, `#F8FAFC`, `#E2E8F0`)**: Crisp clean white elevation cards grounded over calm neutral surfaces with high-visibility boundary definition.

### Freshness Verification Spectrum
Data currency is critical to health access. Every provider entry displays an explicit three-tier freshness state:
- **Current (< 30 days)**: Emerald text (`#059669`) on mint wash (`#ECFDF5`) with a solid border (`#A7F3D0`).
- **Moderate (30–180 days)**: Amber text (`#D97706`) on warm wash (`#FFFBEB`) with a solid border (`#FDE68A`).
- **Stale (> 180 days)**: Slate text (`#475569`) on cool gray wash (`#F1F5F9`) with a solid border (`#CBD5E1`).

## Typography

The type scale utilizes **Plus Jakarta Sans** for its tall x-height, open counterforms, and high legibility across varied digital literacy levels.

### Bilingual Text Rendering
To support multi-language family members and non-native English speakers (including Tamil text integration):
- Standard body copy maintains a line-height multiplier between **1.5 and 1.625** to allow complex character glyphs and diacritics to render without visual clipping.
- Where primary and secondary languages are co-displayed (e.g., Primary English with Tamil subtitle), layout components enforce vertical stacking with an automatic 4px separation token rather than inline truncation.
- Avoid all-caps styling on body or contextual labels to maintain rapid readability.

## Layout & Spacing

A desktop-first layout designed to maximize provider browsing density, clear filtering panels, and comprehensive split-screen map navigation.

### Grid Hierarchy
- **Desktop (1200px and up)**: 12-column fixed-max grid centered within a 1440px viewport limit. 32px gutters and 48px canvas margin. Side-by-side search filters (3 columns) and provider results or interactive cards (9 columns).
- **Tablet (768px – 1199px)**: 8-column fluid grid with 24px gutters and 32px margins. Filters collapse to an accessible sticky off-canvas drawer or horizontal segmented pill bar.
- **Mobile (below 768px)**: 4-column fluid layout with 16px gutters and 16px margins. Full card stacking with sticky bottom action controls.

### Touch Target Standard
All interactive elements—buttons, dropdown triggers, quick contact links, and pagination handles—must enforce an absolute minimum target bounding box of **44px × 44px** (with 48px preferred on core emergency actions).

## Elevation & Depth

Visual depth employs low-contrast outlines coupled with soft ambient teal-tinted shadows, keeping the UI clear of noisy skeuomorphism while creating an intuitive tactile response.

### Surface Tiers
- **Canvas Base (`#F8FAFC`)**: Base page background creating an inviting contrast beneath pristine white cards.
- **Level 1 (Card & Content Blocks)**: Pure white (`#FFFFFF`) surface bounded by a 1px solid `#E2E8F0` border and an ambient shadow: `0 1px 3px rgba(15, 23, 42, 0.05), 0 4px 6px rgba(15, 118, 110, 0.03)`.
- **Level 2 (Hovered Cards & Dropdowns)**: Elevated white surface with a tightened focus border (`#CBD5E1`) and deepened shadow: `0 4px 12px rgba(15, 23, 42, 0.08), 0 2px 4px rgba(15, 118, 110, 0.04)`.
- **Level 3 (Modals, Urgent Sheets & Popovers)**: Maximum surface presence with a 1px border (`#E2E8F0`), overlay backdrop blur of 4px over a 30% slate mask, and elevated shadow: `0 12px 32px rgba(15, 23, 42, 0.14)`.

### Focus Rings
Accessibility focus indicators feature a 3px solid `#0F766E` halo with a 2px pure white separation offset (`box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 5px #0F766E`).

## Shapes

The design system uses a balanced corner curvature (Level 2: 8px base, 12px to 16px on cards and modals) that conveys modern friendliness without losing structural composure.

- **Buttons, Form Inputs, Badges**: 8px (`rounded-md` / 0.5rem) to ensure clear boundaries and functional predictability.
- **Provider Cards & Informational Panels**: 12px to 16px (`rounded-lg` to `rounded-xl`) to form calm, self-contained visual packets.
- **Pill Elements**: Reserved exclusively for dynamic status chips, language toggles, and verification badges to distinguish them from actionable buttons.

## Components

### 1. Verification Freshness Badges
Small, high-visibility status indicators displayed at the top of every provider card:
- **Freshness Badge**: Minimum height 32px. Features a 16px verification icon (check-circle, clock-alert, or calendar-question) paired with bold status text:
  - *Current*: Mint `#ECFDF5`, Border `#A7F3D0`, Text & Icon `#059669` ("Verified 8 days ago").
  - *Warning*: Pale amber `#FFFBEB`, Border `#FDE68A`, Text & Icon `#D97706` ("Verified 4 months ago").
  - *Stale*: Cool gray `#F1F5F9`, Border `#CBD5E1`, Text & Icon `#475569` ("Last checked 8 months ago").

### 2. Action Buttons & Quick Navigators
All buttons maintain a minimum 44px height:
- **Primary Action (Directions / Portal)**: Deep teal `#0F766E` background with white text, font weight 600.
- **Warm / Priority Action (Immediate Call / Triage)**: Warm amber `#D97706` background with white text.
- **Direct Contact Trio (Call, WhatsApp, Directions)**: Segmented card action strip. Outlined in `#E2E8F0` with prominent SVG icons, 48px height, and clear dual-language labels.

### 3. Healthcare Provider Cards
Desktop-optimized cards structured into three primary columns:
- **Left Column**: Provider name, specialty, bilingual subtitle, address, and transit availability.
- **Center Column**: Operational hours, accepting new patients indicator (green pill), wheelchair accessibility badge.
- **Right Column**: Verification badge, instant distance estimation, and vertical button stack (Call, WhatsApp, Directions).

### 4. Input Fields & Search Controls
- 48px height for search bars and inputs.
- High-contrast 1.5px `#CBD5E1` resting border, shifting to `#0F766E` on active focus.
- Placeholder text in `#64748B` with permanent floating labels above the field to prevent cognitive strain for older adults.

### 5. Checkboxes, Radios & Filter Chips
- Checkboxes and radio buttons enforce an expanded hit target of 44px using generous padding around a 20px physical control.
- Filter chips toggle between an unselected state (`#F8FAFC` surface, `#64748B` text) and an active state (`#F0FDFA` surface, `#0F766E` border, `#0F766E` bold text).