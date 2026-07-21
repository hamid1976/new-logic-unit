/**
 * Accept analytics success only when the API confirms a real CRM lead.
 * Neutral anti-spam responses deliberately omit a lead ID and must not count.
 *
 * @param {unknown} result
 * @returns {result is { success: true, leadId: string, ignored?: false }}
 */
export function isTrackableLeadResult(result) {
  if (!result || typeof result !== 'object') return false

  const candidate = /** @type {{ success?: unknown, leadId?: unknown, ignored?: unknown }} */ (result)
  return candidate.success === true
    && candidate.ignored !== true
    && typeof candidate.leadId === 'string'
    && candidate.leadId.trim().length > 0
}
