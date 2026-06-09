import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

interface AuthScreenProps {
  authView: "login" | "signup" | "forgot_password" | "reset_password";
  setAuthView: (view: "login" | "signup" | "forgot_password" | "reset_password") => void;
  authEmail: string;
  setAuthEmail: (email: string) => void;
  authFullName: string;
  setAuthFullName: (name: string) => void;
  authPassword: string;
  setAuthPassword: (password: string) => void;
  authConfirmPassword: string;
  setAuthConfirmPassword: (password: string) => void;
  authError: string;
  setAuthError: (error: string) => void;
  authSuccessMsg: string;
  setAuthSuccessMsg: (msg: string) => void;
  authActionLoading: boolean;
  handleSignUp: (e: React.FormEvent) => Promise<void>;
  handleLogin: (e: React.FormEvent) => Promise<void>;
  handleForgotPassword: (e: React.FormEvent) => Promise<void>;
  handleUpdatePassword: (e: React.FormEvent) => Promise<void>;
  onSandboxBypass: () => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({
  authView,
  setAuthView,
  authEmail,
  setAuthEmail,
  authFullName,
  setAuthFullName,
  authPassword,
  setAuthPassword,
  authConfirmPassword,
  setAuthConfirmPassword,
  authError,
  setAuthError,
  authSuccessMsg,
  setAuthSuccessMsg,
  authActionLoading,
  handleSignUp,
  handleLogin,
  handleForgotPassword,
  handleUpdatePassword,
  onSandboxBypass,
}) => {
  // Password visible toggles
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  // Real-time local verification states
  const [localEmailError, setLocalEmailError] = useState<string>("");
  const [localPasswordError, setLocalPasswordError] = useState<string>("");
  const [localConfirmError, setLocalConfirmError] = useState<string>("");

  // Clear global error states on view switch
  const switchTabs = (view: "login" | "signup") => {
    setAuthError("");
    setAuthSuccessMsg("");
    setLocalEmailError("");
    setLocalPasswordError("");
    setLocalConfirmError("");
    setAuthView(view);
  };

  const switchView = (view: "login" | "signup" | "forgot_password" | "reset_password") => {
    setAuthError("");
    setAuthSuccessMsg("");
    setLocalEmailError("");
    setLocalPasswordError("");
    setLocalConfirmError("");
    setAuthView(view);
  };

  // Live validation triggers on input adjustments
  useEffect(() => {
    if (authEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(authEmail)) {
        setLocalEmailError("Please provide a valid email structure (e.g. name@domain.com).");
      } else {
        setLocalEmailError("");
      }
    } else {
      setLocalEmailError("");
    }
  }, [authEmail]);

  useEffect(() => {
    if (authPassword) {
      if (authPassword.length < 6) {
        setLocalPasswordError("Password credentials must be a minimum of 6 characters.");
      } else {
        setLocalPasswordError("");
      }
    } else {
      setLocalPasswordError("");
    }
  }, [authPassword]);

