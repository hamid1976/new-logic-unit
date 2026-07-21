import assert from 'node:assert/strict'
import { isTrackableLeadResult } from '../src/lib/lead-analytics.js'

assert.equal(
  isTrackableLeadResult({ success: true, leadId: '8dc3bdb5-3a91-458f-9557-3715ec740aa7' }),
  true,
  'A confirmed HubSpot lead should be trackable.',
)
assert.equal(
  isTrackableLeadResult({ success: true, ignored: true }),
  false,
  'A suppressed honeypot response must not be trackable.',
)
assert.equal(
  isTrackableLeadResult({ success: false, leadId: 'should-not-count' }),
  false,
  'A failed response must not be trackable.',
)
assert.equal(
  isTrackableLeadResult({ success: true }),
  false,
  'A response without a confirmed lead ID must not be trackable.',
)
assert.equal(isTrackableLeadResult(null), false, 'A malformed response must not be trackable.')

console.log('Lead analytics regression checks passed.')
