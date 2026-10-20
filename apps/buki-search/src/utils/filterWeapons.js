export function filterWeapons (weapons, type) {
    return  weapons.filter((weapon) => type === 'all' || weapon.type === type)
}