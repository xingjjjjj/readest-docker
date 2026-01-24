// Legacy OAuth callback handler - no longer used
// JWT authentication now handled directly in AuthContext
// This file is kept for backward compatibility only

interface UseAuthCallbackOptions {
  accessToken?: string | null;
  refreshToken?: string | null;
  login: (accessToken: string, user: any) => void;
  navigate: (path: string) => void;
  type?: string | null;
  next?: string;
  error?: string | null;
  errorCode?: string | null;
  errorDescription?: string | null;
}

export function handleAuthCallback({
  accessToken,
  login,
  navigate,
  next = '/',
  error,
}: UseAuthCallbackOptions) {
  if (error) {
    navigate('/auth/error');
    return;
  }

  if (!accessToken) {
    navigate('/library');
    return;
  }

  login(accessToken, { id: 'xingjjjjj', email: 'admin@local' });
  navigate(next);
}
