# PostHog post-wizard report

The wizard has completed a deep integration of your DevEvent Next.js project. PostHog has been configured with client-side analytics using the `instrumentation-client.ts` file (Next.js 15.3+ approach), a reverse proxy via Next.js rewrites for improved tracking reliability, and automatic exception capture for error tracking. Seven custom events have been instrumented across four component files to track user engagement with event discovery and navigation.

## Integration Summary

### Files Created
| File | Purpose |
|------|---------|
| `.env.local` | Environment variables for PostHog API key and host |
| `instrumentation-client.ts` | Client-side PostHog initialization with exception capture |
| `posthog-setup-report.md` | This setup report |

### Files Modified
| File | Changes |
|------|---------|
| `next.config.ts` | Added rewrites for PostHog reverse proxy and `skipTrailingSlashRedirect` |
| `components/ExploreBtn.tsx` | Added `explore_events_clicked` event capture |
| `components/EventCard.tsx` | Added `event_card_clicked` event capture with event properties |
| `components/Navbar.tsx` | Added navigation click events (`nav_home_clicked`, `nav_events_clicked`, `nav_create_event_clicked`, `nav_logo_clicked`) |

## Events Instrumented

| Event Name | Description | File |
|------------|-------------|------|
| `explore_events_clicked` | User clicked the 'Explore Events' button on the homepage, indicating intent to discover events | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked on an event card to view event details - key conversion funnel entry point | `components/EventCard.tsx` |
| `nav_home_clicked` | User clicked the Home navigation link | `components/Navbar.tsx` |
| `nav_events_clicked` | User clicked the Events navigation link | `components/Navbar.tsx` |
| `nav_create_event_clicked` | User clicked the Create Event navigation link - indicates intent to become a creator | `components/Navbar.tsx` |
| `nav_logo_clicked` | User clicked the DevEvent logo in the navigation | `components/Navbar.tsx` |

## Event Properties

### `event_card_clicked`
- `event_title`: Title of the clicked event
- `event_slug`: URL slug of the event
- `event_location`: Location of the event
- `event_date`: Date of the event
- `event_time`: Time of the event

### `explore_events_clicked`
- `button_location`: Location of the button (homepage_hero)

### Navigation Events
- `nav_item`: Name of the navigation item clicked
- `nav_location`: Location of the navigation (header)

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/269408/dashboard/919584) - Core analytics dashboard for DevEvent tracking

### Insights
- [Event Card Clicks Over Time](https://us.posthog.com/project/269408/insights/IT1679dA) - Tracks daily event card clicks
- [Explore to Event Card Funnel](https://us.posthog.com/project/269408/insights/5ANmttTx) - Conversion funnel from explore button to event card clicks
- [Navigation Engagement](https://us.posthog.com/project/269408/insights/aZDf2U4y) - Tracks all navigation item clicks
- [Popular Events by Location](https://us.posthog.com/project/269408/insights/2kMrbwwU) - Event card clicks broken down by event location
- [Create Event Intent](https://us.posthog.com/project/269408/insights/0cRyqLAC) - Weekly tracking of Create Event navigation clicks

## Additional Features Enabled

- **Automatic Pageview Capture**: PostHog will automatically track pageviews with the `defaults: '2025-05-24'` configuration
- **Exception Capture**: Unhandled exceptions are automatically captured via `capture_exceptions: true`
- **Session Replay**: Available through PostHog's standard configuration
- **Reverse Proxy**: All PostHog requests are proxied through `/ingest` to improve tracking reliability and bypass ad blockers
