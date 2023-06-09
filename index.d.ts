/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

/** Checks whether or not this application is a trusted accessibility client. */
export function applicationIsTrusted(): boolean
/**
 * Same as [application_is_trusted], but also shows the user a prompt asking
 * them to allow accessibility API access if it hasn't already been given.
 */
export function applicationIsTrustedWithPrompt(): boolean
