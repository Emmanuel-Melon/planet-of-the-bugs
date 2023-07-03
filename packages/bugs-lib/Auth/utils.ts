export const generateSalt = () => { }

export const hashPassword = (password: string, salt: number) => { }

export const comparePasswords = (password: string, target: string) => { };

export const createJWT = (user, secret: string) => { };

export enum ErrorCode {
    UserNotFound = "user-not-found",
    IncorrectPassword = "incorrect-password",
    UserMissingPassword = "missing-password",
    InternalServerError = "internal-server-error",
    RateLimitExceeded = "rate-limit-exceeded",
}

enum IdentityProvider {
    GOOGLE,
    GITHUB
}

export const identityProviderNameMap: { [key in IdentityProvider]: string } = {
    [IdentityProvider.GOOGLE]: "Google",
    [IdentityProvider.GITHUB]: "Github",
};
