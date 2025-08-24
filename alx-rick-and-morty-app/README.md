# Rick and Morty Episodes App with ErrorBoundary

This is a [Next.js](https://nextjs.org) project that displays Rick and Morty episodes with comprehensive error handling using ErrorBoundary components.

## Features

- **React ErrorBoundary**: Custom error boundary component that catches JavaScript errors anywhere in the component tree
- **Sentry Integration**: Error monitoring and logging service integration for production error tracking
- **GraphQL Apollo Client**: Fetches data from the Rick and Morty API
- **TypeScript**: Full TypeScript support for type safety

## ErrorBoundary Implementation

### Components

1. **ErrorBoundary.tsx**: Main error boundary class component that:
   - Catches JavaScript errors in child components
   - Displays a fallback UI when errors occur
   - Logs errors to console and Sentry
   - Provides a "Try again" button to reset error state

2. **ErrorProneComponent.tsx**: A test component that intentionally throws an error for testing purposes

### Usage

The ErrorBoundary is implemented at the application level in `_app.tsx`, wrapping the entire application:

```tsx
import ErrorBoundary from '@/components/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ErrorBoundary>
  );
}
```

### Testing ErrorBoundary

To test the ErrorBoundary functionality:

1. Navigate to `/test-error` page to see the ErrorBoundary in action
2. Or uncomment the `<ErrorProneComponent />` line in `pages/index.tsx`
3. The ErrorBoundary will catch the error and display the fallback UI

## Sentry Configuration

### Setup

1. Install Sentry packages (already included in package.json):
```bash
npm install @sentry/react @sentry/nextjs
```

2. Create a `.env.local` file based on `.env.local.example`:
```env
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
SENTRY_DSN=your_sentry_dsn_here
SENTRY_ORG=your_organization_slug
SENTRY_PROJECT=your_project_name
SENTRY_AUTH_TOKEN=your_auth_token_here
```

3. The Sentry configuration files are already created:
   - `sentry.client.config.ts` - Client-side configuration
   - `sentry.server.config.ts` - Server-side configuration
   - `sentry.edge.config.ts` - Edge runtime configuration

### Error Monitoring

When an error occurs, it will be:
- Logged to the browser console
- Sent to Sentry with additional context
- Displayed in the Sentry dashboard for monitoring and debugging

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up Sentry (optional but recommended for production):
   - Create a Sentry account and project
   - Copy `.env.local.example` to `.env.local`
   - Add your Sentry configuration

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see the Rick and Morty episodes

5. Test ErrorBoundary by visiting [http://localhost:3000/test-error](http://localhost:3000/test-error)

## File Structure

```
components/
├── ErrorBoundary.tsx          # Main error boundary component with Sentry integration
├── ErrorProneComponent.tsx    # Test component that throws errors
└── common/
    └── EpisodeCard.tsx        # Episode display component

pages/
├── _app.tsx                   # App wrapper with ErrorBoundary
├── index.tsx                  # Main episodes page
└── test-error.tsx             # ErrorBoundary test page

sentry.client.config.ts        # Sentry client configuration
sentry.server.config.ts        # Sentry server configuration
sentry.edge.config.ts          # Sentry edge configuration
.env.local.example             # Environment variables template
```

## Error Handling Best Practices

1. **Granular Error Boundaries**: Consider adding more specific ErrorBoundary components around critical UI sections
2. **Error Reporting**: Ensure Sentry is properly configured for production error tracking
3. **Fallback UI**: Customize the error fallback UI to match your application's design
4. **User Experience**: Provide clear error messages and recovery options
5. **Logging**: Include relevant context when logging errors for debugging

## Learn More

- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [Sentry Documentation](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
