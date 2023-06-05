#![deny(clippy::all)]

use macos_accessibility_client::accessibility;

#[macro_use]
extern crate napi_derive;

#[napi]
/// Checks whether or not this application is a trusted accessibility client.
pub fn application_is_trusted() -> bool {
  accessibility::application_is_trusted()
}

#[napi]
/// Same as [application_is_trusted], but also shows the user a prompt asking
/// them to allow accessibility API access if it hasn't already been given.
pub fn application_is_trusted_with_prompt() -> bool {
  accessibility::application_is_trusted_with_prompt()
}
