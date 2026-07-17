# Authentication

> HIKARI uses Base44's built-in authentication system.

## Auth Flow

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant A as Auth Provider
    U->>F: Enter email + password
    F->>A: register({ email, password })
    A-->>F: User created (unverified)
    F->>A: verifyOtp({ email, otpCode })
    A-->>F: access_token
    F->>F: setToken + redirect
```

## Methods

| Method | Description |
|---|---|
| Email + Password | Registration with OTP verification |
| Google OAuth | One-click sign-in |
| Facebook OAuth | Social login |

## SDK

```javascript
base44.auth.me()                    // Current user
base44.auth.isAuthenticated()      // Promise<boolean>
base44.auth.logout(redirectUrl?)   // Logout + redirect
base44.auth.updateMe(data)         // Update user profile
```

## Route Protection

```jsx
import ProtectedRoute from '@/components/ProtectedRoute';
<Route element={<ProtectedRoute />}>
  <Route path="/admin" element={<Admin />} />
</Route>
```

Hard redirects (`window.location.href`) are required after auth state changes.
