import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    // also log to console
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught error', error, info);
  }

  render() {
    const { error, info } = this.state;
    if (error) {
      return (
        <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
          <h2 style={{ color: 'red' }}>Sayt ishga tushmadi!</h2>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#111', color: '#fff', padding: 12 }}>
            {String(error && error.toString())}
            {info?.componentStack && '\n\n:\n' + info.componentStack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}
