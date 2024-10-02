import db from './connection.ts'

export async function getVehiclesWithOwners() {
  const result = await db('vehicles')
    .join('owners', 'vehicles.owner_id', 'owners.id')
    .select(
      'vehicles.id as id',
      'vehicles.make as make',
      'vehicles.model as model',
      'vehicles.year as year',
      'owners.name as ownerName',
    )
  return result
}

export async function getVehicleWithOwnerById(id: number) {
  const result = await db('vehicles')
    .join('owners', 'vehicles.owner_id', 'owners.id')
    .select(
      'vehicles.id as id',
      'vehicles.make as make',
      'vehicles.model as model',
      'vehicles.year as year',
      'owners.name as ownerName',
    )
    .where('vehicles.id', id)
    .first()
  return result
}
