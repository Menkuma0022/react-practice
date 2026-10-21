import type { Weapon } from '../data/weapons'

export function sortWeapons(weapons: Weapon[], order: 'default' | 'name') {
    if (order === 'default') return weapons
    return weapons.toSorted((a,b) => a.name.localeCompare(b.name,'ja'))
}