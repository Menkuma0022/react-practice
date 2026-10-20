export function filterWeapons (weapons, type) {
    return  weapons.filter((weapon) => weapon.type === type)
}