  useEffect(() => {
    if (authConfirmPassword && authPassword) {
      if (authConfirmPassword !== authPassword) {
        setLocalConfirmError("Password validation mismatch. Keys do not match.");
      } else {
        setLocalConfirmError("");
      }
    } else {
      setLocalConfirmError("");
    }
  }, [authConfirmPassword, authPassword]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full px-4 py-8 bg-[#0F0F0F] text-white selection:bg-white/10 selection:text-white font-sans">
      
      {/* Outer Branding Container */}
      <div className="text-center mb-6 flex flex-col items-center select-none animate-fadeIn">
        {/* Modern clean high contrast Gaks Logo Symbol */}
        <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl font-bold mb-3 shadow-[0_2px_15px_rgba(255,255,255,0.02)] transition-all">
          G
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white m-0">Gaks</h1>
        <p className="text-xs text-neutral-400 mt-1 font-normal">
          {authView === "login" && "Welcome back to Gaks."}
          {authView === "signup" && "Build your persistent Gaks workspace."}
          {authView === "forgot_password" && "Reset your secure parameters code."}
          {authView === "reset_password" && "Apply replacement security keys."}
        </p>
      </div>

      {/* Primary Authentication Card Container */}
      <div 
        id="auth-card"
        className="w-full max-w-[420px] bg-[#0F0F0F] border border-white/10 p-6 sm:p-8 rounded-2xl relative overflow-hidden transition-all duration-300"
      >
        {/* Subtle accent line on top of card using specified neutral highlight */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/20" />

        {/* Modular Switchable Tabs (Only shown on Login and SignUp views) */}
        {(authView === "login" || authView === "signup") && (
          <div className="flex w-full bg-white/5 p-1 rounded-xl mb-6 border border-white/5">
            <button
              type="button"
              id="tab-login-btn"
              onClick={() => switchTabs("login")}
              className={`flex-1 text-center py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                authView === "login"
                  ? "bg-white/10 text-white shadow-sm font-bold border border-white/10"
                  : "text-white/50 hover:text-white bg-transparent"
              }`}
            >
              Login
            </button>
            <button
              type="button"
              id="tab-signup-btn"
              onClick={() => switchTabs("signup")}
              className={`flex-1 text-center py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                authView === "signup"
                  ? "bg-white/10 text-white shadow-sm font-bold border border-white/10"
                  : "text-white/50 hover:text-white bg-transparent"
              }`}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Global Action Feedbacks */}
        {authError && (
          <div 
            id="auth-error-alert"
            className="p-3.5 mb-5 rounded-xl border border-white/15 bg-white/5 text-white/75 text-xs leading-relaxed animate-fadeIn"
          >
            <div className="flex items-start gap-2.5">
              <i className="ph ph-warning-circle text-base mt-0.5 text-white/50 flex-shrink-0" />
              <div>
                <span className="font-bold block mb-0.5 text-white">Authentication Alert</span>
                {authError}
              </div>
            </div>
            {(authError.toLowerCase().includes("hibernating") || authError.toLowerCase().includes("fetch") || authError.toLowerCase().includes("unreachable")) && (
              <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-col gap-2">
                <p className="text-[10px] text-white/50 m-0">The remote authentication node is currently sleeping or offline. You can play or analyze instantly using our Offline Sandbox Engine:</p>
                <button
                  type="button"
                  onClick={onSandboxBypass}
                  className="w-full h-10 bg-white hover:bg-white/90 text-black font-bold rounded-lg text-xs flex items-center justify-center gap-2 cursor-pointer transition-all border-none"
                >
                  <i className="ph ph-shield-check text-sm" />
                  <span>Bypass to Sandbox Session</span>
                </button>
              </div>
            )}
          </div>
        )}

        {authSuccessMsg && (
          <div 
            id="auth-success-alert"
            className="p-3.5 mb-5 rounded-xl border border-white/15 bg-white/5 text-white/80 text-xs leading-relaxed flex items-start gap-2.5 animate-fadeIn"
          >
            <i className="ph ph-check-circle text-base mt-0.5 text-white/50 flex-shrink-0" />
            <div>
              <span className="font-bold block mb-1 text-white">Operational Success</span>
              {authSuccessMsg}
            </div>
          </div>
        )}

        {/* DYNAMIC FORMS IMPLEMENTATION */}
        {authView === "login" && (
          <form id="login-form" onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="login-email" className="text-xs text-white/50 font-medium block mb-1.5 pl-0.5">
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                required
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                placeholder="name@domain.com"
                className="w-full bg-white/5 border border-white/10 text-white text-xs px-3.5 py-3 rounded-xl outline-none focus:border-white focus:ring-1 focus:ring-white/15 transition-all placeholder:text-white/30"
                disabled={authActionLoading}
              />
              {localEmailError && (
                <span id="login-email-validation" className="text-[11px] text-white/70 mt-1 block pl-0.5">{localEmailError}</span>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5 px-0.5">
                <label htmlFor="login-password" className="text-xs text-white/50 font-medium">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => switchView("forgot_password")}
                  className="text-xs text-white/55 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-right outline-none hover:underline font-medium"
                  disabled={authActionLoading}
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-white/5 border border-white/10 text-white text-xs pl-3.5 pr-10 py-3 rounded-xl outline-none focus:border-white focus:ring-1 focus:ring-white/15 transition-all placeholder:text-white/30"
                  disabled={authActionLoading}
                />
                <button
                  type="button"
                  id="toggle-login-password"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white p-1 cursor-pointer bg-transparent border-none outline-none flex items-center justify-center"
                  tabIndex={-1}
                >
                  <i className={`ph ${showPassword ? "ph-eye-slash" : "ph-eye"} text-base`} />
                </button>
              </div>
            </div>

            <button
              id="login-submit"
              type="submit"
              disabled={authActionLoading || !!localEmailError}
              className="w-full h-11 bg-white hover:opacity-90 disabled:bg-white/5 disabled:text-white/40 disabled:border disabled:border-white/10 text-black text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed select-none border-none cursor-pointer mt-6"
            >
              {authActionLoading ? (
                <>
                  <i className="ph ph-circle-notch animate-spin text-sm" />
                  <span>Logging into account...</span>
                </>
              ) : (
                <>
                  <i className="ph ph-sign-in text-sm" />
                  <span>Login</span>
                </>
              )}
            </button>

            <div className="relative flex py-3 items-center">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-4 text-[10px] uppercase font-mono font-bold tracking-widest text-white/50">OR</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <button
              type="button"
              onClick={onSandboxBypass}
              className="w-full h-11 bg-transparent hover:bg-white/5 border border-white/15 text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <i className="ph ph-shield-check text-sm" />
              <span>Enter Sandbox Mode (Skip Auth)</span>
            </button>

            {authError && (
              <div id="login-form-error" className="mt-3 text-[11px] text-white/80 font-medium text-center bg-white/5 border border-white/10 py-2 px-3 rounded-lg animate-fadeIn flex items-center justify-center gap-1.5">
                <i className="ph ph-warning-circle text-[13px] text-white/50 flex-shrink-0" />
                <span>{authError}</span>
              </div>
            )}
          </form>
        )}

        {authView === "signup" && (
          <form id="signup-form" onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label htmlFor="signup-name" className="text-xs text-white/50 font-medium block mb-1.5 pl-0.5">
                Full Name
              </label>
              <input
                id="signup-name"
                type="text"
                required
                value={authFullName}
                onChange={(e) => setAuthFullName(e.target.value)}
                placeholder="Full Name"
                className="w-full bg-white/5 border border-white/10 text-white text-xs px-3.5 py-3 rounded-xl outline-none focus:border-white focus:ring-1 focus:ring-white/15 transition-all placeholder:text-white/30"
                disabled={authActionLoading}
              />
            </div>

            <div>
              <label htmlFor="signup-email" className="text-xs text-white/50 font-medium block mb-1.5 pl-0.5">
                Email address
              </label>
              <input
                id="signup-email"
                type="email"
                required
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                placeholder="name@domain.com"
                className="w-full bg-white/5 border border-white/10 text-white text-xs px-3.5 py-3 rounded-xl outline-none focus:border-white focus:ring-1 focus:ring-white/15 transition-all placeholder:text-white/30"
                disabled={authActionLoading}
              />
              {localEmailError && (
                <span id="signup-email-validation" className="text-[11px] text-white/70 mt-1 block pl-0.5">{localEmailError}</span>
              )}
            </div>

            <div>
              <label htmlFor="signup-password" className="text-xs text-white/50 font-medium block mb-1.5 pl-0.5">
                Password
              </label>
              <div className="relative">
                <input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="w-full bg-white/5 border border-white/10 text-white text-xs pl-3.5 pr-10 py-3 rounded-xl outline-none focus:border-white focus:ring-1 focus:ring-white/15 transition-all placeholder:text-white/30"
                  disabled={authActionLoading}
                />
                <button
                  type="button"
                  id="toggle-signup-password"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white p-1 cursor-pointer bg-transparent border-none outline-none flex items-center justify-center"
                  tabIndex={-1}
                >
                  <i className={`ph ${showPassword ? "ph-eye-slash" : "ph-eye"} text-base`} />
                </button>
              </div>
              {localPasswordError && (
                <span id="signup-pass-validation" className="text-[11px] text-white/70 mt-1 block pl-0.5">{localPasswordError}</span>
              )}
            </div>

            <div>
              <label htmlFor="signup-confirm" className="text-xs text-white/50 font-medium block mb-1.5 pl-0.5">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="signup-confirm"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={authConfirmPassword}
                  onChange={(e) => setAuthConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  className="w-full bg-white/5 border border-white/10 text-white text-xs pl-3.5 pr-10 py-3 rounded-xl outline-none focus:border-white focus:ring-1 focus:ring-white/15 transition-all placeholder:text-white/30"
                  disabled={authActionLoading}
                />
                <button
                  type="button"
                  id="toggle-signup-confirm"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white p-1 cursor-pointer bg-transparent border-none outline-none flex items-center justify-center animate-fadeIn"
                  tabIndex={-1}
                >
                  <i className={`ph ${showConfirmPassword ? "ph-eye-slash" : "ph-eye"} text-base`} />
                </button>
              </div>
              {localConfirmError && (
                <span id="signup-confirm-validation" className="text-[11px] text-white/70 mt-1 block pl-0.5">{localConfirmError}</span>
              )}
            </div>

            <button
              id="signup-submit"
              type="submit"
              disabled={authActionLoading || !!localEmailError || !!localPasswordError || !!localConfirmError}
              className="w-full h-11 bg-white hover:opacity-90 disabled:bg-white/5 disabled:text-white/40 disabled:border disabled:border-white/10 text-black text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed select-none border-none cursor-pointer mt-6"
            >
              {authActionLoading ? (
                <>
                  <i className="ph ph-circle-notch animate-spin text-sm" />
                  <span>Staging algorithmic profile...</span>
                </>
              ) : (
                <>
                  <i className="ph ph-user-plus text-sm" />
                  <span>Create Account</span>
                </>
              )}
            </button>

            <div className="relative flex py-3 items-center">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-4 text-[10px] uppercase font-mono font-bold tracking-widest text-white/50">OR</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <button
              type="button"
              onClick={onSandboxBypass}
              className="w-full h-11 bg-transparent hover:bg-white/5 border border-white/15 text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <i className="ph ph-shield-check text-sm" />
              <span>Enter Sandbox Mode (Skip Auth)</span>
            </button>

            {authError && (
              <div id="signup-form-error" className="mt-3 text-[11px] text-white/80 font-medium text-center bg-white/5 border border-white/10 py-2 px-3 rounded-lg animate-fadeIn flex items-center justify-center gap-1.5">
                <i className="ph ph-warning-circle text-[13px] text-white/50 flex-shrink-0" />
                <span>{authError}</span>
              </div>
            )}
          </form>
        )}

        {authView === "forgot_password" && (
          <form id="forgot-password-form" onSubmit={handleForgotPassword} className="space-y-4">
            <div>
              <label htmlFor="forgot-email" className="text-xs text-white/50 font-medium block mb-1.5 pl-0.5">
                Email address
              </label>
              <input
                id="forgot-email"
                type="email"
                required
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                placeholder="name@domain.com"
                className="w-full bg-white/5 border border-white/10 text-white text-xs px-3.5 py-3 rounded-xl outline-none focus:border-white focus:ring-1 focus:ring-white/15 transition-all placeholder:text-white/30"
                disabled={authActionLoading}
              />
              {localEmailError && (
                <span className="text-[11px] text-white/70 mt-1 block pl-0.5">{localEmailError}</span>
              )}
            </div>

            <button
              id="forgot-submit"
              type="submit"
              disabled={authActionLoading || !!localEmailError}
              className="w-full h-11 bg-white hover:bg-neutral-200 disabled:bg-neutral-900 disabled:text-neutral-500 disabled:border disabled:border-neutral-800 text-black text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed select-none border-none cursor-pointer mt-4"
            >
              {authActionLoading ? (
                <>
                  <i className="ph ph-circle-notch animate-spin text-sm" />
                  <span>Sending secure redirect keys...</span>
                </>
              ) : (
                <>
                  <i className="ph ph-paper-plane-tilt text-sm" />
                  <span>Send Recovery Token</span>
                </>
              )}
            </button>

            <button
              id="forgot-back-to-login"
              type="button"
              onClick={() => switchView("login")}
              className="w-full h-10 bg-transparent border border-white/10 hover:border-white/20 text-white/60 hover:text-white text-xs font-semibold py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all select-none cursor-pointer"
              disabled={authActionLoading}
            >
              <i className="ph ph-arrow-left text-sm" />
              <span>Back to Login</span>
            </button>
          </form>
        )}

        {authView === "reset_password" && (
          <form id="reset-password-form" onSubmit={handleUpdatePassword} className="space-y-4">
            <div>
              <label htmlFor="reset-password" className="text-xs text-white/50 font-medium block mb-1.5 pl-0.5">
                New Password
              </label>
              <div className="relative">
                <input
                  id="reset-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="w-full bg-white/5 border border-white/10 text-white text-xs pl-3.5 pr-10 py-3 rounded-xl outline-none focus:border-white focus:ring-1 focus:ring-white/15 transition-all placeholder:text-white/30"
                  disabled={authActionLoading}
                />
                <button
                  type="button"
                  id="toggle-reset-password"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/45 hover:text-white p-1 cursor-pointer bg-transparent border-none outline-none flex items-center justify-center"
                  tabIndex={-1}
                >
                  <i className={`ph ${showPassword ? "ph-eye-slash" : "ph-eye"} text-base`} />
                </button>
              </div>
              {localPasswordError && (
                <span className="text-[11px] text-white/70 mt-1 block pl-0.5">{localPasswordError}</span>
              )}
            </div>

            <div>
              <label htmlFor="reset-confirm" className="text-xs text-white/50 font-medium block mb-1.5 pl-0.5">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="reset-confirm"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={authConfirmPassword}
                  onChange={(e) => setAuthConfirmPassword(e.target.value)}
                  placeholder="Confirm replacement password"
                  className="w-full bg-white/5 border border-white/10 text-white text-xs pl-3.5 pr-10 py-3 rounded-xl outline-none focus:border-white focus:ring-1 focus:ring-white/15 transition-all placeholder:text-white/30"
                  disabled={authActionLoading}
                />
                <button
                  type="button"
                  id="toggle-reset-confirm"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/45 hover:text-white p-1 cursor-pointer bg-transparent border-none outline-none flex items-center justify-center"
                  tabIndex={-1}
                >
                  <i className={`ph ${showConfirmPassword ? "ph-eye-slash" : "ph-eye"} text-base`} />
                </button>
              </div>
              {localConfirmError && (
                <span className="text-[11px] text-white/70 mt-1 block pl-0.5">{localConfirmError}</span>
              )}
            </div>

            <button
              id="reset-submit"
              type="submit"
              disabled={authActionLoading || !!localPasswordError || !!localConfirmError}
              className="w-full h-11 bg-white hover:bg-neutral-200 disabled:bg-neutral-900 disabled:text-neutral-500 disabled:border disabled:border-neutral-800 text-black text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed select-none border-none cursor-pointer mt-6"
            >
              {authActionLoading ? (
                <>
                  <i className="ph ph-circle-notch animate-spin text-sm" />
                  <span>Applying password overwrite...</span>
                </>
              ) : (
                <>
                  <i className="ph ph-keyhole text-sm" />
                  <span>Apply Password Overwrite</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
