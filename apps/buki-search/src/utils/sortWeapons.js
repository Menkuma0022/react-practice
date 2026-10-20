export function sortWeapons(weapons, order) {
    if (order === 'default') return weapons
    return weapons.toSorted((a,b) => a.name.localeCompare(b.name,'ja'))
}