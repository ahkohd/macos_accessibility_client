import test from 'ava'
import { applicationIsTrusted, applicationIsTrustedWithPrompt } from '../index.js'

test('check if application is granted accessiblity permission', (t) => {
  t.assert([true, false].includes(applicationIsTrusted()))
})

test('check if application is granted accessiblity permission with prompt', (t) => {
  t.assert([true, false].includes(applicationIsTrustedWithPrompt()))
})
