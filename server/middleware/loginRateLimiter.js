const loginAttempts = new Map();

const LOGIN_RATE_LIMIT = {
  MAX_ATTEMPTS: 5,
  WINDOW_MS: 15 * 60 * 1000,
  LOCKOUT_MS: 30 * 60 * 1000,
};

function cleanExpiredAttempts() {
  const now = Date.now();
  for (const [key, data] of loginAttempts.entries()) {
    if (now - data.firstAttempt > LOGIN_RATE_LIMIT.WINDOW_MS) {
      loginAttempts.delete(key);
    }
  }
}

function getClientIdentifier(req) {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded ? forwarded.split(',')[0].trim() : req.ip || req.connection.remoteAddress;
  return `${ip}`;
}

export function loginRateLimiter(req, res, next) {
  cleanExpiredAttempts();

  const identifier = getClientIdentifier(req);
  const now = Date.now();

  const attemptData = loginAttempts.get(identifier);

  if (attemptData) {
    if (attemptData.lockedUntil && now < attemptData.lockedUntil) {
      const remainingTime = Math.ceil((attemptData.lockedUntil - now) / 1000 / 60);
      return res.status(429).json({
        success: false,
        error: `账户已锁定，请在 ${remainingTime} 分钟后重试`,
        lockedUntil: attemptData.lockedUntil
      });
    }

    if (attemptData.attempts >= LOGIN_RATE_LIMIT.MAX_ATTEMPTS) {
      attemptData.lockedUntil = now + LOGIN_RATE_LIMIT.LOCKOUT_MS;
      return res.status(429).json({
        success: false,
        error: '登录尝试次数过多，账户已被锁定30分钟',
        lockedUntil: attemptData.lockedUntil
      });
    }

    attemptData.attempts++;
    attemptData.lastAttempt = now;
  } else {
    loginAttempts.set(identifier, {
      attempts: 1,
      firstAttempt: now,
      lastAttempt: now,
      lockedUntil: null
    });
  }

  res.locals.loginIdentifier = identifier;
  next();
}

export function resetLoginAttempts(identifier) {
  loginAttempts.delete(identifier);
}

export function getLoginAttempts(identifier) {
  return loginAttempts.get(identifier);
}
