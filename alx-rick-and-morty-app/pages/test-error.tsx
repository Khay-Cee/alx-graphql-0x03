import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';

const TestErrorBoundary: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>ErrorBoundary Test Page</h1>
      <p>This page demonstrates the ErrorBoundary functionality.</p>
      
      <ErrorBoundary>
        <h2>Normal Component</h2>
        <p>This component works fine and should be rendered normally.</p>
      </ErrorBoundary>

      <div style={{ marginTop: '40px' }}>
        <h2>Error Prone Component Test</h2>
        <p>The component below will intentionally throw an error to test the ErrorBoundary:</p>
        <ErrorBoundary>
          <ErrorProneComponent />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default TestErrorBoundary;
