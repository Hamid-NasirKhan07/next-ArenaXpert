/**
 * Normalize a player row from different sources (Prisma, legacy) into
 * a stable UI shape.
 *
 * Input examples:
 * - Prisma: { id, email, sport, displayName, speciality, description, contactNumber }
 * - Legacy: { _id, name, phone, ... }
 */
export function normalizePlayer(row) {
  if (!row) return null
  const id = row.id || row._id || row.email || null
  const displayName = row.displayName || row.name || ''
  const sport = row.sport || ''
  const speciality = row.speciality || ''
  const description = row.description || ''
  const contactNumber = row.contactNumber || row.phone || ''

  return {
    id,
    displayName,
    sport,
    speciality,
    description,
    contactNumber,
    // keep original row available for advanced use
    _raw: row,
  }
}

export default normalizePlayer
