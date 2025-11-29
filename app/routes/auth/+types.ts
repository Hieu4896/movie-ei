interface MetaArgs {
  params: Record<string, never>;
  location: {
    pathname: string;
    search: string;
    hash: string;
    state: unknown;
    key: string;
  };
}

interface ErrorBoundaryProps {
  error: unknown;
}

export type { MetaArgs, ErrorBoundaryProps };
