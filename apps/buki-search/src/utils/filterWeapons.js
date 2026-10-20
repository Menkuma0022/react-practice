export function filterWeapons (weapons, type) {
    if (type === 'all') return weapons
    return  weapons.filter((weapon) => weapon.type === type)
}