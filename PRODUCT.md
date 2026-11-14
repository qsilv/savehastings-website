# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A mix of three groups, none leading: students and young people who might volunteer, businesses and organizations deciding whether to sponsor an event, and Vancouver residents who want to donate or learn more.

## Product Purpose

The website of #SAVEHASTINGS, a youth-led volunteer group founded by students in 2023. Volunteers hold events every two weeks on East Hastings Street in Vancouver's Downtown Eastside, where they hand out meals and supplies to people experiencing homelessness. The site succeeds when a first-time visitor signs up to volunteer or donates. Both actions carry equal weight.

## Positioning

Run by students and young volunteers who go out in person every two weeks. Not a large agency.

## Operating Context

Outreach nights on East Hastings Street, mostly after dark. Volunteers wear black shirts with the orange logo and the line "Unleash your heroic heart". Sponsors fund events or provide the food.

## Capabilities and Constraints

- Volunteer registration form posting to a Google Form, with Cloudflare Turnstile verification.
- Donations through Stripe embedded checkout.
- Pages: Home, About, Volunteer, Sponsors, Privacy, Terms. An Events page exists but is not linked.
- Next.js app with Tailwind and shadcn/ui components.
- Published volunteer counts disagree (100+ and 200+); not yet resolved.

## Brand Commitments

Confirmed by the owner:

- Keep the orange hero-figure logo.
- Keep the hand-lettered #SAVEHASTINGS wordmark (GoodDog font, as on the shirts).
- Orange stays the main colour.
- Must not look like a corporate charity.

## Evidence on Hand

- Ten outreach photos in `public/` and `public/hero/`.
- Team portraits in `public/team/`.
- Eight partner logos in `public/partners/`.
- Stats: 350+ meals monthly, 8,000+ people supported, 7+ community partners.
- No testimonials, press quotes or annual reports. Do not invent any.

## Product Principles

- Show the real work with the group's own photos.
- Volunteering and donating are equally easy to start from any page.
- Treat the people served with dignity; never use pity to persuade.
- Plain language about what the group does.
