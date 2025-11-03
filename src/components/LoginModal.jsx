"use client"

import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient as createSupabaseBrowserClient } from '@/lib/supabase/browserClient';
import Link from 'next/link';

export default function LoginModal() {
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const toggleForm = () => setIsLogin((v) => !v);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      if (isLogin) {
        if (!email.trim() || !password) {
          setError('Please enter both email and password');
          return;
        }
        const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) {
          setError(signInError.message || 'Invalid email or password');
          return;
        }
        const user = data.user;
        if (user) {
          localStorage.setItem('user', JSON.stringify({ id: user.id, name: user.user_metadata?.name || '', email: user.email || '' }));
          localStorage.setItem('arenaXpert/user', JSON.stringify(user));
        }
        router.refresh();
        router.push('/');
      } else {
        if (password !== confirmPassword) {
          setConfirmPasswordError(true);
          return;
        }
        setConfirmPasswordError(false);
        const redirectTo = `${window.location.origin}/auth/callback?next=/`;
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: redirectTo, data: { name } },
        });
        if (signUpError) {
          setError(signUpError.message || 'Registration failed');
          return;
        }
        if (data.user && !data.session) {
          setMessage('Check your email to confirm your account.');
          setIsLogin(true);
        } else {
          router.refresh();
          router.push('/');
        }
      }
    } catch (err) {
      console.error(err);
      setError(isLogin ? 'Login failed. Please try again.' : 'Registration failed. Please try again.');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const oauthSignIn = async (provider) => {
    setError('');
    const redirectTo = `${window.location.origin}/auth/callback?next=/`;
    const { error: oauthError } = await supabase.auth.signInWithOAuth({ provider, options: { redirectTo } });
    if (oauthError) setError(oauthError.message || 'OAuth sign-in failed');
  };

  return (
    <div
      className="modal fade"
      id="loginSignupModal"
      tabIndex="-1"
      aria-labelledby="loginSignupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ background: 'rgba(255,255,255,0.95)' }}>
          <div className="modal-header border-0">
            <h5 className="modal-title" id="loginSignupModalLabel">
              {isLogin ? 'Login' : 'Sign Up'}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {error && (
              <div className="alert alert-danger" role="alert">{error}</div>
            )}
            {message && (
              <div className="alert alert-success" role="alert">{message}</div>
            )}
            <div className="mb-3 text-center">
              <p className="mb-2">{isLogin ? 'Login with' : 'Sign up with'}</p>
              <div className="d-flex justify-content-center gap-2">
                <button type="button" onClick={() => oauthSignIn('google')} className="btn btn-outline-danger w-100">
                  <i className="fab fa-google me-2"></i> Google
                </button>
                <button type="button" onClick={() => oauthSignIn('github')} className="btn btn-outline-dark w-100">
                  <i className="fab fa-github me-2"></i> GitHub
                </button>
                  <button type="button" onClick={() => oauthSignIn('facebook')} className="btn btn-outline-primary w-100">
                    <i className="fab fa-facebook me-2"></i> Facebook
                  </button>
              </div>
            </div>

            <hr className="my-4" />

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="passwordInput" className="form-label">
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control pe-5"
                  id="passwordInput"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ height: '48px' }}
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="btn btn-sm p-0 border-0 bg-transparent position-absolute"
                  style={{
                    top: '70%',
                    right: '12px',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                  }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <i
                    className={`fa ${
                      showPassword ? 'fa-eye-slash' : 'fa-eye'
                    } text-secondary`}
                  ></i>
                </button>
              </div>

              {!isLogin && (
                <div className="mb-3">
                  <label htmlFor="confirmPasswordInput" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      confirmPasswordError ? 'border border-danger' : ''
                    }`}
                    id="confirmPasswordInput"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {confirmPasswordError && (
                    <small className="text-danger">Fill the field properly</small>
                  )}
                </div>
              )}
              <button type="submit" className="btn btn-primary w-100">
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
              <br/><br/>
              <Link href="/table"><button type="button" className="btn btn-primary w-100">
                Show data
              </button> 
              </Link>
            </form>

            <div className="text-center mt-3">
              <small>
                {isLogin ? (
                  <>
                    Don't have an account?{' '}
                    <a className="btn btn-link p-0" onClick={toggleForm}>
                      Sign up
                    </a>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <a className="btn btn-link p-0" onClick={toggleForm}>
                      Login
                    </a>
                  </>
                )}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

